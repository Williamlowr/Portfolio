import type { VercelRequest, VercelResponse } from "@vercel/node";
import { PROMPT } from "./prompt.js";

// List of models to try, in order
const MODELS = [
  "openai/gpt-oss-20b:free",
  "google/gemma-3-27b-it:free",
  "mistralai/devstral-2512:free",
  "tngtech/deepseek-r1t2-chimera:free",
];

// Function to attempt a chat completion with a specific model, move on if rate limit/quota error
async function tryModel(model: string, messages: any[]) {
  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages: [{ role: "system", content: PROMPT }, ...messages],
        stream: true,
      }),
    }
  );

  const isError = response.status === 429 || response.status === 402;

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    return {
      success: false,
      stream: null,
      isError,
      error: errorData,
    };
  }

  return {
    success: true,
    stream: response.body,
    isError: false,
  };
}

// Main handler function
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { messages } = req.body;
  // Basic validation
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Messages array is required" });
  }
  // Try each model in sequence
  for (const model of MODELS) {
    const result = await tryModel(model, messages);
    // If successful, return the response
    if (result.success && result.stream) {
      // Set headers for streaming
      res.setHeader("Content-Type", "text/event-stream");
      res.setHeader("Cache-Control", "no-cache");
      res.setHeader("Connection", "keep-alive");

      // Pipe the stream to response
      const reader = result.stream.getReader();
      const decoder = new TextDecoder();

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          res.write(decoder.decode(value, { stream: true }));
        }
        res.end();
        return;
      } catch (error) {
        console.error("Stream error:", error);
        res.end();
        return;
      }
    }

    // If rate limit or quota error, return error immediately
    if (!result.isError) {
      return res.status(500).json({ error: "API error", model });
    }
  }

  // All tokens exhausted
  return res.status(503).json({
    error: "All tokens exhausted. Please try again later.",
  });
}

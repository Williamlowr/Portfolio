// Function to send messages to the chatbot API and handle streaming response
export async function sendMessage(
  messages: { role: string; content: string }[],
  // Callback for each chunk of text received
  onChunk: (text: string) => void
) {
  const response = await fetch("/api/chatbot", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
  });

  if (!response.ok) {
    throw new Error("Chat request failed");
  }

  const reader = response.body?.getReader();
  const decoder = new TextDecoder();

  if (!reader) {
    throw new Error("No response stream");
  }

  let fullMessage = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    const chunk = decoder.decode(value, { stream: true });
    
    // Process chunk line by line
    const lines = chunk.split("\n").filter((line) => line.startsWith("data: "));

    for (const line of lines) {
      const data = line.replace("data: ", "");
      if (data === "[DONE]") continue;

      try {
        const parsed = JSON.parse(data);
        const content = parsed.choices?.[0]?.delta?.content || "";
        // Append and send chunk
        if (content) {
          fullMessage += content;
          onChunk(fullMessage); 
        }
      } catch {
      }
    }
  }

  return fullMessage;
}

// Usage in your component:
// 
// const [response, setResponse] = useState("");
// 
// await sendMessage(messages, (text) => {
//   setResponse(text); // Updates as chunks arrive
// });
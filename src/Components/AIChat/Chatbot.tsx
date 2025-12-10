import { useState, useRef, useEffect, FormEvent } from "react";
import { sendMessage } from "../AIChat/useChat";

// Define message structure
type Message = {
  id: number;
  from: "user" | "bot";
  text: string;
};

export default function Chatbot() {
  // State for chat open/close, input text, and messages
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [closedManually, setClosedManually] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  // Ref for scrolling to bottom
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto open chat after 1.5 seconds unless closed manually
  useEffect(() => {
    if (closedManually) return;

    const timer = setTimeout(() => {
      setOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, [closedManually]);

  const closeChat = () => {
    setOpen(false);
    setClosedManually(true); // prevents future auto-open
  };

  // Scroll to bottom when messages change or chat opens
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  function formatMessagesForChat(msgs: Message[]) {
    return (
      msgs
        // Exclude initial bot message from context
        .filter((m) => m.id !== 1)
        .map((m) => ({
          role: m.from === "user" ? "user" : "assistant",
          content: m.text,
        }))
    );
  }

  // Handle sending a message
  const handleSend = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      from: "user",
      text: input,
    };
    setMessages([...messages, userMessage]);
    setInput("");
    setIsLoading(true);

    let botResponse = "";
    await sendMessage(formatMessagesForChat([...messages, userMessage]), (text) => {
      botResponse = text;
      setMessages((prev) => {
        const updated = [...prev];
        if (updated[updated.length - 1]?.from === "bot") {
          updated[updated.length - 1].text = botResponse;
        } else {
          updated.push({
            id: updated.length + 1,
            from: "bot",
            text: botResponse,
          });
        }
        return updated;
      });
    });

    setIsLoading(false);
  };

  return (
    <>
      {/* Floating toggle button */}
      <button
        type="button"
        onClick={open ? closeChat : () => setOpen(true)}
        className="fixed bottom-9 right-9 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-slate-400 text-zinc-800 shadow-xl hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-300"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? "✕" : "💬"}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-12 z-50 w-80 max-w-[calc(100%-2rem)] rounded-2xl border border-zinc-400 bg-zinc-900/95 shadow-3xl backdrop-blur-sm">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-zinc-600 px-3 py-2">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-zinc-100">
                Demo Chatbot
              </span>
              <span className="text-xs text-zinc-400">Portfolio assistant</span>
            </div>
            <button
              type="button"
              onClick={closeChat}
              className="rounded-full px-2 py-1 text-xs bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-zinc-100"
            >
              Close
            </button>
          </div>

          {/* Messages */}
          <div className="max-h-64 space-y-2 overflow-y-auto px-3 py-2 text-sm">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${
                  // Align messages based on sender
                  m.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`rounded-2xl px-3 py-2 max-w-[80%] ${
                    m.from === "user"
                      ? // Style messages based on sender
                        "bg-zinc-400 text-slate-900 rounded-br-sm"
                      : "bg-zinc-800 text-zinc-100 rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-sm bg-zinc-800 px-3 py-2 text-zinc-100">
                  <span className="inline-flex gap-1">
                    <span className="animate-bounce">.</span>
                    <span
                      className="animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    >
                      .
                    </span>
                    <span
                      className="animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    >
                      .
                    </span>
                  </span>
                </div>
              </div>
            )}

            {/* Dummy div to scroll into view */}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSend}
            className="flex items-center gap-2 border-t border-zinc-600 px-2 py-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message here..."
              className="flex-1 rounded-xl border border-zinc-200 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-100 outline-none focus:ring-1 focus:ring-zinc-200"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="rounded-xl bg-slate-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-slate-500 disabled:opacity-40"
              disabled={!input.trim() || isLoading}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}

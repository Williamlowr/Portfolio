import { useState, useRef, useEffect, FormEvent } from "react";

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
  const [messages, setMessages] = useState<Message[]>([
    // Render initial bot message
    {
      id: 1,
      from: "bot",
      text: "Hi! I’m a demo chatbot for made for William's portfolio site. I have been provided the codebase to this site, so hopefully I can answer some questions!",
    },
  ]);

  // Ref for scrolling to bottom
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll to bottom when messages change or chat opens
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  // Toggle chat open/close
  function handleToggle() {
    setOpen((prev) => !prev);
  }

  // Handle sending a message
  function handleSend(e: FormEvent) {
    // Prevent default form submission
    e.preventDefault();
    // Trim input and check if not empty
    const text = input.trim();
    if (!text) return;

    // Create user message object
    const userMsg: Message = {
      id: Date.now(),
      from: "user",
      text,
    };

    // Add user message to state and clear input
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Bot response
    const botMsg: Message = {
      id: Date.now() + 1,
      from: "bot",
      text: "Thanks for your message! This is a static demo response.",
    };
    setTimeout(() => {
      setMessages((prev) => [...prev, botMsg]);
    }, 400);
  }

  return (
    <>
      {/* Floating toggle button */}
      <button
        type="button"
        onClick={handleToggle}
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
              <span className="text-xs text-zinc-400">
                Portfolio assistant
              </span>
            </div>
            <button
              type="button"
              onClick={handleToggle}
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
                    // Style messages based on sender
                      ? "bg-zinc-400 text-slate-900 rounded-br-sm"
                      : "bg-zinc-800 text-zinc-100 rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {/* Dummy div to scroll into view */}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="flex items-center gap-2 border-t border-zinc-600 px-2 py-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message here..."
              className="flex-1 rounded-xl border border-zinc-200 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-100 outline-none focus:ring-1 focus:ring-zinc-200"
            />
            <button
              type="submit"
              className="rounded-xl bg-slate-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-slate-500 disabled:opacity-40"
              disabled={!input.trim()}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}

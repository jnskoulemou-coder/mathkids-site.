"use client";

import { useState, useRef, useEffect } from "react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Salut ! 👋 Je peux te renseigner sur l'app de maths, les ebooks, ou les révisions BAC. Qu'est-ce qui t'intéresse ?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, open]);

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur inconnue");
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 w-80 sm:w-96 h-[28rem] bg-white rounded-2xl border border-slate-200 shadow-xl flex flex-col overflow-hidden">
          <div className="bg-indigo-600 text-white px-4 py-3 flex items-center justify-between">
            <span className="font-semibold text-sm">Assistant Jonas AI</span>
            <button
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white text-sm"
              aria-label="Fermer"
            >
              ✕
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`text-sm max-w-[85%] px-3 py-2 rounded-2xl whitespace-pre-wrap ${
                  m.role === "user"
                    ? "bg-indigo-600 text-white ml-auto rounded-br-sm"
                    : "bg-slate-100 text-slate-800 rounded-bl-sm"
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="text-sm text-slate-400 bg-slate-100 max-w-[85%] px-3 py-2 rounded-2xl rounded-bl-sm">
                ...
              </div>
            )}
            {error && <p className="text-xs text-red-500">{error}</p>}
          </div>

          <form onSubmit={handleSend} className="border-t border-slate-200 p-2 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pose ta question..."
              className="flex-1 text-sm px-3 py-2 rounded-full border border-slate-300 outline-none focus:border-indigo-500"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-indigo-700 transition disabled:opacity-50"
            >
              Envoyer
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        className="w-14 h-14 rounded-full bg-indigo-600 text-white text-2xl shadow-lg hover:bg-indigo-700 transition flex items-center justify-center"
        aria-label="Ouvrir le chat"
      >
        {open ? "✕" : "💬"}
      </button>
    </div>
  );
}

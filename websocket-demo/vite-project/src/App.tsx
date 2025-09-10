import React, { useEffect, useMemo, useRef, useState } from "react";
import { Send, Wifi, WifiOff, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

// --- Simple dark, modern chat UI that connects to ws://<host>:5000 ---
// Backend expected: your provided ws broadcast server
// This component is self-contained. Drop it into a Vite/CRA app and render.

// Utility: generate a lightweight id
const uid = () => Math.random().toString(36).slice(2) + Date.now().toString(36);

// Pick a stable username color for other users
const avatarColors = [
  "bg-indigo-500",
  "bg-emerald-500",
  "bg-pink-500",
  "bg-amber-500",
  "bg-cyan-500",
  "bg-fuchsia-500",
];

export default function DarkChatApp() {
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [isConnecting, setIsConnecting] = useState(true);
  const [isOnline, setIsOnline] = useState(false);
  const [messages, setMessages] = useState<
    { id: string; text: string; sender: "me" | "other"; at: number; avatar?: string }[]
  >([]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement | null>(null);
  const myId = useMemo(() => uid(), []);
  const colorForOthers = useMemo(
    () => avatarColors[Math.floor(Math.random() * avatarColors.length)],
    []
  );

  // Build WS URL from current host (handy if not localhost)
  const wsUrl = useMemo(() => {
    const host = typeof window !== "undefined" ? window.location.hostname : "localhost";
    return `ws://${host}:5000`;
  }, []);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Connect + Reconnect logic with simple backoff
  useEffect(() => {
    let socket: WebSocket | null = null;
    let attempts = 0;
    let stop = false;

    const connect = () => {
      setIsConnecting(true);
      socket = new WebSocket(wsUrl);

      socket.onopen = () => {
        setWs(socket);
        setIsConnecting(false);
        setIsOnline(true);
        attempts = 0;
      };
      socket.onmessage = (ev) => {
        // Server broadcasts plain text; ensure string
        const txt = typeof ev.data === "string" ? ev.data : String(ev.data);
        setMessages((prev) => [
          ...prev,
          { id: uid(), text: txt, sender: "other", at: Date.now(), avatar: colorForOthers },
        ]);
      };
      socket.onclose = () => {
        setIsOnline(false);
        setWs(null);
        if (!stop) {
          attempts += 1;
          const delay = Math.min(1000 * 2 ** attempts, 8000);
          setTimeout(connect, delay);
        }
      };
      socket.onerror = () => {
        // Will close and trigger reconnect
      };
    };

    connect();
    return () => {
      stop = true;
      socket?.close();
    };
  }, [wsUrl, colorForOthers]);

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;
    // Push locally so sender also sees their own message (server doesn’t echo to sender)
    setMessages((prev) => [
      ...prev,
      { id: uid(), text, sender: "me", at: Date.now() },
    ]);
    setInput("");
    ws?.readyState === WebSocket.OPEN && ws.send(text);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#0B0F14] text-zinc-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl grid grid-rows-[auto,1fr,auto] rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-gradient-to-b from-[#0B0F14] to-[#0a0d12]">
        {/* Header */}
        <div className="backdrop-blur sticky top-0 z-10 flex items-center justify-between px-5 py-4 border-b border-white/5 bg-white/5">
          <div className="flex items-center gap-3">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="size-9 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500"
            />
            <div>
              <div className="font-semibold tracking-tight">Nebula Chat</div>
              <div className="text-xs text-zinc-400">Modern Dark • Realtime</div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs">
            {isConnecting ? (
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-yellow-500/10 text-yellow-300 border border-yellow-500/20">
                <Loader2 className="h-3.5 w-3.5 animate-spin" /> Connecting
              </span>
            ) : isOnline ? (
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                <Wifi className="h-3.5 w-3.5" /> Connected
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20">
                <WifiOff className="h-3.5 w-3.5" /> Reconnecting…
              </span>
            )}
          </div>
        </div>

        {/* Messages */}
        <div className="overflow-y-auto px-3 sm:px-6 py-4 space-y-4">
          {messages.length === 0 && (
            <div className="text-center text-sm text-zinc-400 py-16">
              Say hi 👋 — your messages will appear here.
            </div>
          )}

          {messages.map((m) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18 }}
              className={`flex items-end ${m.sender === "me" ? "justify-end" : "justify-start"}`}
            >
              {m.sender === "other" && (
                <div className={`mr-2 size-8 rounded-xl ${m.avatar || "bg-indigo-500"}`} />
              )}

              <div
                className={`max-w-[78%] sm:max-w-[70%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow-lg border backdrop-blur 
                ${
                  m.sender === "me"
                    ? "bg-indigo-500/20 border-indigo-400/20 text-indigo-100"
                    : "bg-white/5 border-white/10 text-zinc-100"
                }`}
              >
                <div className="whitespace-pre-wrap break-words">{m.text}</div>
                <div className="mt-1.5 text-[10px] text-zinc-400">
                  {new Date(m.at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </div>
              </div>

              {m.sender === "me" && (
                <div className="ml-2 size-3 rounded-full bg-indigo-400/70" />
              )}
            </motion.div>
          ))}

          <div ref={endRef} />
        </div>

        {/* Input */}
        <div className="p-3 sm:p-4 border-t border-white/5 bg-black/20">
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-2xl px-3 py-2.5 focus-within:border-indigo-400/40">
            <input
              className="flex-1 bg-transparent outline-none text-sm placeholder:text-zinc-500"
              placeholder="Type a message…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              maxLength={2000}
            />
            <button
              onClick={sendMessage}
              className="inline-flex items-center gap-1.5 text-xs font-medium rounded-xl px-3 py-2 bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-400/30 active:scale-[.98] transition"
            >
              <Send className="h-4 w-4" /> Send
            </button>
          </div>
          <div className="mt-2 text-[10px] text-zinc-500 text-right">
            Runs on ws://host:5000 • press Enter to send
          </div>
        </div>
      </div>
    </div>
  );
}

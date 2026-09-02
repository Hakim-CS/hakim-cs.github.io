import { useEffect, useRef, useState } from "react";
import { Terminal } from "lucide-react";

type Line = { prompt?: boolean; text: string; muted?: boolean };

const SCRIPT: Line[] = [
  { prompt: true, text: "whoami" },
  { text: "abdul-hakim-nazary" },
  { prompt: true, text: "cat stack.json" },
  { text: '{ "languages": ["Go", "Python", "Java"],' },
  { text: '  "databases": ["PostgreSQL", "MS SQL"],' },
  { text: '  "tools":     ["Docker", "Git", "REST"],' },
  { text: '  "focus":     "high-concurrency systems" }' },
  { prompt: true, text: "uptime --location" },
  { text: "Dresden, DE · TU Dresden · AI research", muted: true },
  { prompt: true, text: "echo $STATUS" },
  { text: "shipping_things", muted: false },
];

export function TypingTerminal() {
  const [rendered, setRendered] = useState<Line[]>([]);
  const [typed, setTyped] = useState("");
  const [idx, setIdx] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (idx >= SCRIPT.length) return;
    const line = SCRIPT[idx];
    const speed = line.prompt ? 55 : 12;

    if (typed.length < line.text.length) {
      const t = setTimeout(() => setTyped(line.text.slice(0, typed.length + 1)), speed);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setRendered((r) => [...r, line]);
      setTyped("");
      setIdx((i) => i + 1);
    }, line.prompt ? 320 : 90);
    return () => clearTimeout(t);
  }, [typed, idx]);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: "smooth" });
  }, [rendered.length]);

  const current = idx < SCRIPT.length ? SCRIPT[idx] : null;

  return (
    <div className="relative">
      <div className="absolute -inset-px bg-gradient-primary rounded-2xl blur-xl opacity-25" />
      <div className="relative rounded-2xl overflow-hidden border border-primary/25 bg-card/85 backdrop-blur-xl shadow-elegant crt">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border/70 bg-muted/40">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-destructive/70" />
            <span className="w-3 h-3 rounded-full bg-primary/60" />
            <span className="w-3 h-3 rounded-full bg-primary/90" />
          </div>
          <div className="flex-1 text-center text-xs font-mono text-muted-foreground flex items-center justify-center gap-2">
            <Terminal className="h-3 w-3" />
            hakim@dresden:~
          </div>
        </div>

        <div
          ref={bodyRef}
          className="p-6 font-mono text-[13px] leading-relaxed h-[340px] overflow-hidden text-primary/90"
        >
          {rendered.map((l, i) => (
            <div key={i} className={`whitespace-pre ${l.muted ? "text-muted-foreground" : "text-foreground/90"}`}>
              {l.prompt && <span className="text-primary mr-1.5">❯</span>}
              {l.text}
            </div>
          ))}
          {current && (
            <div className={`whitespace-pre ${current.muted ? "text-muted-foreground" : "text-foreground/90"}`}>
              {current.prompt && <span className="text-primary mr-1.5">❯</span>}
              {typed}
              <span className="cursor-blink text-primary">▋</span>
            </div>
          )}
          {!current && (
            <div className="text-primary">
              <span className="mr-1.5">❯</span>
              <span className="cursor-blink">▋</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

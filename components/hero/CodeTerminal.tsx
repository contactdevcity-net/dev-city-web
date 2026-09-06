"use client";

import { useEffect, useRef } from "react";

const CODE_LINES = [
  { text: "const", color: "#c678dd" },
  { text: " app ", color: "#e5c07b" },
  { text: "= ", color: "#abb2bf" },
  { text: "DevCity", color: "#61afef" },
  { text: ".", color: "#abb2bf" },
  { text: "create", color: "#98c379" },
  { text: "({", color: "#abb2bf" },
  { text: "\n", color: "" },
  { text: "  name", color: "#e06c75" },
  { text: ": ", color: "#abb2bf" },
  { text: '"your-next-product"', color: "#98c379" },
  { text: ",", color: "#abb2bf" },
  { text: "\n", color: "" },
  { text: "  stack", color: "#e06c75" },
  { text: ": [", color: "#abb2bf" },
  { text: '"React"', color: "#98c379" },
  { text: ", ", color: "#abb2bf" },
  { text: '"Node"', color: "#98c379" },
  { text: ", ", color: "#abb2bf" },
  { text: '"AI"', color: "#98c379" },
  { text: "],", color: "#abb2bf" },
  { text: "\n", color: "" },
  { text: "  scale", color: "#e06c75" },
  { text: ": ", color: "#abb2bf" },
  { text: '"production"', color: "#98c379" },
  { text: ",", color: "#abb2bf" },
  { text: "\n", color: "" },
  { text: "  quality", color: "#e06c75" },
  { text: ": ", color: "#abb2bf" },
  { text: "Infinity", color: "#d19a66" },
  { text: ",", color: "#abb2bf" },
  { text: "\n", color: "" },
  { text: "});", color: "#abb2bf" },
];

export function CodeTerminal() {
  const codeRef = useRef<HTMLPreElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const codeEl = codeRef.current;
    const cursorEl = cursorRef.current;
    if (!codeEl || !cursorEl) return;

    let tokenIndex = 0;
    let charIndex = 0;
    let timeout: ReturnType<typeof setTimeout>;

    function type() {
      if (tokenIndex >= CODE_LINES.length) {
        // Reset and restart after a pause
        timeout = setTimeout(() => {
          if (codeEl) codeEl.innerHTML = "";
          tokenIndex = 0;
          charIndex = 0;
          type();
        }, 4000);
        return;
      }

      const token = CODE_LINES[tokenIndex];
      if (token.text === "\n") {
        if (codeEl) codeEl.innerHTML += "<br/>";
        tokenIndex++;
        charIndex = 0;
        timeout = setTimeout(type, 100);
        return;
      }

      if (charIndex < token.text.length) {
        const char = token.text[charIndex];
        const span = document.createElement("span");
        span.style.color = token.color;
        span.textContent = char;
        if (codeEl) codeEl.appendChild(span);
        charIndex++;
        timeout = setTimeout(type, 30 + Math.random() * 40);
      } else {
        tokenIndex++;
        charIndex = 0;
        timeout = setTimeout(type, 10);
      }
    }

    // Start typing after a delay
    timeout = setTimeout(type, 1200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="hero-terminal relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#1e1e2e]/90 shadow-2xl shadow-primary/10 backdrop-blur-sm">
      {/* Terminal header bar */}
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="block h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="block h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="block h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="ml-2 text-[11px] font-medium text-white/30">app.ts</span>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="block h-1.5 w-6 rounded-full bg-white/10" />
          <span className="block h-1.5 w-4 rounded-full bg-white/10" />
        </div>
      </div>

      {/* Code area */}
      <div className="p-5 font-mono text-[13px] leading-relaxed sm:p-6 sm:text-sm">
        <pre
          ref={codeRef}
          className="inline whitespace-pre-wrap"
          aria-label="Animated code demonstration"
        />
        <span
          ref={cursorRef}
          className="inline-block h-[1.1em] w-[2px] translate-y-[2px] bg-primary"
          style={{ animation: "blink 1s step-end infinite" }}
        />
      </div>

      {/* Glow effect behind the terminal */}
      <div
        className="pointer-events-none absolute -inset-px -z-10 rounded-2xl"
        style={{
          background: "linear-gradient(135deg, #4646ab33 0%, transparent 50%, #6b5ce733 100%)",
        }}
      />
    </div>
  );
}

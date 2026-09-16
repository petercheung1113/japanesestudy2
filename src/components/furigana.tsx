import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FuriganaProps {
  text: string;
  className?: string;
  showReading?: boolean;
}

export function stripFurigana(text: string): string {
  return text.replace(/\[([^\]]+)\]/g, "").replace(/\s+/g, "");
}

export function Furigana({ text, className, showReading = true }: FuriganaProps) {
  const nodes: ReactNode[] = [];
  let last = 0;
  let key = 0;
  const regex = /([^\s\[\]]+)\[([^\]]+)\]/g;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(text))) {
    if (match.index > last) {
      nodes.push(<span key={key++}>{text.slice(last, match.index)}</span>);
    }
    const base = match[1];
    const reading = match[2];
    if (showReading) {
      nodes.push(
        <ruby key={key++}>
          {base}
          <rt className="select-none text-[0.55em] font-normal text-muted">{reading}</rt>
        </ruby>,
      );
    } else {
      nodes.push(<span key={key++}>{base}</span>);
    }
    last = match.index + match[0].length;
  }
  if (last < text.length) {
    nodes.push(<span key={key++}>{text.slice(last)}</span>);
  }
  return <span className={cn("leading-loose", className)}>{nodes}</span>;
}

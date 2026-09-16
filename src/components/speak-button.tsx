import { Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { speakJapanese } from "@/lib/speech";
import { cn } from "@/lib/utils";

export function SpeakButton({
  text,
  label = "朗讀",
  className,
  rate,
}: {
  text: string;
  label?: string;
  className?: string;
  rate?: number;
}) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-sm"
      className={cn("text-primary", className)}
      aria-label={label}
      onClick={(event) => {
        event.stopPropagation();
        speakJapanese(text, rate);
      }}
    >
      <Volume2 />
    </Button>
  );
}

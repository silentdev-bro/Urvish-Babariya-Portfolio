import React from "react";
import { cn } from "@/lib/utils";

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  elevated?: boolean;
}

export function GlassPanel({ className, elevated = false, children, ...props }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "rounded-2xl transition-all duration-300",
        elevated ? "liquid-glass-elevated" : "liquid-glass",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

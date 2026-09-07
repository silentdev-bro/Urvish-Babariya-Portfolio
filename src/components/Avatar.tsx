"use client";
import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Avatar({ className }: { className?: string }) {
  const [error, setError] = useState(false);

  return (
    <div className={cn("relative overflow-hidden rounded-[2rem] liquid-glass-elevated flex items-center justify-center shrink-0", className)}>
      {!error ? (
        <Image
          src="/profile.jpg"
          alt="Urvish Babariya"
          fill
          className="object-cover"
          onError={() => setError(true)}
          unoptimized // To prevent errors if the file is completely missing before build
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-tr from-ascent-1 to-ascent-2 flex items-center justify-center text-ink font-display text-4xl sm:text-6xl tracking-tighter">
          UB
        </div>
      )}
    </div>
  );
}

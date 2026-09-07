"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorSpotlight() {
  const [isMounted, setIsMounted] = useState(false);
  
  // Raw mouse positions
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Multiple springs with varying stiffness/mass to create the "scatter" effect
  // When you move fast, they separate. When you stop, they catch up.
  const spring1 = { damping: 25, stiffness: 600, mass: 0.1 };
  const spring2 = { damping: 25, stiffness: 400, mass: 0.3 };
  const spring3 = { damping: 25, stiffness: 250, mass: 0.5 };
  const spring4 = { damping: 25, stiffness: 150, mass: 0.7 };
  const spring5 = { damping: 25, stiffness: 90, mass: 0.9 };

  const x1 = useSpring(cursorX, spring1);
  const y1 = useSpring(cursorY, spring1);
  
  const x2 = useSpring(cursorX, spring2);
  const y2 = useSpring(cursorY, spring2);
  
  const x3 = useSpring(cursorX, spring3);
  const y3 = useSpring(cursorY, spring3);
  
  const x4 = useSpring(cursorX, spring4);
  const y4 = useSpring(cursorY, spring4);

  const x5 = useSpring(cursorX, spring5);
  const y5 = useSpring(cursorY, spring5);

  useEffect(() => {
    setIsMounted(true);
    
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      // Set to exact cursor position, we'll center via CSS transform
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [cursorX, cursorY]);

  if (!isMounted) return null;

  return (
    <>
      {/* SVG Gooey Filter Definition */}
      <svg style={{ position: "absolute", width: 0, height: 0 }} aria-hidden="true">
        <filter id="cursor-goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix 
            in="blur" 
            mode="matrix" 
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15" 
            result="goo" 
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </svg>

      {/* The Container holding the scattered blobs */}
      <div 
        className="pointer-events-none fixed inset-0 z-50 mix-blend-difference"
        style={{ filter: "url(#cursor-goo)" }}
      >
        <motion.div
          className="absolute top-0 left-0 rounded-full bg-mist"
          style={{ width: 80, height: 80, x: x1, y: y1, translateX: "-50%", translateY: "-50%" }}
        />
        <motion.div
          className="absolute top-0 left-0 rounded-full bg-mist"
          style={{ width: 64, height: 64, x: x2, y: y2, translateX: "-50%", translateY: "-50%" }}
        />
        <motion.div
          className="absolute top-0 left-0 rounded-full bg-mist"
          style={{ width: 48, height: 48, x: x3, y: y3, translateX: "-50%", translateY: "-50%" }}
        />
        <motion.div
          className="absolute top-0 left-0 rounded-full bg-mist"
          style={{ width: 32, height: 32, x: x4, y: y4, translateX: "-50%", translateY: "-50%" }}
        />
        <motion.div
          className="absolute top-0 left-0 rounded-full bg-mist"
          style={{ width: 24, height: 24, x: x5, y: y5, translateX: "-50%", translateY: "-50%" }}
        />
      </div>
    </>
  );
}

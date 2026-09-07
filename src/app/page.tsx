"use client";
import React, { useEffect } from "react";
import Lenis from "lenis";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { EducationTimeline } from "@/components/EducationTimeline";
import { Skills } from "@/components/Skills";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";
import { AchievementsPath } from "@/components/AchievementsPath";
import { Leadership } from "@/components/Leadership";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="flex flex-col min-h-screen">
      <Nav />
      <Hero />
      <About />
      <EducationTimeline />
      <Skills />
      <ProjectsCarousel />
      <AchievementsPath />
      <Leadership />
      <Contact />
      <Footer />
    </main>
  );
}

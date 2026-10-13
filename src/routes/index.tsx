import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import {
  About,
  Skills,
  Experience,
  Achievements,
  Certifications,
  PersonalSkills,
} from "@/components/portfolio/ResumeSections";
import { Projects } from "@/components/portfolio/Projects";
import { Contact, Footer } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Praveen M | AI & Data Science Portfolio" },
      {
        name: "description",
        content:
          "Meet Praveen M, an Artificial Intelligence and Data Science engineering student. Explore his AI projects, technical skills, internship experience and achievements.",
      },
      { property: "og:title", content: "Praveen M | AI & Data Science Portfolio" },
      {
        property: "og:description",
        content:
          "AI-powered projects, hands-on learning and a curious mind. The portfolio of Praveen M, B.Tech Artificial Intelligence and Data Science student.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    document.querySelectorAll(".section-space").forEach((section) => {
      if (section.getBoundingClientRect().top > window.innerHeight) {
        section.classList.add("reveal-ready");
        observer.observe(section);
      }
    });
    return () => {
      observer.disconnect();
      document
        .querySelectorAll(".reveal-ready")
        .forEach((section) => section.classList.remove("reveal-ready"));
    };
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Certifications />
      <PersonalSkills />
      <Contact />
      <Footer />
    </>
  );
}

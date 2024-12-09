"use client";

import ContactBlock from "@/components/ContactBlock";
import Introductions from "@/components/Introductions";
import SkillBlock from "@/components/SkillBlock";
import PortfolioStories from "@/components/PortfolioStories";
import Experience from "./experience/page";
import ProjectDisplay from "@/components/ProjectDisplay";


export default function Home() {
  return (
    <main className="flex-1 gap-6 ">
      <Introductions />
      <Experience />
      <ProjectDisplay />
      <SkillBlock />
      <ContactBlock />
    </main>
  );
}

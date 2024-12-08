"use client"

import ContactBlock from "@/components/ContactBlock";
import Introductions from "@/components/Introductions";
import ProjectBlock from "@/components/ProjectBlock";
import SkillBlock from "@/components/SkillBlock";
import Experience from "./experience/page";


export default function Home() {
  return (
    <main className="flex-1 gap-6">
      <Introductions />
      <Experience />
      <ProjectBlock />
      <SkillBlock />
      <ContactBlock />
    </main>
  );
}

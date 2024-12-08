import Introductions from "@/components/Introductions";
import Contact from "./contact/page";
import Experiences from "./experiences/page";
import Projects from "./projects/page";
import Skills from "./skills/page";

export default function Home() {
  return (
    <main>
      <Introductions />
      <Experiences />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

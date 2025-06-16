import Hero from "../components/Hero";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Experience from "../components/Experience";
import Projects from "./projects";
import Blog from "./blog";
import Contact from "./contact";
import { Result } from "postcss";
import Resume from "./resume";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <main className="bg-[#0d1117] text-white">
      <SEO />
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Blog />
      <Contact />
      <Resume />
    </main>
  );
}

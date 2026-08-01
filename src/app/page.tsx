import { Hero } from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import Terrain from "@/components/Terrain";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/**
 * Homepage V4 — sections sur fond quadrillé commun :
 * Hero → About → Stack → Projets → Parcours → Terrain → Contact.
 */

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Terrain />
      <Contact />
      <Footer />
    </>
  );
}

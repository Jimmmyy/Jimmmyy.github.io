import { Hero } from "@/components/Hero";
import Projects from "@/components/Projects/Projects";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { History } from "@/components/History";

/**
 * Main homepage.
 * Renders the Hero, Projects, History, About, and Footer sections.
 */

export default function HomePage() {
  return (
    <>
      <header className="w-full flex justify-end px-6 py-4">
        {/* <ThemeToggle /> */}
      </header>
      <Hero />
      <main className="flex flex-col gap-20 px-6 py-10 max-w-5xl mx-auto">
        <Projects />
        <History />
        <About />
      </main>
      <Footer />
    </>
  );
}

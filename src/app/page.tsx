import { Hero } from "@/components/Hero";
import Projects from "@/components/Projects/Projects";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { History } from "@/components/History";

/**
 * Homepage — sections avec fonds alternés pour une séparation visuelle naturelle.
 * Projects : bg-white / dark légèrement plus clair
 * History  : hérite du body (slate-50 / dark)
 * About    : bg-white / dark — card interne
 */

export default function HomePage() {
  return (
    <>
      {/* Hero — hérite du fond body (slate-50 / dark) */}
      <Hero />

      {/* Projects — fond blanc pour contraster avec le body */}
      <div className="w-full bg-white dark:bg-[#070e1c]">
        <Projects />
      </div>

      {/* History — fond body (slate-50 / dark) */}
      <History />

      {/* About — fond blanc */}
      <div className="w-full bg-white dark:bg-[#070e1c]">
        <About />
      </div>

      <Footer />
    </>
  );
}

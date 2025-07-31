"use client";

/**
 * Hero section of the portfolio.
 * Displays the user's name, a short introduction, and a portrait.
 * Includes a call-to-action button to scroll to the Projects section.
 */

import HeroPortrait from "@/components/Hero/HeroPortrait";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 max-w-7xl mx-auto gap-12 md:gap-20"
    >
      <div className="text-center md:text-left md:w-1/2">
        <p className="text-3xl font-semibold text-white mb-3 tracking-wide drop-shadow-sm">
          {`Hello, I'm`}
        </p>
        <h1 className="text-6xl sm:text-7xl font-extrabold text-white mb-5 tracking-tight leading-tight drop-shadow-md">
          Jimmy Nguyen
        </h1>
        <p className="text-xl sm:text-2xl text-white/80 max-w-xl mb-10 leading-relaxed drop-shadow-sm">
          Data Engineer with a passion for building scalable data platforms and
          enabling data-driven decisions.
        </p>
        <a
          href="#projects"
          className="inline-block px-8 py-4 bg-blue-800 text-white text-base sm:text-lg rounded-full font-semibold hover:bg-blue-900 transition shadow-lg hover:-translate-y-1 hover:shadow-xl transform duration-300 ease-in-out"
        >
          Continue
        </a>
      </div>

      <HeroPortrait />
    </section>
  );
};

export default Hero;

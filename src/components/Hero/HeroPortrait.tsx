import Image from "next/image";

/**
 * Renders the user's portrait image in a rounded, styled container.
 * Used in the Hero section.
 */

const HeroPortrait = () => (
  <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white/30 dark:border-white/20 shadow-2xl md:w-1/2 flex items-center justify-center ring-4 ring-blue-400/30">
    <Image
      src="/images/jim-v2.jpg"
      alt="Jimmy Nguyen"
      fill
      className="object-cover object-top"
      priority
    />
  </div>
);

export default HeroPortrait;

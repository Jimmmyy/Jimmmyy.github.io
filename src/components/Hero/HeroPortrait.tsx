import Image from "next/image";

/**
 * Renders the user's portrait image in a rounded, styled container.
 * Used in the Hero section.
 */

const HeroPortrait = () => (
  <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl md:w-1/2 flex items-center justify-center">
    <Image
      src="/images/test.png"
      alt="Jimmy"
      fill
      className="object-cover object-center grayscale"
      priority
    />
  </div>
);

export default HeroPortrait;

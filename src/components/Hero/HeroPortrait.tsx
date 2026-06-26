import Image from "next/image";

/**
 * Portrait Hero — cercle large, visage centré à ~20% du haut de l'image.
 * Anneau bleu discret + légère ombre pour le relief.
 */

const HeroPortrait = () => (
  <div className="relative flex-shrink-0">
    {/* Anneau décoratif décalé */}
    <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 dark:border-blue-500/20 translate-x-2 translate-y-2" />

    {/* Cercle photo */}
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/60 dark:ring-white/10">
      <Image
        src="/images/jim-v2.jpg"
        alt="Jimmy Nguyen"
        fill
        className="object-cover"
        style={{ objectPosition: "50% 20%" }}
        priority
        sizes="(max-width: 640px) 256px, 320px"
      />
    </div>
  </div>
);

export default HeroPortrait;

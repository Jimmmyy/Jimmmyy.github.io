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
    <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-100 dark:ring-white/10">
      <Image
        src="/images/jim-v2.jpg"
        alt="Jimmy Nguyen"
        fill
        className="object-cover"
        style={{ objectPosition: "50% 20%" }}
        priority
        sizes="(max-width: 640px) 288px, 384px"
      />
    </div>
  </div>
);

export default HeroPortrait;

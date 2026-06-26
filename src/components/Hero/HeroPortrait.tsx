import Image from "next/image";

/**
 * Hero portrait — carte portrait 3/4 avec effet de profondeur.
 * La photo jim-v2.jpg a un visage positionné à ~15% du haut,
 * on centre l'affichage sur [50%_15%] pour ne jamais couper le visage.
 */

const HeroPortrait = () => (
  <div className="relative flex-shrink-0 flex items-center justify-center md:w-1/2">
    {/* Blob décoratif derrière */}
    <div className="absolute w-72 h-96 sm:w-80 sm:h-[26rem] rounded-3xl bg-gradient-to-br from-blue-500/30 to-indigo-600/20 dark:from-blue-600/25 dark:to-indigo-700/15 translate-x-4 translate-y-4 blur-sm" />

    {/* Carte décalée pour effet de profondeur */}
    <div className="absolute w-72 h-96 sm:w-80 sm:h-[26rem] rounded-3xl border border-blue-400/30 translate-x-2 translate-y-2" />

    {/* Photo principale */}
    <div className="relative w-72 h-96 sm:w-80 sm:h-[26rem] rounded-3xl overflow-hidden border border-white/20 dark:border-white/10 shadow-2xl">
      <Image
        src="/images/jim-v2.jpg"
        alt="Jimmy Nguyen"
        fill
        className="object-cover"
        style={{ objectPosition: "50% 15%" }}
        priority
        sizes="(max-width: 640px) 288px, 320px"
      />
      {/* Léger dégradé en bas pour fondre avec le fond */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/10 dark:from-black/20 to-transparent" />
    </div>
  </div>
);

export default HeroPortrait;

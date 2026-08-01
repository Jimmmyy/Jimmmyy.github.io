/**
 * Kicker mono + titre display — en-tête commun des sections V4.
 */

type SectionHeadingProps = {
  kicker: string;
  title: string;
  className?: string;
};

const SectionHeading = ({ kicker, title, className = "mb-9" }: SectionHeadingProps) => (
  <div className={className}>
    <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent mb-3">
      {kicker}
    </p>
    <h2 className="font-display text-[28px] md:text-[34px] font-bold tracking-[-0.02em]">
      {title}
    </h2>
  </div>
);

export default SectionHeading;

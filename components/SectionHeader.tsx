type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  lang?: "en" | "fa";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  lang = "en"
}: SectionHeaderProps) {
  const centered = align === "center";
  const eyebrowClass =
    lang === "fa"
      ? "mb-3 text-sm font-semibold text-accent"
      : "mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent";

  return (
    <div className={centered ? "mx-auto mb-8 max-w-3xl text-center md:mb-12" : "mb-8 max-w-3xl md:mb-12"}>
      {eyebrow ? (
        <p className={eyebrowClass}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-normal text-ink dark:text-white sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-7 text-muted dark:text-slate-400 md:mt-4 md:text-lg md:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto mb-12 max-w-3xl text-center" : "mb-12 max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-normal text-ink sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-8 text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}

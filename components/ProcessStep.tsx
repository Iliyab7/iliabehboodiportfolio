type ProcessStepProps = {
  index: number;
  title: string;
  description?: string;
};

export function ProcessStep({ index, title, description }: ProcessStepProps) {
  return (
    <div className="card-premium card-premium-hover relative h-full rounded-lg p-4 md:p-5">
      <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-md bg-blue-50 text-xs font-semibold text-accent md:mb-4 md:h-10 md:w-10 md:text-sm">
        {String(index + 1).padStart(2, "0")}
      </div>
      <h3 className="mt-3 text-base font-semibold text-ink dark:text-white md:mt-4 md:text-xl">{title}</h3>
      {description ? (
        <p className="mt-2 mobile-clamp-2 text-xs leading-6 muted-copy md:mt-3 md:text-sm md:leading-7">{description}</p>
      ) : null}
    </div>
  );
}

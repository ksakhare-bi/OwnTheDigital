type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base text-body">{description}</p>
      ) : null}
    </div>
  );
}

type PagePlaceholderProps = {
  title: string;
  description?: string;
  figmaNodeId?: string;
};

/** Temporary shell until the page is built from Figma. */
export function PagePlaceholder({
  title,
  description,
  figmaNodeId,
}: PagePlaceholderProps) {
  return (
    <section className="mx-auto max-w-[1392px] px-4 py-20 sm:px-6">
      <p className="text-xs font-medium tracking-wide text-primary uppercase">
        Own the Digital
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 max-w-2xl text-base text-body">{description}</p>
      ) : null}
      {figmaNodeId ? (
        <p className="mt-6 text-sm text-muted">
          Figma node:{" "}
          <code className="rounded bg-surface-neutral px-1.5 py-0.5 text-navy">
            {figmaNodeId}
          </code>
        </p>
      ) : null}
    </section>
  );
}

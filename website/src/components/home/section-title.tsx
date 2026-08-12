import { cn } from "@/lib/utils";

type SectionTitleProps = {
  lead?: string;
  accent: string;
  className?: string;
};

export function SectionTitle({ lead, accent, className }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "text-center text-[28px] leading-none font-bold tracking-[0.03em] text-navy uppercase sm:text-5xl lg:text-[60px] xl:text-[78px]",
        className,
      )}
    >
      {lead ? <span>{lead} </span> : null}
      <span className="text-primary">{accent}</span>
    </h2>
  );
}

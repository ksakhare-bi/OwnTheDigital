import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type BlogPostDetailView = {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  publishedAt: string;
  tags: string[];
  content?: string;
  intro?: string;
  sections?: { heading: string; description: string; bullets?: string[] }[];
};

function ArticleSection({
  heading,
  description,
  bullets,
}: {
  heading: string;
  description: string;
  bullets?: string[];
}) {
  return (
    <section className="space-y-3 sm:space-y-4">
      <h2 className="text-xl leading-snug font-bold tracking-tight text-primary uppercase sm:text-2xl xl:text-[32px]">
        {heading}
      </h2>
      <p className="text-sm leading-[1.6] text-body sm:text-base xl:text-lg">{description}</p>
      {bullets && bullets.length > 0 ? (
        <ul className="space-y-2 pl-1">
          {bullets.map((item) => (
            <li
              key={item}
              className="flex gap-2.5 text-sm leading-[1.6] text-body sm:text-base xl:text-lg"
            >
              <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

function PostCtaCard({ post }: { post: BlogPostDetailView }) {
  return (
    <section className="mt-12 rounded-[20px] border border-border bg-background p-5 text-center sm:text-left sm:mt-16 sm:p-8 xl:p-10">
      <div className="grid items-center lg:grid-cols-[1.2fr_0.9fr] xl:gap-12">
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-2xl leading-[1.2] font-bold tracking-tight text-primary uppercase sm:text-4xl xl:text-[40px]">
            {post.title}
          </h2>

          <div className="mt-4 flex flex-wrap justify-center gap-2 sm:mt-5 sm:justify-start sm:gap-3">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                className="h-auto rounded-full border-0 bg-surface-tint px-3 py-1.5 text-xs font-normal text-navy hover:bg-surface-tint sm:px-4 sm:py-2 sm:text-sm xl:text-base"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <p className="mt-4 max-w-[620px] text-xs leading-[1.6] text-body sm:mt-5 sm:text-base xl:text-lg">
            {post.excerpt}
          </p>

          <Link
            href={`/blog/${post.slug}`}
            className={cn(
              buttonVariants(),
              "mt-6 inline-flex h-10 rounded-full px-6 font-mono text-xs font-semibold sm:h-14 sm:px-8 sm:text-lg",
            )}
          >
            Read Blog
          </Link>
        </div>

        <div className="hidden md:block">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[20px]">
            <Image
              src={post.image}
              alt={`${post.title} thumbnail`}
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-contain"
            />
          </div>
          <p className="mt-4 text-sm tracking-[0.02em] text-muted uppercase xl:text-base">
            Published Date:{" "}
            <span className="font-bold text-primary">{post.publishedAt}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export function BlogPostContent({
  post,
  suggestedPost,
}: {
  post: BlogPostDetailView;
  suggestedPost: BlogPostDetailView;
}) {
  return (
    <main className="mx-auto w-full max-w-[980px] px-4 pt-10 pb-2 sm:px-6 sm:pt-14 sm:pb-14">
      <article className="space-y-6 sm:space-y-8">
        <h1 className="text-center text-3xl leading-[1.15] font-bold tracking-tight text-primary uppercase sm:text-4xl md:text-5xl lg:text-[50px]">
          {post.title}
        </h1>

        <div className="overflow-hidden rounded-[20px] border border-border bg-slate-50">
          <Image
            src={post.image}
            alt={`${post.title} cover`}
            width={980}
            height={420}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
          {post.tags.map((tag) => (
            <Badge
              key={tag}
              className="h-auto rounded-full border-0 bg-surface-tint px-3 py-1.5 text-xs font-medium uppercase text-navy hover:bg-surface-tint sm:px-4 sm:py-2 sm:text-sm"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {post.content ? (
          <div className="text-sm leading-[1.7] text-body sm:text-base xl:text-lg whitespace-pre-wrap space-y-5">
            {post.content.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        ) : (
          <>
            <p className="text-sm leading-[1.7] text-body sm:text-base xl:text-lg">
              {post.intro}
            </p>

            <div className="space-y-8 sm:space-y-10 pt-4">
              {post.sections?.map((section) => (
                <ArticleSection
                  key={section.heading}
                  heading={section.heading}
                  description={section.description}
                  bullets={section.bullets}
                />
              ))}
            </div>
          </>
        )}
      </article>

      <PostCtaCard post={suggestedPost} />
    </main>
  );
}

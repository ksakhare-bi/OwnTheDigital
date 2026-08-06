import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import type { BlogPostDetail } from "@/content/blog";
import { cn } from "@/lib/utils";

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
    <section className="space-y-4">
      <h2 className="text-2xl leading-none font-bold tracking-tight text-primary uppercase sm:text-3xl xl:text-[32px]">
        {heading}
      </h2>
      <p className="text-base leading-[1.6] text-body xl:text-lg">{description}</p>
      {bullets && bullets.length > 0 ? (
        <ul className="space-y-2.5 pl-1">
          {bullets.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-base leading-[1.6] text-body xl:text-lg"
            >
              <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

function PostCtaCard({ post }: { post: BlogPostDetail }) {
  return (
    <section className="mt-16 rounded-[20px] border border-border bg-background p-6 sm:p-8 xl:p-10">
      <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.9fr] xl:gap-12">
        <div>
          <h2 className="text-3xl leading-[1.15] font-bold tracking-tight text-primary uppercase sm:text-4xl xl:text-[40px]">
            {post.title}
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            {post.ctaTags.map((tag) => (
              <Badge
                key={tag}
                className="h-auto rounded-full border-0 bg-surface-tint px-4 py-2 text-sm font-normal text-navy hover:bg-surface-tint xl:text-base"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <p className="mt-5 max-w-[620px] text-base leading-[1.6] text-body xl:text-lg">
            {post.excerpt}
          </p>

          <Link
            href="/contact"
            className={cn(
              buttonVariants(),
              "mt-8 inline-flex h-12 rounded-full px-7 font-mono text-base font-semibold sm:h-14 sm:px-8 sm:text-lg",
            )}
          >
            Get a free Audit
          </Link>
        </div>

        <div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[20px]">
            <Image
              src={post.image}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover"
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

export function BlogPostContent({ post }: { post: BlogPostDetail }) {
  return (
    <main className="mx-auto w-full max-w-[980px] px-4 pt-14 pb-24 sm:px-6 xl:px-0">
      <article>
        <h1 className="text-center text-4xl leading-[1.1] font-bold tracking-tight text-primary uppercase sm:text-5xl lg:text-[64px]">
          {post.title}
        </h1>

        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[20px] sm:mt-12">
          <Image
            src={post.image}
            alt={`${post.title} cover`}
            fill
            priority
            sizes="(max-width: 980px) 100vw, 980px"
            className="object-cover"
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {post.tags.map((tag) => (
            <Badge
              key={tag}
              className="h-auto rounded-full border-0 bg-surface-tint px-4 py-2 text-sm font-medium uppercase text-navy hover:bg-surface-tint"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <p className="mt-8 text-base leading-[1.7] text-body xl:text-lg">
          {post.intro}
        </p>

        <div className="mt-12 space-y-10">
          {post.sections.map((section) => (
            <ArticleSection
              key={section.heading}
              heading={section.heading}
              description={section.description}
              bullets={section.bullets}
            />
          ))}
        </div>
      </article>

      <PostCtaCard post={post} />
    </main>
  );
}

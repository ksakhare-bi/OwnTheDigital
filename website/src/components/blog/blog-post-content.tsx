import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { BlogAuthor, FeaturedImage, RelatedBlogItem } from "@/types/blog";

export type BlogPostDetailView = {
  slug: string;
  title: string;
  image: string;
  featuredImage?: FeaturedImage;
  excerpt: string;
  publishedAt: string;
  tags: string[];
  category?: string;
  readTime?: string;
  author?: string | BlogAuthor;
  content?: string;
  intro?: string;
  sections?: { heading: string; description: string; bullets?: string[] }[];
  relatedBlogs?: RelatedBlogItem[];
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
      <p className="text-sm leading-[1.7] text-body sm:text-base xl:text-lg">{description}</p>
      {bullets && bullets.length > 0 ? (
        <ul className="space-y-2 pl-1">
          {bullets.map((item) => (
            <li
              key={item}
              className="flex gap-2.5 text-sm leading-[1.7] text-body sm:text-base xl:text-lg"
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

function RelatedBlogsSection({ blogs }: { blogs: RelatedBlogItem[] }) {
  if (!blogs || blogs.length < 3) return null;

  return (
    <section className="mt-14 border-t border-border pt-10 sm:mt-16 sm:pt-14">
      <div className="mb-6 flex items-center justify-between sm:mb-8">
        <div>
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-primary">
            Curated Insights
          </span>
          <h3 className="mt-1 text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            Related Articles
          </h3>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((item) => (
          <Link
            key={item.slug}
            href={`/blog/${item.slug}`}
            className="group flex flex-col justify-between rounded-[16px] border border-border bg-background p-5 transition-all hover:border-primary/50 hover:shadow-md"
          >
            <div>
              {item.image && (
                <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-lg bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              {item.category && (
                <span className="text-[11px] font-mono font-semibold uppercase text-primary tracking-wider">
                  {item.category}
                </span>
              )}
              <h4 className="mt-1.5 text-base font-bold text-primary group-hover:text-primary/80 line-clamp-2">
                {item.title}
              </h4>
              {item.excerpt && (
                <p className="mt-2 text-xs leading-relaxed text-body line-clamp-3">
                  {item.excerpt}
                </p>
              )}
            </div>

            <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary pt-3 border-t border-border/50">
              <span>Read Article</span>
              <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function PostCtaCard({ post }: { post: BlogPostDetailView }) {
  return (
    <section className="mt-14 rounded-[20px] border border-border bg-background p-5 text-center sm:text-left sm:mt-16 sm:p-8 xl:p-10">
      <div className="grid items-center lg:grid-cols-[1.2fr_0.9fr] xl:gap-12">
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-2xl leading-[1.2] font-bold tracking-tight text-primary uppercase sm:text-4xl xl:text-[40px]">
            {post.title}
          </h2>

          <div className="mt-4 flex flex-wrap justify-center gap-1.5 sm:mt-5 sm:justify-start sm:gap-2">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                className="h-auto rounded-full border-0 bg-surface-tint px-2.5 py-1 text-[11px] font-normal text-navy hover:bg-surface-tint sm:px-3 sm:py-1 sm:text-xs"
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
  const imageAlt =
    post.featuredImage?.altText ||
    `${post.title} cover`;

  const imageTitle =
    post.featuredImage?.title || post.title;

  const imageCaption = post.featuredImage?.caption;

  return (
    <main className="mx-auto w-full max-w-[980px] px-4 pt-10 pb-6 sm:px-6 sm:pt-14 sm:pb-16">
      <article className="space-y-6 sm:space-y-8">
        {/* Blog Main Title (H1) at the top */}
        <h1 className="text-center text-3xl leading-[1.15] font-bold tracking-tight text-primary uppercase sm:text-4xl md:text-5xl lg:text-[48px] sm:text-left">
          {post.title}
        </h1>

        {/* Category & Meta pills */}
        {(post.category || post.readTime || post.publishedAt) && (
          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            {post.category && (
              <Badge className="rounded-full bg-primary text-white px-3.5 py-1 text-xs font-mono font-medium uppercase tracking-wider">
                {post.category}
              </Badge>
            )}

            {post.readTime && (
              <span className="inline-flex items-center gap-1.5 text-xs text-muted font-medium">
                <Clock className="size-3.5" />
                <span>{post.readTime}</span>
              </span>
            )}

            {post.publishedAt && (
              <span className="inline-flex items-center gap-1.5 text-xs text-muted font-medium">
                <Calendar className="size-3.5" />
                <span>{post.publishedAt}</span>
              </span>
            )}
          </div>
        )}

        {/* Featured Image with SEO Alt, Title, and Caption */}
        <figure className="space-y-2">
          <div className="overflow-hidden rounded-[20px] border border-border bg-slate-50">
            <Image
              src={post.image}
              alt={imageAlt}
              title={imageTitle}
              width={980}
              height={500}
              priority
              className="w-full h-auto object-cover"
            />
          </div>
          {imageCaption && (
            <figcaption className="text-center text-xs text-muted italic px-4">
              {imageCaption}
            </figcaption>
          )}
        </figure>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start">
          {post.tags.map((tag) => (
            <Badge
              key={tag}
              className="h-auto rounded-full border-0 bg-surface-tint px-2.5 py-1 text-[11px] font-medium uppercase text-navy hover:bg-surface-tint/80 transition-colors"
            >
              #{tag}
            </Badge>
          ))}
        </div>

        {/* Lead Excerpt / Intro Summary */}
        {(post.intro || post.excerpt) && (
          <p className="text-sm leading-[1.7] text-body sm:text-base xl:text-lg">
            {post.intro || post.excerpt}
          </p>
        )}

        {/* Main Content Body */}
        {post.content ? (
          <div
            className="text-body text-base leading-[1.8] sm:text-lg sm:leading-[1.85] space-y-5
              [&_h1]:text-2xl sm:[&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-primary [&_h1]:mt-8 [&_h1]:mb-3
              [&_h2]:text-xl sm:[&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-primary [&_h2]:mt-8 [&_h2]:mb-3
              [&_h3]:text-lg sm:[&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-primary [&_h3]:mt-6 [&_h3]:mb-2
              [&_p]:mb-4 [&_p]:leading-[1.8]
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-2
              [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol]:space-y-2
              [&_li]:text-body
              [&_blockquote]:border-l-4 [&_blockquote]:border-primary/50 [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-body [&_blockquote]:my-6 [&_blockquote]:py-1 sm:[&_blockquote]:text-lg
              [&_pre]:bg-slate-900 [&_pre]:text-slate-100 [&_pre]:p-4 sm:[&_pre]:p-6 [&_pre]:rounded-xl [&_pre]:overflow-x-auto [&_pre]:my-6
              [&_code]:font-mono [&_code]:text-sm
              [&_table]:w-full [&_table]:border-collapse [&_table]:my-6 [&_table]:border [&_table]:border-border [&_table]:text-sm sm:[&_table]:text-base
              [&_th]:border [&_th]:border-border [&_th]:p-3 [&_th]:bg-surface-tint [&_th]:font-bold [&_th]:text-primary [&_th]:text-left
              [&_td]:border [&_td]:border-border [&_td]:p-3
              [&_a]:text-primary [&_a]:underline [&_a]:font-semibold hover:[&_a]:opacity-80
              [&_img]:rounded-xl [&_img]:border [&_img]:border-border [&_img]:my-6 [&_img]:w-full [&_img]:h-auto
              [&_iframe]:w-full [&_iframe]:aspect-video [&_iframe]:rounded-xl [&_iframe]:my-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        ) : null}

        {/* Structured Sections (if any) */}
        {post.sections && post.sections.length > 0 && (
          <div className="space-y-8 sm:space-y-10 pt-4">
            {post.sections.map((section) => (
              <ArticleSection
                key={section.heading}
                heading={section.heading}
                description={section.description}
                bullets={section.bullets}
              />
            ))}
          </div>
        )}
      </article>

      {/* Internal Linking & Related Blogs */}
      {post.relatedBlogs && post.relatedBlogs.length >= 3 && (
        <RelatedBlogsSection blogs={post.relatedBlogs} />
      )}

      {/* Suggested next article CTA */}
      <PostCtaCard post={suggestedPost} />
    </main>
  );
}


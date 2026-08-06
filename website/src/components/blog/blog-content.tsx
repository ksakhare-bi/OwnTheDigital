import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  blogPagination,
  blogPosts,
  type BlogPostCard,
} from "@/content/blog";
import { cn } from "@/lib/utils";

function MetaBadge({ label, value }: { label: string; value: string }) {
  return (
    <Badge className="h-auto rounded-full border-0 bg-surface-tint px-4 py-2 text-sm leading-[1.5] font-normal text-navy hover:bg-surface-tint xl:text-base">
      {label}
      <span className="mx-2 size-1 shrink-0 rounded-full bg-primary" />
      <span className="font-medium">{value}</span>
    </Badge>
  );
}

function BlogPostRow({ post }: { post: BlogPostCard }) {
  return (
    <article className="grid gap-8 border-b border-border py-14 last:border-b-0 last:pb-0 first:pt-0 lg:grid-cols-[1.35fr_1fr] lg:gap-10 xl:gap-14">
      <div className="flex min-h-0 flex-col">
        <h2 className="text-3xl leading-[1.2] font-bold tracking-tight text-primary uppercase sm:text-4xl xl:text-[40px]">
          {post.title}
        </h2>

        <div className="mt-5 flex flex-wrap gap-3">
          <MetaBadge label="Category" value={post.category} />
          <MetaBadge label="Read Time" value={post.readTime} />
        </div>

        <p className="mt-6 max-w-[720px] text-balance text-base leading-[1.6] text-body xl:text-lg">
          {post.excerpt}
        </p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-8">
          <Link
            href={`/blog/${post.slug}`}
            className={cn(
              buttonVariants(),
              "h-12 rounded-full px-7 font-mono text-base font-semibold sm:h-14 sm:px-8 sm:text-lg",
            )}
          >
            Read Blog
          </Link>
          <p className="text-sm tracking-[0.02em] uppercase xl:text-base">
            Published Date: <span className="font-bold">{post.publishedAt}</span>
          </p>
        </div>
      </div>

      <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] lg:aspect-auto lg:min-h-[280px] xl:min-h-[320px]">
        <Image
          src={post.image}
          alt={`${post.title} featured image`}
          fill
          sizes="(max-width: 1024px) 100vw, 560px"
          className="object-cover"
        />
      </div>
    </article>
  );
}

function BlogPagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav
      aria-label="Blog pagination"
      className="flex items-center justify-center gap-3 pt-12 sm:gap-4"
    >
      <Link
        href={currentPage > 1 ? `/blog?page=${currentPage - 1}` : "#"}
        aria-label="Previous page"
        aria-disabled={currentPage <= 1}
        className={cn(
          "flex size-10 items-center justify-center text-navy transition hover:text-primary",
          currentPage <= 1 && "pointer-events-none opacity-40",
        )}
      >
        <ChevronLeft className="size-5" />
      </Link>

      {pages.map((page) => (
        <Link
          key={page}
          href={`/blog?page=${page}`}
          aria-current={page === currentPage ? "page" : undefined}
          className={cn(
            "flex size-10 items-center justify-center text-lg font-medium text-navy transition",
            page === currentPage
              ? "rounded-[6px] border border-primary text-primary"
              : "hover:text-primary",
          )}
        >
          {page}
        </Link>
      ))}

      <Link
        href={
          currentPage < totalPages ? `/blog?page=${currentPage + 1}` : "#"
        }
        aria-label="Next page"
        aria-disabled={currentPage >= totalPages}
        className={cn(
          "flex size-10 items-center justify-center text-navy transition hover:text-primary",
          currentPage >= totalPages && "pointer-events-none opacity-40",
        )}
      >
        <ChevronRight className="size-5" />
      </Link>
    </nav>
  );
}

export function BlogContent() {
  return (
    <main className="mx-auto w-full max-w-[1392px] px-4 pt-14 pb-24 sm:px-6 xl:px-0">
      <section className="rounded-[20px] border border-border bg-background p-6 sm:p-8 xl:p-12">
        <div className="flex flex-col">
          {blogPosts.map((post) => (
            <BlogPostRow key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <BlogPagination
        currentPage={blogPagination.currentPage}
        totalPages={blogPagination.totalPages}
      />
    </main>
  );
}

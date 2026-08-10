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
    <Badge className="h-auto rounded-full border-0 bg-surface-tint px-3 py-1.5 text-xs leading-[1.5] font-normal text-navy hover:bg-surface-tint sm:px-4 sm:py-2 sm:text-sm xl:text-base">
      {label}
      <span className="mx-1.5 size-1 shrink-0 rounded-full bg-primary sm:mx-2" />
      <span className="font-semibold">{value}</span>
    </Badge>
  );
}

function BlogPostRow({ post }: { post: BlogPostCard }) {
  return (
    <article className="grid gap-8 border-b border-border py-8 last:border-b-0 last:pb-0 first:pt-0 sm:py-14 lg:grid-cols-[1.35fr_1fr] lg:gap-10 xl:gap-14">
      <div className="flex min-h-0 flex-col items-center text-center sm:items-start sm:text-left">
        <h2 className="text-xl leading-[1.2] font-bold tracking-tight text-primary uppercase sm:text-4xl xl:text-[40px]">
          {post.title}
        </h2>

        <div className="mt-4 flex flex-wrap justify-center gap-2 sm:mt-5 sm:justify-start sm:gap-3">
          <MetaBadge label="Category" value={post.category} />
          <MetaBadge label="Read Time" value={post.readTime} />
        </div>

        <p className="mt-4 max-w-[720px] text-xs leading-[1.6] text-body sm:mt-6 sm:text-base xl:text-lg">
          {post.excerpt}
        </p>

        <div className="mt-6 flex flex-col items-center gap-3 w-full sm:mt-auto sm:flex-row sm:justify-between sm:gap-4 sm:pt-8">
          <Link
            href={`/blog/${post.slug}`}
            className={cn(
              buttonVariants(),
              "h-10 rounded-full px-6 font-mono text-xs font-semibold sm:h-14 sm:px-8 sm:text-lg",
            )}
          >
            Read Blog
          </Link>
          <p className="text-[11px] tracking-[0.02em] uppercase text-body sm:text-sm xl:text-base">
            Published Date: <span className="font-bold">{post.publishedAt}</span>
          </p>
        </div>
      </div>

      <div className="hidden relative aspect-[16/10] overflow-hidden rounded-[20px] sm:block lg:aspect-auto lg:min-h-[280px] xl:min-h-[320px]">
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
      className="flex items-center justify-center gap-2 pt-10 sm:gap-4 sm:pt-12"
    >
      <Link
        href={currentPage > 1 ? `/blog?page=${currentPage - 1}` : "#"}
        aria-label="Previous page"
        aria-disabled={currentPage <= 1}
        className={cn(
          "flex size-9 sm:size-10 items-center justify-center text-navy transition hover:text-primary",
          currentPage <= 1 && "pointer-events-none opacity-40",
        )}
      >
        <ChevronLeft className="size-4 sm:size-5" />
      </Link>

      {pages.map((page) => (
        <Link
          key={page}
          href={`/blog?page=${page}`}
          aria-current={page === currentPage ? "page" : undefined}
          className={cn(
            "flex size-9 sm:size-10 items-center justify-center text-sm sm:text-lg font-medium text-navy transition",
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
          "flex size-9 sm:size-10 items-center justify-center text-navy transition hover:text-primary",
          currentPage >= totalPages && "pointer-events-none opacity-40",
        )}
      >
        <ChevronRight className="size-4 sm:size-5" />
      </Link>
    </nav>
  );
}

export function BlogContent() {
  return (
    <main className="mx-auto w-full max-w-[1392px] px-4 pt-10 pb-6 sm:px-6 sm:pt-14 sm:pb-14">
      <section className="rounded-[20px] border border-border bg-background p-4 sm:p-8 xl:p-12">
        <div className="flex flex-col gap-6 sm:gap-0">
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

/**
 * Blog content normalizer and converter for website detail page.
 * Ensures HTML, Markdown, or plain text strings always render properly.
 */

export function normalizeBlogContent(content?: string): string {
  if (!content || !content.trim()) return "";

  const trimmed = content.trim();

  // If already contains HTML block tags, return as-is
  const hasHtml = /<\/?(p|h[1-6]|ul|ol|li|div|section|article|table|blockquote|pre|img|iframe)[^>]*>/i.test(trimmed);
  if (hasHtml) {
    return trimmed;
  }

  // If contains Markdown formatting, convert to HTML
  return markdownToHtml(trimmed);
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function markdownToHtml(markdown: string): string {
  if (!markdown) return "";

  let html = markdown;

  // Code blocks: ```lang\ncode\n```
  html = html.replace(/```([\s\S]*?)```/g, (_match, p1) => {
    return `<pre><code>${escapeHtml(p1.trim())}</code></pre>`;
  });

  // Blockquotes: > quote
  html = html.replace(/^\> (.*$)/gim, "<blockquote>$1</blockquote>");

  // Headings
  html = html.replace(/^### (.*$)/gim, "<h3>$1</h3>");
  html = html.replace(/^## (.*$)/gim, "<h2>$1</h2>");
  html = html.replace(/^# (.*$)/gim, "<h1>$1</h1>");

  // Horizontal Rule
  html = html.replace(/^---$/gim, "<hr />");

  // Bold & Italic
  html = html.replace(/\*\*\*(.*?)\*\*\*/g, "<strong><em>$1</em></strong>");
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");
  html = html.replace(/___(.*?)___/g, "<strong><em>$1</em></strong>");
  html = html.replace(/__(.*?)__/g, "<strong>$1</strong>");
  html = html.replace(/_(.*?)_/g, "<em>$1</em>");

  // Inline code
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");

  // Images: ![alt](url)
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="my-6 rounded-xl border border-border w-full h-auto" />');

  // Links: [text](url)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary underline font-medium">$1</a>');

  // Lists: Bullet list lines
  html = html.replace(/^\s*[-*]\s+(.*)$/gim, "<li>$1</li>");
  html = html.replace(/(<li>[\s\S]*?<\/li>)/gim, "<ul>$1</ul>");
  html = html.replace(/<\/ul>\s*<ul>/g, "");

  // Lists: Numbered list lines
  html = html.replace(/^\s*\d+\.\s+(.*)$/gim, "<oli>$1</oli>");
  html = html.replace(/(<oli>[\s\S]*?<\/oli>)/gim, "<ol>$1</ol>");
  html = html.replace(/<oli>/g, "<li>").replace(/<\/oli>/g, "</li>");
  html = html.replace(/<\/ol>\s*<ol>/g, "");

  // Paragraphs
  const paragraphs = html
    .split(/\n{2,}/)
    .map((block) => {
      const bTrim = block.trim();
      if (!bTrim) return "";
      if (
        bTrim.startsWith("<h1") ||
        bTrim.startsWith("<h2") ||
        bTrim.startsWith("<h3") ||
        bTrim.startsWith("<ul") ||
        bTrim.startsWith("<ol") ||
        bTrim.startsWith("<blockquote") ||
        bTrim.startsWith("<pre") ||
        bTrim.startsWith("<hr") ||
        bTrim.startsWith("<table")
      ) {
        return bTrim;
      }
      return `<p>${bTrim.replace(/\n/g, "<br />")}</p>`;
    })
    .filter(Boolean);

  return paragraphs.join("\n\n");
}

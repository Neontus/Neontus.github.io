import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getAllWritingPosts, getWritingPost } from "@/lib/writing";

interface PageProps {
  params: { slug: string };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllWritingPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getWritingPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — Juno Kim`,
    description: post.summary,
  };
}

export default async function WritingPostPage({ params }: PageProps) {
  const post = await getWritingPost(params.slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="grain-overlay" />
      <div className="mx-auto max-w-3xl px-6 py-10 sm:px-10 sm:py-14">
        <nav className="mb-16" aria-label="Page navigation">
          <Link
            href="/inference"
            className="group inline-flex items-center gap-2 font-mono text-[10px] text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
          >
            <ArrowLeft size={12} className="transition-transform group-hover:-translate-x-0.5" />
            inference notes
          </Link>
        </nav>

        <article>
          <header className="mb-12 border-b border-border pb-10">
            <div className="mb-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10px] text-muted-foreground">
              <span className="text-ink">{post.stage}</span>
              <time dateTime={post.date}>{post.date}</time>
              {post.updated !== post.date && <span>updated {post.updated}</span>}
            </div>
            <h1 className="font-serif text-4xl leading-[1.02] tracking-tight sm:text-6xl">{post.title}</h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">{post.summary}</p>
            {post.codeUrl && (
              <a
                href={post.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] text-muted-foreground transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
              >
                matching code
                <ExternalLink size={11} />
              </a>
            )}
          </header>

          <div className="inference-prose" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </article>

        <footer className="mt-16 border-t border-border pt-8">
          <Link
            href="/inference"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
          >
            <ArrowLeft size={13} className="transition-transform group-hover:-translate-x-0.5" />
            All inference field notes
          </Link>
        </footer>
      </div>
    </main>
  );
}


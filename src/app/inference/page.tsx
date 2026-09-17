import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { inferenceRoadmap } from "@/data/inference-roadmap";
import { getAllWritingPosts } from "@/lib/writing";

export const metadata: Metadata = {
  title: "LLM inference systems — Juno Kim",
  description:
    "A running lab notebook about learning GPU programming, inference engines, and distributed ML from first principles.",
};

export default function InferencePage() {
  const posts = getAllWritingPosts();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="grain-overlay" />
      <div className="mx-auto max-w-6xl px-6 py-10 sm:px-10 sm:py-14">
        <nav className="mb-16 flex items-center justify-between" aria-label="Page navigation">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-mono text-[10px] text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
          >
            <ArrowLeft size={12} className="transition-transform group-hover:-translate-x-0.5" />
            juno kim
          </Link>
          <span className="font-mono text-[10px] text-muted-foreground">field notes / 2026</span>
        </nav>

        <header className="mb-16 max-w-4xl">
          <p className="mb-4 font-mono text-xs text-ink">measure → explain → rebuild</p>
          <h1 className="max-w-3xl font-serif text-5xl leading-[0.95] tracking-tight sm:text-7xl">
            LLM inference from first principles
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A running lab notebook about building, measuring, and understanding the systems behind fast language-model inference.
          </p>
        </header>

        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-24">
          <section aria-labelledby="notes-heading">
            <div className="mb-6 flex items-baseline justify-between border-b border-border pb-3">
              <h2 id="notes-heading" className="font-serif text-2xl">Field notes</h2>
              <span className="font-mono text-[10px] text-muted-foreground">
                {posts.length} {posts.length === 1 ? "entry" : "entries"}
              </span>
            </div>

            <div>
              {posts.map((post) => (
                <article key={post.slug} className="group border-b border-border py-7 first:pt-2">
                  <Link
                    href={`/writing/${post.slug}`}
                    className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
                  >
                    <div className="mb-3 flex items-center justify-between gap-6 font-mono text-[10px] text-muted-foreground">
                      <span>{post.stage}</span>
                      <time dateTime={post.date}>{post.date}</time>
                    </div>
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <h3 className="font-serif text-2xl leading-tight transition-colors group-hover:text-ink sm:text-3xl">
                          {post.title}
                        </h3>
                        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                          {post.summary}
                        </p>
                      </div>
                      <ArrowUpRight
                        size={16}
                        className="mt-1 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                      />
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <aside aria-labelledby="roadmap-heading" className="lg:border-l lg:border-border lg:pl-8">
            <div className="lg:sticky lg:top-14">
              <h2 id="roadmap-heading" className="mb-5 font-serif text-2xl">Roadmap</h2>
              <ol className="space-y-3">
                {inferenceRoadmap.map((step) => {
                  const content = (
                    <>
                      <span className="font-mono text-[9px] text-muted-foreground">{step.number}</span>
                      <span className={step.status === "current" ? "text-foreground" : "text-muted-foreground"}>
                        {step.title}
                      </span>
                      <span
                        aria-label={step.status}
                        className={`ml-auto h-1.5 w-1.5 rounded-full ${
                          step.status === "complete"
                            ? "bg-ink"
                            : step.status === "current"
                              ? "border border-ink"
                              : "bg-border"
                        }`}
                      />
                    </>
                  );

                  return (
                    <li key={step.number} className="text-xs">
                      {step.slug ? (
                        <Link
                          href={`/writing/${step.slug}`}
                          className="flex items-center gap-3 py-0.5 transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
                        >
                          {content}
                        </Link>
                      ) : (
                        <div className="flex items-center gap-3 py-0.5">{content}</div>
                      )}
                    </li>
                  );
                })}
              </ol>
              <p className="mt-7 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
                Filled means documented. An outline marks the current problem. The sequence may change when experiments reveal a better question.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}


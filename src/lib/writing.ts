import "server-only";

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const writingDirectory = path.join(process.cwd(), "content", "writing");

export interface WritingPost {
  slug: string;
  title: string;
  summary: string;
  date: string;
  updated: string;
  stage: string;
  order: number;
  tags: string[];
  codeUrl?: string;
}

export interface WritingPostWithContent extends WritingPost {
  contentHtml: string;
}

function markdownFiles(): string[] {
  if (!fs.existsSync(writingDirectory)) return [];
  return fs.readdirSync(writingDirectory).filter((file) => file.endsWith(".md"));
}

function readPost(file: string): { post: WritingPost; body: string; draft: boolean } {
  const slug = file.replace(/\.md$/, "");
  const source = fs.readFileSync(path.join(writingDirectory, file), "utf8");
  const { data, content } = matter(source);

  const post: WritingPost = {
    slug,
    title: String(data.title ?? slug),
    summary: String(data.summary ?? ""),
    date: String(data.date ?? ""),
    updated: String(data.updated ?? data.date ?? ""),
    stage: String(data.stage ?? "Field note"),
    order: Number(data.order ?? 999),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    codeUrl: data.codeUrl ? String(data.codeUrl) : undefined,
  };

  return { post, body: content, draft: data.draft === true };
}

export function getAllWritingPosts(): WritingPost[] {
  return markdownFiles()
    .map(readPost)
    .filter(({ draft }) => !draft)
    .map(({ post }) => post)
    .sort((a, b) => a.order - b.order || b.date.localeCompare(a.date));
}

export async function getWritingPost(slug: string): Promise<WritingPostWithContent | null> {
  const file = `${slug}.md`;
  if (!markdownFiles().includes(file)) return null;

  const { post, body, draft } = readPost(file);
  if (draft) return null;

  const contentHtml = await marked.parse(body, { gfm: true });
  return { ...post, contentHtml };
}

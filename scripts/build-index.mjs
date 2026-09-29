// Builds index.json from the frontmatter of posts/*.md and research/*.md. No dependencies.
// Run: node scripts/build-index.mjs
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

function frontmatter(md) {
  const m = md.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const data = {};
  if (!m) return data;
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!kv) continue;
    const raw = kv[2].trim();
    const unquote = (s) => s.trim().replace(/^["']|["']$/g, "");
    data[kv[1]] = raw.startsWith("[") && raw.endsWith("]")
      ? raw.slice(1, -1).split(",").map(unquote).filter(Boolean)
      : unquote(raw);
  }
  return data;
}

/** Read every .md in a folder, returning { slug, file, data } for non-draft files. */
function readFolder(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith(".md") && f.toLowerCase() !== "readme.md")
    .map((file) => ({
      slug: file.replace(/\.md$/, ""),
      file: `${dir}/${file}`,
      data: frontmatter(readFileSync(join(dir, file), "utf8")),
    }))
    .filter(({ data }) => data.draft !== "true");
}

const list = (v) => (Array.isArray(v) ? v : []);
const byDateDesc = (a, b) => ((a.date ?? "") < (b.date ?? "") ? 1 : -1);

const posts = readFolder("posts")
  .map(({ slug, file, data }) => ({
    slug,
    file,
    title: data.title || slug,
    date: data.date || slug.slice(0, 10),
    tags: list(data.tags),
    summary: data.summary || "",
    ...(data.cover ? { cover: data.cover } : {}),
  }))
  .sort(byDateDesc);

const research = readFolder("research")
  .map(({ slug, file, data }) => ({
    slug,
    file,
    title: data.title || slug,
    summary: data.summary || "",
    status: data.status || "published",
    tags: list(data.tags),
    ...(data.date ? { date: data.date } : {}),
    ...(data.venue ? { venue: data.venue } : {}),
    ...(data.url ? { url: data.url } : {}),
    // Relative paths (e.g. "minicollide.pdf") are resolved against research/ by the website.
    ...(data.pdf ? { pdf: data.pdf.includes("://") ? data.pdf : `research/${data.pdf}` } : {}),
    ...(data.code ? { code: data.code } : {}),
  }))
  .sort(byDateDesc);

writeFileSync("index.json", JSON.stringify({ posts, research }, null, 2) + "\n");
console.log(`index.json: ${posts.length} post(s), ${research.length} research item(s)`);

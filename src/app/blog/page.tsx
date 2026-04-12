import Link from "next/link";
import Image from "next/image";
import { getSortedPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles about engineering, AI, and building great software.",
};

export default function BlogIndex() {
  const posts = getSortedPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Blog</h1>
      <p className="text-muted mb-10">
        Thoughts on engineering, AI, and building great software.
      </p>

      {posts.length === 0 ? (
        <p className="text-muted">No posts yet. Check back soon!</p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group border-b border-border pb-8 last:border-0"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                {post.image && (
                  <div className="rounded-lg overflow-hidden border border-border mb-4">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={768}
                      height={400}
                      className="w-full h-48 object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <h2 className="text-xl font-semibold group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <time className="text-sm text-muted shrink-0">
                    {post.date}
                  </time>
                </div>
                {post.excerpt && (
                  <p className="text-muted leading-relaxed">{post.excerpt}</p>
                )}
                <div className="flex items-center gap-3 mt-3">
                  <span className="text-xs text-muted">{post.readingTime}</span>
                  {post.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

import Link from "next/link";
import { getSortedPosts } from "@/lib/posts";

export default function Home() {
  const recentPosts = getSortedPosts().slice(0, 3);

  return (
    <div className="mx-auto max-w-3xl px-6">
      {/* Hero */}
      <section className="py-20">
        <p className="text-accent font-medium mb-3">Hi, I&apos;m</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Viktoriia
        </h1>
        <p className="text-lg text-muted max-w-xl leading-relaxed">
          Programmer &amp; Technical Writer. Building software, writing about
          engineering, AI, and practicing a healthy lifestyle before it became
          mainstream.
        </p>
        <div className="flex gap-4 mt-8">
          <Link
            href="/blog"
            className="px-5 py-2.5 bg-accent text-white rounded-lg font-medium hover:bg-accent-dark transition-colors"
          >
            Read the Blog
          </Link>
          <a
            href="https://www.linkedin.com/in/viktoriia"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-border rounded-lg font-medium hover:border-accent hover:text-accent transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* About */}
      <section className="py-12 border-t border-border">
        <h2 className="text-2xl font-semibold mb-6">About</h2>
        <div className="text-muted leading-relaxed space-y-4">
          <p>
            I&apos;m a programmer and technical writer passionate about building
            great software and sharing knowledge. I write about engineering
            practices, AI transformation, and the intersection of technology
            with everyday life.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll find me exploring longevity
            science, reading, and experimenting with healthy living.
          </p>
        </div>
      </section>

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <section className="py-12 border-t border-border">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Recent Posts</h2>
            <Link
              href="/blog"
              className="text-sm text-accent hover:text-accent-dark transition-colors"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="space-y-6">
            {recentPosts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="font-medium group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <time className="text-sm text-muted shrink-0">
                      {post.date}
                    </time>
                  </div>
                  {post.excerpt && (
                    <p className="text-muted text-sm mt-1 line-clamp-2">
                      {post.excerpt}
                    </p>
                  )}
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

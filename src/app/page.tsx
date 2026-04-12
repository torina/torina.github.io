import Link from "next/link";
import { getSortedPosts } from "@/lib/posts";

const experience = [
  {
    company: "Tamara",
    industry: "fintech, BNPL",
    location: "Riyadh, KSA / Dubai, UAE",
    role: "Engineering Manager",
    period: "Apr 2024 – Present",
    highlights: [
      "Oversaw one to three cross-functional teams with a total of 9 to 18 members, including backend, frontend, mobile, and QA engineers",
      "Product: payments (acceptance), and KYC (identity)",
    ],
    stack: "Java, Golang, Vue.js, Flutter, MySQL, Docker, k8s",
  },
  {
    company: "One Data",
    industry: "data analytics, AI",
    location: "Passau, DE",
    role: "Engineering Manager",
    period: "May 2022 – Mar 2024",
    highlights: [
      "Managed a cross-functional team of 11 people, including UI/UX Designer, PM, Devs & QA",
      "Managed company-wide topics like CVEs handling and licensing",
      "Product: IDE/data visualization tool for Data Scientists, AI-driven data products tool",
    ],
    stack: "Vue.js, Java, Postgres, Docker, k8s",
  },
  {
    company: "mybacs",
    industry: "e-commerce",
    location: "Munich, DE",
    role: "Head of Technology",
    period: "Jan 2021 – Apr 2022",
    highlights: [
      "Developed and supported Shopify webshop and its integrations with a dev team",
      "Created subscriptions-management and analytics services",
      "Setup and maintained infrastructure on GCP",
    ],
    stack: "HTML, CSS3, Javascript, jQuery, Liquid, Node.js",
  },
  {
    company: "Deep Knowledge Analytics",
    industry: "data analytics",
    location: "London, UK",
    role: "Head of Product",
    period: "Jan 2020 – Dec 2020",
    highlights: [
      "Built and managed two teams of developers, PO, UX, and QA — totalling over 20",
      "Set up development processes and environments (CI/CD, Scrum)",
      "Created solutions architecture and advised on technical solutions",
      "Launched an analytics platform and a blockchain marketplace from the ground up",
    ],
    stack: "Java 11, Spring Boot, Angular, HTML, CSS, MariaDB, Docker, Docker Swarm, Kong",
  },
  {
    company: "ndgit",
    industry: "for mobile.de, fintech",
    location: "Munich, DE",
    role: "Software Developer",
    period: "Mar 2019 – Mar 2020",
    highlights: [
      "Created API gateway for banks' loan decisions management",
      "Created and implemented solutions architecture",
      "Performed stakeholders communication and product backlog management",
    ],
    stack: "Java 11, Spring Boot, Angular, HTML, CSS, MariaDB, Docker, Docker Swarm, Kong",
  },
  {
    company: "windeln.de",
    industry: "e-commerce",
    location: "Munich, DE",
    role: "Software Engineer",
    period: "Jun 2016 – Feb 2019",
    highlights: [
      "Led implementation of the prices automation microservice; integrated a new webshop",
      "Payments processing via Optile gateway",
      "Maintained and participated in the design of DWH, implemented ETLs",
      "Created data feed microservices with configurable settings",
    ],
    stack: "Java 8, Spring Boot, Thymeleaf, Javascript, MongoDB, Python",
  },
  {
    company: "NetCracker Technology",
    industry: "telecom",
    location: "Kyiv, UA",
    role: "Junior Software Engineer",
    period: "Dec 2013 – Apr 2016",
    highlights: [
      "Implemented OSS/BSS features requests; conducted full-stack bugfix",
      "Analyzed and designed Offering Catalog and Business Order Entry components",
    ],
    stack: "Java 7, Spring, HTML, CSS, Javascript (jQuery), internal frameworks",
  },
];

const education = [
  {
    degree: "Master in Applied Mathematics",
    school: "National University of \"Kyiv-Mohyla Academy\"",
    location: "Kyiv, UA",
    period: "2014 – 2016",
  },
  {
    degree: "Exchange semester in Computer Science",
    school: "Fachhochschule Stralsund",
    location: "Stralsund, DE",
    period: "2015 – 2016",
  },
  {
    degree: "Bachelor in Economics",
    school: "National University of \"Kyiv-Mohyla Academy\"",
    location: "Kyiv, UA",
    period: "2010 – 2014",
  },
];

const languages = [
  { name: "Ukrainian", level: "Native" },
  { name: "Russian", level: "Native" },
  { name: "English", level: "C1+ (IELTS 7.5)" },
  { name: "German", level: "C1" },
];

export default function Home() {
  const recentPosts = getSortedPosts().slice(0, 3);

  return (
    <div className="mx-auto max-w-3xl px-6">
      {/* Hero */}
      <section className="py-20">
        <p className="text-accent font-medium mb-3">Hi, I&apos;m</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Viktoria Bula
        </h1>
        <p className="text-xl text-muted mb-1">Engineering Leadership</p>
        <p className="text-sm text-muted mb-6">Munich area, Germany</p>
        <p className="text-lg text-muted max-w-xl leading-relaxed">
          Engineering Manager with a track record of building and leading
          cross-functional teams across fintech, data analytics, AI, and
          e-commerce. From hands-on software engineering to managing teams of
          20+.
        </p>
        <div className="flex gap-4 mt-8">
          <a
            href="https://www.linkedin.com/in/viktoriaab"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-accent text-white rounded-lg font-medium hover:bg-accent-dark transition-colors"
          >
            LinkedIn
          </a>
          <Link
            href="/blog"
            className="px-5 py-2.5 border border-border rounded-lg font-medium hover:border-accent hover:text-accent transition-colors"
          >
            Read the Blog
          </Link>
        </div>
      </section>

      {/* Experience */}
      <section className="py-12 border-t border-border">
        <h2 className="text-2xl font-semibold mb-8">Experience</h2>
        <div className="space-y-10">
          {experience.map((job) => (
            <div key={`${job.company}-${job.role}`}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h3 className="text-lg font-semibold">
                  {job.role}
                </h3>
                <span className="text-sm text-muted shrink-0">{job.period}</span>
              </div>
              <p className="text-accent font-medium text-sm mb-3">
                {job.company}{" "}
                <span className="text-muted font-normal">
                  ({job.industry}) &middot; {job.location}
                </span>
              </p>
              <ul className="space-y-1.5 text-sm text-muted leading-relaxed">
                {job.highlights.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-accent mt-1.5 shrink-0">&#8226;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted/70 mt-2">
                {job.stack}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="py-12 border-t border-border">
        <h2 className="text-2xl font-semibold mb-8">Education</h2>
        <div className="space-y-6">
          {education.map((edu) => (
            <div key={edu.degree}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="font-medium">{edu.degree}</h3>
                <span className="text-sm text-muted shrink-0">{edu.period}</span>
              </div>
              <p className="text-sm text-muted">
                {edu.school} &middot; {edu.location}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section className="py-12 border-t border-border">
        <h2 className="text-2xl font-semibold mb-6">Languages</h2>
        <div className="flex flex-wrap gap-4">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="px-4 py-2 rounded-lg border border-border text-sm"
            >
              <span className="font-medium">{lang.name}</span>{" "}
              <span className="text-muted">{lang.level}</span>
            </div>
          ))}
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

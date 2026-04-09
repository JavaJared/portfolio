import Link from "next/link";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <main className="relative mx-auto max-w-[1100px] px-6 md:px-12 lg:px-20 pt-16 md:pt-24 pb-32">
      {/* Top nav */}
      <header className="flex items-center justify-between mb-28 md:mb-40 rise">
        <Link
          href="/"
          className="font-display text-lg tracking-tightest"
        >
          Jared<span className="text-accent">.</span>
        </Link>
        <nav className="flex gap-8 text-sm text-muted">
          <a href="#work" className="link-sweep hover:text-ink transition-colors">
            Work
          </a>
          <a href="#about" className="link-sweep hover:text-ink transition-colors">
            About
          </a>
          <a href="#contact" className="link-sweep hover:text-ink transition-colors">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mb-40 md:mb-56">
        <p
          className="text-sm text-muted mb-6 rise"
          style={{ animationDelay: "0.1s" }}
        >
          Computer Science · Boston
        </p>
        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tightest rise"
          style={{ animationDelay: "0.2s" }}
        >
          Jared builds<br />
          <span className="italic font-light">thoughtful</span> software
          <br />
          for the web.
        </h1>
        <p
          className="mt-10 max-w-xl text-lg text-muted leading-relaxed rise"
          style={{ animationDelay: "0.35s" }}
        >
          I'm a CS student focused on full-stack web apps, game design, and
          applied machine learning. I like building things that feel good to
          use and shipping them end-to-end.
        </p>
        <div
          className="mt-10 flex gap-6 text-sm rise"
          style={{ animationDelay: "0.5s" }}
        >
          <a href="#work" className="link-sweep">
            See selected work →
          </a>
          <a href="#contact" className="link-sweep text-muted">
            Get in touch
          </a>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mb-40 md:mb-56">
        <div className="flex items-baseline justify-between mb-16 pb-4 border-b border-line">
          <h2 className="font-display text-2xl tracking-tight">
            Selected Work
          </h2>
          <span className="text-xs text-muted font-mono">
            {projects.length.toString().padStart(2, "0")} / {projects.length.toString().padStart(2, "0")}
          </span>
        </div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((p, i) => (
            <article
              key={p.slug}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 group"
            >
              <div className="md:col-span-3 flex flex-col gap-1">
                <span className="font-mono text-xs text-muted">
                  0{i + 1} — {p.year}
                </span>
                <span className="text-xs text-muted mt-1">{p.role}</span>
              </div>

              <div className="md:col-span-9">
                <h3 className="font-display text-3xl md:text-5xl tracking-tightest leading-[1.05] mb-5">
                  {p.title}
                  <span className="text-accent">.</span>
                </h3>
                <p className="text-lg text-ink/80 max-w-2xl leading-relaxed mb-6">
                  {p.summary}
                </p>
                <p className="text-muted max-w-2xl leading-relaxed mb-8">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-mono text-muted border border-line px-3 py-1 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 text-sm">
                  {p.links.map((l) => (
                    <a key={l.label} href={l.href} className="link-sweep">
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mb-40 md:mb-56">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <h2 className="font-display text-2xl tracking-tight">About</h2>
          </div>
          <div className="md:col-span-9 space-y-6 text-lg leading-relaxed max-w-2xl">
            <p>
              I'm a computer science student with a focus on building things
              people actually use. My work spans full-stack web development,
              applied machine learning, and game design.
            </p>
            <p className="text-muted">
              Recent explorations: agentic AI patterns and the Model Context
              Protocol, decision-tree models for sports prediction, and
              shipping the next release of Sporcle League.
            </p>
            <p className="text-muted">
              Outside of code I'm probably watching the Celtics.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-line pt-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <h2 className="font-display text-2xl tracking-tight">
              Say hello
            </h2>
          </div>
          <div className="md:col-span-9">
            <p className="font-display text-3xl md:text-5xl tracking-tightest leading-[1.05] max-w-2xl">
              Have a project in mind,<br />
              or just want to talk shop?
            </p>
            <div className="mt-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10 text-sm">
              <a
                href="mailto:your@email.com"
                className="link-sweep font-mono"
              >
                your@email.com
              </a>
              <a href="https://github.com/" className="link-sweep text-muted">
                GitHub ↗
              </a>
              <a href="https://linkedin.com/" className="link-sweep text-muted">
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-32 flex justify-between items-center text-xs text-muted font-mono">
          <span>© {new Date().getFullYear()} Jared</span>
          <span>Built with Next.js · Deployed on Vercel</span>
        </footer>
      </section>
    </main>
  );
}

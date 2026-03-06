import Image from "next/image";

/* ─── Data ─── */

const features = [
  {
    num: "01",
    title: "Job Discovery",
    desc: "Automatically search Indeed, parse results, and surface roles matching your profile, skills, and career goals.",
    keyword: "Search",
  },
  {
    num: "02",
    title: "ATS Scoring",
    desc: "Score every job 0-100 against your CV with keyword matching. Know your real match before you apply.",
    keyword: "Score",
  },
  {
    num: "03",
    title: "AI CV Tailoring",
    desc: "Two-phase AI generation: interrogation to fill gaps, then a role-specific CV preserving your original formatting.",
    keyword: "Tailor",
    accent: true,
  },
  {
    num: "04",
    title: "Cover Letters & Outreach",
    desc: "Templated cover letters plus 4 LinkedIn/email outreach variants — all personalized, never auto-sent.",
    keyword: "Reach",
  },
  {
    num: "05",
    title: "Interview Prep",
    desc: "AI-generated STAR stories, company-specific questions, and talking points tailored to each role you apply for.",
    keyword: "Prepare",
  },
  {
    num: "06",
    title: "Pipeline Dashboard",
    desc: "Track every application from discovery to offer. Funnel charts, follow-up alerts, and weekly digest — all in one view.",
    keyword: "Track",
  },
];

const pipeline = [
  { label: "Upload CV", sub: "Parse & analyze" },
  { label: "Set Targets", sub: "Roles & preferences" },
  { label: "AI Pipeline", sub: "14 services, 24/7" },
  { label: "Land Interviews", sub: "Custom prep ready" },
];

const footerLinks = {
  Product: ["Job Discovery", "ATS Scoring", "CV Builder", "Cover Letters", "Interview Prep"],
  Company: ["About", "Blog", "Contact"],
  Resources: ["Documentation", "GitHub"],
  Legal: ["Privacy", "Terms"],
};

/* ─── Page ─── */

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">

      {/* ════════ NAV ════════ */}
      <nav className="nav-glass fixed top-0 left-0 right-0 z-50 border-b border-white/[0.04]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
          <Image src="/logo.png" alt="ApplySauce" width={200} height={60} className="h-auto w-40 sm:w-48" />
          <div className="flex items-center gap-8">
            <a href="#features" className="hidden text-sm text-white/50 transition hover:text-white md:block font-medium">
              Features
            </a>
            <a href="#how" className="hidden text-sm text-white/50 transition hover:text-white md:block font-medium">
              How it Works
            </a>
            <a
              href="https://app.applysauce.com"
              className="btn-primary rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-bg"
            >
              Get Early Access
            </a>
          </div>
        </div>
      </nav>

      {/* ════════ HERO — Poster style, centered ════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-8 sm:px-10 bg-halftone">
        {/* Radial glow — subtle, not a blob */}
        <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-brand/[0.03] blur-[100px]" />

        <div className="relative mx-auto w-full max-w-4xl text-center">
          {/* Mascot — THE hero, not a side decoration */}
          <div className="animate-fade-up mb-8 inline-block">
            <div className="animate-float relative">
              <Image
                src="/mascot.png"
                alt="ApplySauce mascot — a friendly sauce bottle with a magnifying glass and briefcase"
                width={260}
                height={260}
                priority
                className="drop-shadow-[0_30px_80px_rgba(245,184,0,0.2)]"
              />
              {/* Floating tags */}
              <div className="absolute -left-6 sm:-left-16 top-4 z-20 animate-float-gentle rounded-lg bg-bg-card border border-white/[0.06] px-3 py-2 shadow-xl" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-green-400" />
                  <span className="text-[11px] font-semibold text-white/70">ATS: 94</span>
                </div>
              </div>
              <div className="absolute -right-4 sm:-right-12 bottom-2 z-20 animate-float-gentle rounded-lg bg-brand px-3 py-2 shadow-xl" style={{ animationDelay: "2.5s" }}>
                <span className="text-[11px] font-bold text-bg">CV Ready</span>
              </div>
            </div>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up delay-100">
            <span className="block font-display text-5xl font-extrabold leading-[1.0] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
              Land your
            </span>
            <span className="block font-serif italic text-5xl leading-[1.1] sm:text-6xl lg:text-7xl xl:text-[5.5rem] text-brand mt-1">
              dream job,
            </span>
            <span className="block font-display text-5xl font-extrabold leading-[1.0] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.5rem] mt-1">
              faster.
            </span>
          </h1>

          {/* Subhead */}
          <p className="animate-fade-up delay-300 mx-auto mt-8 max-w-lg text-lg leading-relaxed text-white/45 sm:text-xl">
            ApplySauce automates your entire job search &mdash; from discovery
            and ATS scoring to tailored CVs and interview prep.
          </p>

          {/* CTA */}
          <div className="animate-fade-up delay-400 mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://app.applysauce.com"
              className="btn-primary group rounded-full bg-brand px-8 py-4 font-bold text-bg text-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started Free
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </a>
            <a
              href="#how"
              className="group rounded-full border border-white/10 px-8 py-4 font-semibold text-white/60 transition-all hover:border-brand/30 hover:text-white"
            >
              How it Works
            </a>
          </div>

          {/* Inline stats — not a box, just inline pills */}
          <div className="animate-fade-up delay-500 mt-10 flex flex-wrap items-center justify-center gap-3">
            {[
              "14 AI Services",
              "95% ATS Pass Rate",
              "3x More Interviews",
            ].map((s) => (
              <span key={s} className="rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-1.5 text-xs font-medium text-white/35">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-1000">
          <div className="h-8 w-4 rounded-full border border-white/15 flex items-start justify-center pt-1.5">
            <div className="h-1.5 w-1 rounded-full bg-white/30 animate-float-gentle" />
          </div>
        </div>
      </section>

      {/* ════════ FEATURES — Editorial zigzag with golden thread ════════ */}
      <section id="features" className="relative px-6 pt-16 pb-28 sm:px-10 lg:px-20">
        {/* The golden thread — a vertical line connecting all features */}
        <div className="golden-thread pointer-events-none absolute inset-0 hidden lg:block" />

        <div className="mx-auto max-w-6xl">
          {/* Section header — centered above the thread */}
          <div className="relative z-10 mb-16 text-center">
            <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand/60">
              What&apos;s in the Sauce
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Everything you need.{" "}
              <span className="font-serif italic font-normal text-brand">Nothing you don&apos;t.</span>
            </h2>
          </div>

          {/* Zigzag feature rows */}
          <div className="space-y-16 lg:space-y-24">
            {features.map((f, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={f.num}
                  className={`feature-row ${!isEven ? "row-reverse" : ""} relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-16 ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Number + Title side */}
                  <div className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                    <div className={`flex items-center gap-4 ${isEven ? "lg:justify-end" : "lg:justify-start"}`}>
                      <span className={`font-display text-6xl sm:text-7xl lg:text-8xl font-extrabold leading-none ${
                        f.accent ? "text-brand" : "text-white/[0.06]"
                      }`}>
                        {f.num}
                      </span>
                      <div>
                        <h3 className={`font-display text-2xl font-bold tracking-tight sm:text-3xl ${
                          f.accent ? "text-brand" : "text-white"
                        }`}>
                          {f.title}
                        </h3>
                        <span className="mt-0.5 inline-block font-serif italic text-sm text-white/25">
                          {f.keyword}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Center dot — on the thread */}
                  <div className="hidden lg:flex items-center justify-center shrink-0">
                    <div className={`h-3 w-3 rounded-full ${f.accent ? "bg-brand shadow-[0_0_15px_var(--color-brand-glow)]" : "bg-white/15"} transition-all`} />
                  </div>

                  {/* Description side */}
                  <div className={`flex-1 ${isEven ? "lg:text-left" : "lg:text-right"}`}>
                    <p className="text-base sm:text-lg leading-relaxed text-white/40 max-w-md mx-auto lg:mx-0">
                      {f.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════ HOW IT WORKS — Horizontal pipeline ════════ */}
      <section id="how" className="relative px-6 py-28 sm:px-10 lg:px-20 bg-halftone">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-20 text-center">
            <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand/60">
              How It Works
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Four steps. One pipeline.
            </h2>
          </div>

          {/* Pipeline visualization */}
          <div className="relative">
            {/* Horizontal connector line */}
            <div className="pipeline-line hidden lg:block" />

            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {pipeline.map((step, i) => (
                <div key={step.label} className="pipeline-node pt-10 text-center">
                  {/* Label */}
                  <div className="mt-6 font-display text-xs font-bold uppercase tracking-[0.15em] text-brand/50">
                    Step {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-white">
                    {step.label}
                  </h3>
                  <p className="mt-1 text-sm text-white/30">
                    {step.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ CTA — with mascot callback ════════ */}
      <section id="waitlist" className="relative px-6 py-32 sm:px-10 lg:px-20">
        <div className="relative mx-auto max-w-4xl">
          {/* CTA card with border */}
          <div className="rounded-[2rem] border border-white/[0.06] bg-bg-card p-12 sm:p-16 text-center relative overflow-hidden">
            {/* Halftone inside card */}
            <div className="absolute inset-0 bg-halftone opacity-50" />

            <div className="relative z-10">
              <div className="inline-block mb-8 animate-float-gentle">
                <Image
                  src="/mascot.png"
                  alt="ApplySauce mascot"
                  width={80}
                  height={80}
                  className="drop-shadow-[0_10px_30px_rgba(245,184,0,0.12)]"
                />
              </div>

              <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Ready to supercharge
                <br />
                your job search?
              </h2>

              <p className="mx-auto mt-6 max-w-md text-base text-white/35 leading-relaxed">
                Join the waitlist and be the first to experience AI-powered job
                applications that actually land interviews.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="https://app.applysauce.com"
                  className="btn-primary group rounded-full bg-brand px-10 py-4 text-lg font-bold text-bg"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Join the Waitlist
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                </a>
              </div>

              {/* Trust signals */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/20">
                <span className="flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                  Data stays private
                </span>
                <span className="flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                  Nothing auto-sent
                </span>
                <span className="flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  Cancel anytime
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ FOOTER ════════ */}
      <footer className="relative border-t border-white/[0.04] px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-14 lg:flex-row lg:justify-between">
          <div className="max-w-xs space-y-5">
            <Image src="/logo.png" alt="ApplySauce" width={240} height={72} className="h-auto w-48 sm:w-56" />
            <p className="text-sm leading-relaxed text-white/25">
              AI-powered job search automation. From discovery to offer,
              ApplySauce has your back.
            </p>
            <div className="flex gap-3">
              {["X", "Li", "GH"].map((s) => (
                <div
                  key={s}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.06] text-xs font-bold text-white/25 transition-all hover:border-brand/20 hover:text-brand cursor-pointer"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="mb-4 font-display text-xs font-bold tracking-widest uppercase text-white/40">{heading}</h4>
                <ul className="space-y-2.5">
                  {links.map((l) => (
                    <li key={l}>
                      <span className="cursor-default text-sm text-white/20 transition hover:text-white/50">
                        {l}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.04] pt-8">
          <span className="text-xs text-white/15">
            &copy; {new Date().getFullYear()} ApplySauce. All rights reserved.
          </span>
          <span className="text-xs text-white/10 font-serif italic">
            Built with sauce.
          </span>
        </div>
      </footer>
    </main>
  );
}

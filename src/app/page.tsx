import Image from "next/image";

/* ─── Data ─── */

const features = [
  {
    num: "01",
    title: "Job Discovery",
    desc: "Import jobs from Indeed, deduplicate automatically, and surface roles that match your profile across multiple career paths.",
    keyword: "Search",
  },
  {
    num: "02",
    title: "ATS Scoring & Prioritization",
    desc: "Every job scored 0-100 with keyword matching plus interview probability. Sort by fit, filter by category, focus on what matters.",
    keyword: "Score",
  },
  {
    num: "03",
    title: "AI CV Tailoring",
    desc: "Two-phase AI generation: interrogation to identify gaps, then a role-specific CV preserving your original formatting.",
    keyword: "Tailor",
  },
  {
    num: "04",
    title: "Cover Letters & Outreach",
    desc: "Personalized cover letters plus 4 outreach variants — LinkedIn request, LinkedIn follow-up, cold email, and email follow-up. All drafts, never auto-sent.",
    keyword: "Reach",
  },
  {
    num: "05",
    title: "Contact Prospecting",
    desc: "Find recruiters, hiring managers, and warm contacts at target companies. Auto-scored by warmth — shared university, field, and nationality.",
    keyword: "Connect",
  },
  {
    num: "06",
    title: "Interview Prep & Tracking",
    desc: "STAR stories, behavioral questions, and company research briefs on demand. Track rounds, schedule dates, and set follow-up reminders.",
    keyword: "Prepare",
  },
  {
    num: "07",
    title: "Career Path Management",
    desc: "Organize your search by category — consulting, tech, finance, or whatever you target. Each path has its own keyword bank, jobs, and contacts.",
    keyword: "Organize",
  },
  {
    num: "08",
    title: "Pipeline Dashboard",
    desc: "Track every application from discovery to offer. Funnel visualization, follow-up alerts, weekly digest, and deadline reminders — all in one view.",
    keyword: "Track",
  },
];

const pipeline = [
  { label: "Upload Profile", sub: "CV + career preferences" },
  { label: "Discover & Score", sub: "Import jobs, rank by fit" },
  { label: "Generate Materials", sub: "CV, cover letter & outreach" },
  { label: "Network & Apply", sub: "Warm contacts + interview prep" },
];

const plans = [
  {
    name: "Free",
    price: "€0",
    period: "forever",
    desc: "See your ATS score and get one tailored CV — experience the value before you commit.",
    features: [
      "ATS compatibility score",
      "1 tailored CV per month",
      "Job match preview",
    ],
    cta: "Get Started Free",
    href: "https://app.applysauce.com",
    featured: false,
  },
  {
    name: "Pro",
    price: "€30",
    period: "/year",
    desc: "Unlock everything for a full year. Your entire application engine for less than the price of a coffee per month.",
    features: [
      "Unlimited ATS scoring & job imports",
      "AI-tailored CVs & cover letters",
      "LinkedIn & email outreach drafts",
      "Contact prospecting & referral scoring",
      "Interview prep, tracking & follow-ups",
      "Career path management",
      "Pipeline dashboard & weekly digest",
    ],
    cta: "Go Pro",
    href: "https://app.applysauce.com",
    featured: true,
  },
];

const footerLinks = {
  Product: [
    { label: "Job Discovery", href: "#features" },
    { label: "ATS Scoring", href: "#features" },
    { label: "CV Tailoring", href: "#features" },
    { label: "Contact Prospecting", href: "#features" },
    { label: "Interview Prep", href: "#features" },
    { label: "Pricing", href: "#pricing" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Contact", href: "mailto:hello@applysauce.com" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/applysauce",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/applysauce",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/applysauce",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    ),
  },
];

/* ─── Page ─── */

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">

      {/* ════════ NAV ════════ */}
      <nav className="nav-glass fixed top-0 left-0 right-0 z-50 border-b border-white/[0.04]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 sm:px-10">
          <Image src="/logo.png" alt="ApplySauce" width={360} height={108} className="h-auto w-36 sm:w-72" />
          <div className="flex items-center gap-3 sm:gap-8">
            <a href="#features" className="hidden text-sm text-white/50 transition hover:text-white md:block font-medium">
              Features
            </a>
            <a href="#how" className="hidden text-sm text-white/50 transition hover:text-white md:block font-medium">
              How it Works
            </a>
            <a href="#pricing" className="hidden text-sm text-white/50 transition hover:text-white md:block font-medium">
              Pricing
            </a>
            <a
              href="https://app.applysauce.com"
              className="btn-primary rounded-full bg-brand px-3.5 py-2 text-xs font-bold text-bg sm:px-5 sm:py-2.5 sm:text-sm"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </nav>

      {/* ════════ HERO — Poster style, centered ════════ */}
      <section className="relative flex flex-col items-center px-4 pt-28 pb-14 sm:px-10 sm:pt-40 sm:pb-20 bg-halftone">
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
                className="w-40 h-40 sm:w-[260px] sm:h-[260px] drop-shadow-[0_30px_80px_rgba(245,184,0,0.2)]"
              />
              {/* Floating tags */}
              <div className="absolute -left-2 sm:-left-16 top-2 sm:top-4 z-20 animate-float-gentle rounded-lg bg-bg-card border border-white/[0.06] px-2 py-1.5 sm:px-3 sm:py-2 shadow-xl" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-green-400" />
                  <span className="text-[10px] sm:text-[11px] font-semibold text-white/70">ATS: 94</span>
                </div>
              </div>
              <div className="absolute -right-1 sm:-right-12 bottom-1 sm:bottom-2 z-20 animate-float-gentle rounded-lg bg-brand px-2 py-1.5 sm:px-3 sm:py-2 shadow-xl" style={{ animationDelay: "2.5s" }}>
                <span className="text-[10px] sm:text-[11px] font-bold text-bg">CV Ready</span>
              </div>
            </div>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up delay-100">
            <span className="block font-display text-3xl font-extrabold leading-[1.0] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
              Land your
            </span>
            <span className="block font-serif italic text-3xl leading-[1.1] sm:text-6xl lg:text-7xl xl:text-[5.5rem] text-brand mt-1">
              dream job,
            </span>
            <span className="block font-display text-3xl font-extrabold leading-[1.0] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.5rem] mt-1">
              faster.
            </span>
          </h1>

          {/* Subhead */}
          <p className="animate-fade-up delay-300 mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/45 sm:mt-8 sm:text-xl">
            ApplySauce automates your entire job search &mdash; from discovery
            and ATS scoring to tailored CVs, warm referrals, and interview prep.
          </p>

          {/* CTA */}
          <div className="animate-fade-up delay-400 mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://app.applysauce.com"
              className="btn-primary group rounded-full bg-brand px-6 py-3 font-bold text-bg text-base sm:px-8 sm:py-4 sm:text-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started Free
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </a>
            <a
              href="#how"
              className="group rounded-full border border-white/10 px-6 py-3 font-semibold text-white/60 transition-all hover:border-brand/30 hover:text-white sm:px-8 sm:py-4"
            >
              How it Works
            </a>
          </div>

          {/* Inline stats — not a box, just inline pills */}
          <div className="animate-fade-up delay-500 mt-10 flex flex-wrap items-center justify-center gap-3">
            {[
              "ATS Scoring 0-100",
              "Warm Referral Finder",
              "Tailored to Every Role",
            ].map((s) => (
              <span key={s} className="rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-1.5 text-xs font-medium text-white/35">
                {s}
              </span>
            ))}
          </div>
        </div>

      </section>

      {/* ════════ FEATURES — Editorial zigzag with golden thread ════════ */}
      <section id="features" className="relative px-4 pt-12 pb-16 sm:px-10 sm:pt-16 sm:pb-28 lg:px-20">
        {/* The golden thread — a vertical line connecting all features */}
        <div className="golden-thread pointer-events-none absolute inset-0 hidden lg:block" />

        <div className="mx-auto max-w-6xl">
          {/* Section header — centered above the thread */}
          <div className="relative z-10 mb-16 text-center">
            <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand/60">
              What&apos;s in the Sauce
            </span>
            <h2 className="mt-4 font-display text-2xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
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
                  className={`feature-row group ${!isEven ? "row-reverse" : ""} relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-16 ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Number + Title side */}
                  <div className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                    <div className={`flex items-center gap-4 ${isEven ? "lg:justify-end" : "lg:justify-start"}`}>
                      <span className="font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold leading-none transition-colors duration-500 text-white/[0.06] group-hover:text-brand/30">
                        {f.num}
                      </span>
                      <div>
                        <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl transition-colors duration-500 text-white group-hover:text-brand">
                          {f.title}
                        </h3>
                        <span className="mt-0.5 inline-block font-serif italic text-sm text-white/25 transition-colors duration-500 group-hover:text-white/40">
                          {f.keyword}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Center dot — on the thread */}
                  <div className="hidden lg:flex items-center justify-center shrink-0">
                    <div className="h-3 w-3 rounded-full transition-all duration-500 bg-white/15 group-hover:bg-brand group-hover:shadow-[0_0_15px_var(--color-brand-glow)]" />
                  </div>

                  {/* Description side */}
                  <div className={`flex-1 ${isEven ? "lg:text-left" : "lg:text-right"}`}>
                    <p className="text-base sm:text-lg leading-relaxed text-white/40 transition-colors duration-500 group-hover:text-white/60 max-w-md mx-auto lg:mx-0">
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
      <section id="how" className="relative px-4 py-16 sm:px-10 sm:py-28 lg:px-20 bg-halftone">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-12 sm:mb-20 text-center">
            <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand/60">
              How It Works
            </span>
            <h2 className="mt-4 font-display text-2xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
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

      {/* ════════ PRICING ════════ */}
      <section id="pricing" className="relative px-4 py-16 sm:px-10 sm:py-28 lg:px-20">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-12 sm:mb-20 text-center">
            <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand/60">
              Pricing
            </span>
            <h2 className="mt-4 font-display text-2xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Simple plans.{" "}
              <span className="font-serif italic font-normal text-brand">Real results.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base text-white/35 leading-relaxed sm:text-lg">
              Start free, upgrade when you&apos;re ready. Cancel anytime.
            </p>
          </div>

          {/* Cards */}
          <div className="mx-auto grid max-w-4xl gap-6 sm:gap-8 md:grid-cols-2 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`pricing-card group relative rounded-2xl border p-6 sm:p-8 transition-all duration-500 ${
                  plan.featured
                    ? "border-brand/30 bg-brand/[0.04] shadow-[0_0_60px_rgba(245,184,0,0.06)] md:-mt-4 md:mb-[-1rem]"
                    : "border-white/[0.06] bg-bg-card hover:border-white/[0.1]"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-brand px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-bg">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan name */}
                <div className="mb-6">
                  <h3 className={`font-display text-lg font-bold tracking-tight ${plan.featured ? "text-brand" : "text-white/70"}`}>
                    {plan.name}
                  </h3>
                </div>

                {/* Price */}
                <div className="mb-6 flex items-baseline gap-1.5">
                  <span className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                    {plan.price}
                  </span>
                  <span className="text-sm text-white/30 font-medium">
                    {plan.period}
                  </span>
                </div>

                {/* Description */}
                <p className="mb-8 text-sm leading-relaxed text-white/35">
                  {plan.desc}
                </p>

                {/* CTA */}
                <a
                  href={plan.href}
                  className={`mb-8 block w-full rounded-full py-3 text-center text-sm font-bold transition-all duration-300 ${
                    plan.featured
                      ? "btn-primary bg-brand text-bg hover:shadow-[0_0_30px_var(--color-brand-glow)]"
                      : "border border-white/[0.08] text-white/60 hover:border-brand/30 hover:text-white"
                  }`}
                >
                  {plan.cta}
                </a>

                {/* Features list */}
                <ul className="space-y-3">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm text-white/40">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`mt-0.5 shrink-0 ${plan.featured ? "text-brand" : "text-white/20"}`}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CTA — with mascot callback ════════ */}
      <section id="waitlist" className="relative px-4 py-16 sm:px-10 sm:py-32 lg:px-20">
        <div className="relative mx-auto max-w-4xl">
          {/* CTA card with border */}
          <div className="rounded-2xl sm:rounded-[2rem] border border-white/[0.06] bg-bg-card p-6 sm:p-16 text-center relative overflow-hidden">
            {/* Halftone inside card */}
            <div className="absolute inset-0 bg-halftone opacity-50" />

            <div className="relative z-10">
              <div className="inline-block mb-8 animate-float-gentle">
                <Image
                  src="/mascot.png"
                  alt="ApplySauce mascot"
                  width={120}
                  height={120}
                  className="drop-shadow-[0_10px_30px_rgba(245,184,0,0.12)]"
                />
              </div>

              <h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Ready to supercharge
                <br />
                your job search?
              </h2>

              <p className="mx-auto mt-6 max-w-md text-base text-white/35 leading-relaxed">
                AI-powered job search automation that scores, tailors,
                finds warm contacts, and gets you to interviews faster.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="https://app.applysauce.com"
                  className="btn-primary group rounded-full bg-brand px-8 py-3 text-base font-bold text-bg sm:px-10 sm:py-4 sm:text-lg"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started Free
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
      <footer className="relative border-t border-white/[0.04] px-4 py-12 sm:px-10 sm:py-20 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-14 lg:flex-row lg:justify-between">
          <div className="max-w-xs space-y-5">
            <Image src="/logo.png" alt="ApplySauce" width={320} height={96} className="h-auto w-56 sm:w-72" />
            <p className="text-sm leading-relaxed text-white/25">
              AI-powered job search automation. From discovery to warm
              referrals to offer, ApplySauce has your back.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.06] text-white/25 transition-all hover:border-brand/20 hover:text-brand"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="mb-4 font-display text-xs font-bold tracking-widest uppercase text-white/40">{heading}</h4>
                <ul className="space-y-2.5">
                  {links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-sm text-white/20 transition hover:text-white/50">
                        {l.label}
                      </a>
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

import Image from "next/image";

/* ─── Data ─── */

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
    ),
    title: "Job Discovery",
    desc: "Automatically search Indeed, parse results, and surface roles matching your profile, skills, and career goals.",
    span: "sm:col-span-2 lg:col-span-1",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
    ),
    title: "ATS Scoring",
    desc: "Score every job 0-100 against your CV with keyword matching. Know your real match before you apply.",
    span: "lg:col-span-1",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
    ),
    title: "AI CV Tailoring",
    desc: "Two-phase AI generation: interrogation to fill gaps, then a role-specific CV preserving your original formatting.",
    span: "lg:col-span-1",
    featured: true,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
    ),
    title: "Cover Letters & Outreach",
    desc: "Templated cover letters plus 4 LinkedIn/email outreach variants — all personalized, never auto-sent.",
    span: "sm:col-span-2 lg:col-span-1",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
    ),
    title: "Interview Prep",
    desc: "AI-generated STAR stories, company-specific questions, and talking points tailored to each role.",
    span: "lg:col-span-1",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
    title: "Contact Prospecting",
    desc: "Find and score referral contacts via Clay and Vibe. Rank by warmth and relevance to maximize introductions.",
    span: "lg:col-span-1",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 11.207V17"/><path d="M11 8.207V17"/><path d="M15 12.207V17"/><path d="M19 5.207V17"/></svg>
    ),
    title: "Pipeline Dashboard",
    desc: "Track every application from discovery to offer. Funnel charts, follow-up alerts, and weekly digest.",
    span: "sm:col-span-2 lg:col-span-1",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12h.01"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M22 13a18.15 18.15 0 0 1-20 0"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
    ),
    title: "Industry Packs",
    desc: "Rule packs for consulting, IB, tech, and policy — so your materials match industry expectations.",
    span: "lg:col-span-1",
  },
];

const steps = [
  {
    num: "01",
    title: "Upload Your CV",
    desc: "Drop in your resume. Our AI parses every detail — skills, experience, education, and career trajectory.",
  },
  {
    num: "02",
    title: "Set Your Targets",
    desc: "Define your dream roles, locations, salary range, and industry preferences. We handle the rest.",
  },
  {
    num: "03",
    title: "AI Runs Your Pipeline",
    desc: "Discovery, scoring, tailoring, outreach, and prep — 14 services work in parallel, 24/7.",
  },
  {
    num: "04",
    title: "Land Interviews",
    desc: "Walk into every interview with custom prep, STAR stories, and a tailored CV that passed ATS.",
  },
];

const marqueeWords = [
  "Job Discovery",
  "ATS Scoring",
  "CV Tailoring",
  "Cover Letters",
  "Interview Prep",
  "Contact Prospecting",
  "Pipeline Tracking",
  "Industry Packs",
  "LinkedIn Outreach",
  "STAR Stories",
  "Keyword Matching",
  "AI-Powered",
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
      <nav className="nav-glass fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
          <Image src="/logo.png" alt="ApplySauce" width={160} height={48} className="h-auto w-32 sm:w-36" />
          <div className="flex items-center gap-3">
            <a href="#features" className="hidden text-sm font-medium text-white/60 transition hover:text-white sm:block">
              Features
            </a>
            <a href="#how" className="hidden text-sm font-medium text-white/60 transition hover:text-white sm:block ml-6">
              How it Works
            </a>
            <a
              href="https://app.applysauce.com"
              className="btn-sauce ml-6 rounded-full bg-brand px-5 py-2 text-sm font-bold text-bg transition-colors"
            >
              Get Early Access
            </a>
          </div>
        </div>
      </nav>

      {/* ════════ HERO ════════ */}
      <section className="relative min-h-screen flex items-center px-6 pt-24 pb-12 sm:px-10 lg:px-20">
        {/* Background blobs */}
        <div className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-brand/8 blur-[150px] animate-blob" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-[400px] w-[400px] rounded-full bg-accent/6 blur-[120px] animate-blob-reverse" />
        <div className="pointer-events-none absolute top-1/3 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-brand/5 blur-[100px] animate-blob" style={{ animationDelay: "5s" }} />

        {/* Decorative sauce drips from top */}
        <div className="sauce-drip top-0 left-[15%] h-20 animate-drip" style={{ animationDelay: "0s" }} />
        <div className="sauce-drip top-0 left-[35%] h-32 animate-drip" style={{ animationDelay: "1.5s" }} />
        <div className="sauce-drip top-0 left-[70%] h-16 animate-drip" style={{ animationDelay: "0.8s" }} />
        <div className="sauce-drip top-0 left-[85%] h-24 animate-drip" style={{ animationDelay: "2.2s" }} />

        {/* Rotating decorative ring */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] lg:w-[900px] lg:h-[900px] opacity-[0.03] animate-spin-slow">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 8" className="text-brand" />
            <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 12" className="text-brand" />
          </svg>
        </div>

        <div className="relative mx-auto flex max-w-7xl w-full flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
          {/* Left — copy */}
          <div className="max-w-2xl space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-sm font-medium text-brand">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                </span>
                AI-Powered Job Search
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-up delay-100 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
              Land your{" "}
              <span className="relative inline-block">
                <span className="text-gradient">dream job</span>
                {/* Underline swash */}
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand/40" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                  <path d="M2 8 C50 2, 150 2, 198 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
              <br />
              <span className="text-white/90">faster.</span>
            </h1>

            {/* Subhead */}
            <p className="animate-fade-up delay-300 max-w-lg text-lg leading-relaxed text-white/50 sm:text-xl lg:mx-0 mx-auto">
              ApplySauce automates your entire job search pipeline &mdash; from
              discovery and ATS scoring to tailored CVs, cover letters, and
              interview prep.
            </p>

            {/* CTA buttons */}
            <div className="animate-fade-up delay-400 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href="https://app.applysauce.com"
                className="btn-sauce group relative rounded-full bg-brand px-8 py-4 font-bold text-bg transition-all hover:shadow-[0_0_40px_var(--color-brand-glow)] animate-pulse-glow"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Early Access
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </a>
              <a
                href="#how"
                className="group rounded-full border border-white/10 px-8 py-4 font-semibold text-white/70 transition-all hover:border-brand/30 hover:text-white hover:bg-white/[0.03]"
              >
                <span className="flex items-center gap-2">
                  See How It Works
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-y-0.5"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
                </span>
              </a>
            </div>
          </div>

          {/* Right — mascot with effects */}
          <div className="relative w-64 shrink-0 sm:w-80 lg:w-[380px] animate-fade-up delay-500">
            {/* Glow behind mascot */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand/25 via-brand/10 to-accent/10 blur-[80px] animate-blob" />

            {/* Mascot with floating animation */}
            <div className="animate-float relative z-10">
              <Image
                src="/mascot.png"
                alt="ApplySauce mascot — a friendly sauce bottle with a magnifying glass and briefcase"
                width={380}
                height={380}
                priority
                className="relative z-10 drop-shadow-[0_20px_60px_rgba(245,184,0,0.2)]"
              />
            </div>

            {/* Floating accent dots */}
            <div className="absolute top-8 -left-4 h-3 w-3 rounded-full bg-brand/60 animate-float-slow" style={{ animationDelay: "1s" }} />
            <div className="absolute bottom-16 -right-6 h-4 w-4 rounded-full bg-accent/40 animate-float-slow" style={{ animationDelay: "2s" }} />
            <div className="absolute top-1/2 -right-8 h-2 w-2 rounded-full bg-brand/40 animate-float" style={{ animationDelay: "0.5s" }} />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-1200">
          <div className="flex flex-col items-center gap-2 text-white/20">
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <div className="h-8 w-[1px] bg-gradient-to-b from-white/20 to-transparent animate-float-slow" />
          </div>
        </div>
      </section>

      {/* ════════ MARQUEE ════════ */}
      <div className="relative border-y border-white/[0.04] bg-bg-card/50 py-5 overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-bg to-transparent" />

        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeWords, ...marqueeWords].map((word, i) => (
            <span key={i} className="mx-6 flex items-center gap-3 text-sm font-medium text-white/25">
              <span className="h-1.5 w-1.5 rounded-full bg-brand/40" />
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* ════════ FEATURES — Bento Grid ════════ */}
      <section id="features" className="px-6 py-28 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          {/* Section header */}
          <div className="mx-auto mb-20 max-w-2xl text-center">
            <span className="inline-block rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-brand">
              Your AI Pipeline
            </span>
            <h2 className="mt-8 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Everything you need to{" "}
              <span className="text-gradient">land interviews</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/40">
              From profile to offer &mdash; 14 core services automate every step
              of your job search pipeline.
            </p>
          </div>

          {/* Bento grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`bento-card group rounded-2xl border border-white/[0.04] bg-bg-card p-7 transition-all duration-500 hover:border-brand/15 hover:bg-bg-card-hover ${f.span} ${
                  f.featured ? "lg:row-span-2 flex flex-col justify-between" : ""
                }`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div>
                  {/* Icon */}
                  <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 ${
                    f.featured
                      ? "bg-gradient-to-br from-brand/20 to-accent/10 text-brand"
                      : "bg-white/[0.04] text-white/50 group-hover:bg-brand/10 group-hover:text-brand"
                  }`}>
                    {f.icon}
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-lg font-bold tracking-tight transition-colors group-hover:text-brand">
                    {f.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-white/40 transition-colors group-hover:text-white/55">
                    {f.desc}
                  </p>
                </div>

                {f.featured && (
                  <div className="mt-8 flex items-center gap-2 text-sm font-medium text-brand/60 transition-colors group-hover:text-brand">
                    <span>Learn more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ HOW IT WORKS ════════ */}
      <section id="how" className="relative px-6 py-28 sm:px-10 lg:px-20">
        {/* Background accent */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/10 to-transparent" />

        <div className="mx-auto max-w-7xl">
          {/* Section header */}
          <div className="mx-auto mb-20 max-w-2xl text-center">
            <span className="inline-block rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-brand">
              How It Works
            </span>
            <h2 className="mt-8 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Four steps to your{" "}
              <span className="text-gradient">next offer</span>
            </h2>
          </div>

          {/* Steps */}
          <div className="grid gap-8 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.num} className="group relative" style={{ animationDelay: `${i * 150}ms` }}>
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px">
                    <div className="h-full w-full bg-gradient-to-r from-brand/20 to-transparent" />
                  </div>
                )}

                {/* Number */}
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/[0.06] bg-bg-card font-display text-2xl font-bold text-brand/60 transition-all duration-500 group-hover:border-brand/20 group-hover:bg-brand/5 group-hover:text-brand group-hover:shadow-[0_0_30px_var(--color-brand-glow)]">
                  {s.num}
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-bold tracking-tight transition-colors group-hover:text-brand">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/40">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ STATS ════════ */}
      <section className="px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/[0.04] bg-bg-card/80 p-10 sm:p-14">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              { value: "14", label: "AI Services" },
              { value: "95%", label: "ATS Pass Rate" },
              { value: "3x", label: "More Interviews" },
              { value: "24/7", label: "Pipeline Running" },
            ].map((stat, i) => (
              <div key={stat.label} className={`stat-separator text-center ${i < 3 ? "" : ""}`}>
                <div className="font-display text-4xl font-bold text-gradient sm:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-white/35">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <section id="waitlist" className="relative px-6 py-32 sm:px-10 lg:px-20">
        {/* Dramatic background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-brand/8 blur-[200px] animate-blob" />
          <div className="absolute top-1/3 left-1/4 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[150px] animate-blob-reverse" />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <div className="inline-block mb-6 animate-float-slow">
            <Image
              src="/mascot.png"
              alt="ApplySauce mascot"
              width={100}
              height={100}
              className="drop-shadow-[0_10px_30px_rgba(245,184,0,0.15)]"
            />
          </div>

          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Ready to{" "}
            <span className="text-gradient">supercharge</span>
            <br />
            your job search?
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-lg text-white/40 leading-relaxed">
            Join the waitlist and be the first to experience AI-powered job
            applications that actually land interviews.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://app.applysauce.com"
              className="btn-sauce group rounded-full bg-brand px-10 py-4 text-lg font-bold text-bg transition-all hover:shadow-[0_0_60px_var(--color-brand-glow)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Join the Waitlist
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </a>
            <a
              href="#features"
              className="rounded-full border border-white/10 px-10 py-4 text-lg font-semibold text-white/60 transition-all hover:border-brand/20 hover:text-white hover:bg-white/[0.03]"
            >
              Explore Features
            </a>
          </div>

          {/* Trust signals */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-white/25">
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
              Your data stays private
            </span>
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
              Nothing sent without approval
            </span>
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              Cancel anytime
            </span>
          </div>
        </div>
      </section>

      {/* ════════ FOOTER ════════ */}
      <footer className="relative border-t border-white/[0.04] px-6 py-20 sm:px-10 lg:px-20">
        {/* Top glow */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-brand/15 to-transparent" />

        <div className="mx-auto flex max-w-7xl flex-col gap-14 lg:flex-row lg:justify-between">
          {/* Brand column */}
          <div className="max-w-xs space-y-5">
            <Image
              src="/logo.png"
              alt="ApplySauce"
              width={180}
              height={54}
              className="h-auto w-40"
            />
            <p className="text-sm leading-relaxed text-white/30">
              AI-powered job search automation. From discovery to offer,
              ApplySauce has your back.
            </p>
            <div className="flex gap-3">
              {/* Social icons placeholder */}
              {["X", "Li", "GH"].map((s) => (
                <div
                  key={s}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.06] text-xs font-bold text-white/30 transition-all hover:border-brand/20 hover:text-brand cursor-pointer"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="mb-4 text-xs font-bold tracking-widest uppercase text-white/50">{heading}</h4>
                <ul className="space-y-2.5">
                  {links.map((l) => (
                    <li key={l}>
                      <span className="cursor-default text-sm text-white/25 transition hover:text-white/60">
                        {l}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.04] pt-8">
          <span className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} ApplySauce. All rights reserved.
          </span>
          <span className="text-xs text-white/15">
            Built with sauce.
          </span>
        </div>
      </footer>
    </main>
  );
}

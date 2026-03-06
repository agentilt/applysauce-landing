import Image from "next/image";

/* ─── Feature data with visual variants ─── */

const features: {
  num: string;
  title: string;
  desc: string;
  variant: "dark" | "cream" | "brand" | "outline";
  size: string;
  icon: React.ReactNode;
}[] = [
  {
    num: "01",
    title: "Job Discovery",
    desc: "Automatically search Indeed, parse results, and surface roles matching your profile, skills, and career goals.",
    variant: "dark",
    size: "md:col-span-2 lg:col-span-3",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
  },
  {
    num: "02",
    title: "ATS Scoring",
    desc: "Score every job 0-100 against your CV. Know your real match before you apply.",
    variant: "cream",
    size: "md:col-span-2 lg:col-span-2",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  },
  {
    num: "03",
    title: "AI CV Tailoring",
    desc: "Two-phase AI generation: interrogation to fill gaps, then a role-specific CV preserving your formatting.",
    variant: "brand",
    size: "md:col-span-2 lg:col-span-2",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>,
  },
  {
    num: "04",
    title: "Cover Letters & Outreach",
    desc: "Templated cover letters plus 4 LinkedIn/email outreach variants — all personalized, never auto-sent.",
    variant: "outline",
    size: "md:col-span-2 lg:col-span-3",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
  },
  {
    num: "05",
    title: "Interview Prep",
    desc: "AI-generated STAR stories, company-specific questions, and talking points tailored to each role you apply for.",
    variant: "cream",
    size: "md:col-span-2 lg:col-span-3",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>,
  },
  {
    num: "06",
    title: "Contact Prospecting",
    desc: "Find and score referral contacts. Rank by warmth and relevance to maximize introductions.",
    variant: "dark",
    size: "md:col-span-2 lg:col-span-2",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  },
  {
    num: "07",
    title: "Pipeline Dashboard",
    desc: "Track every application from discovery to offer. Funnel charts, follow-up alerts, and weekly digest.",
    variant: "outline",
    size: "md:col-span-2 lg:col-span-2",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 11.207V17"/><path d="M11 8.207V17"/><path d="M15 12.207V17"/><path d="M19 5.207V17"/></svg>,
  },
  {
    num: "08",
    title: "Industry Packs",
    desc: "Rule packs for consulting, IB, tech, and policy — materials that match industry expectations.",
    variant: "brand",
    size: "md:col-span-2 lg:col-span-1",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12h.01"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M22 13a18.15 18.15 0 0 1-20 0"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>,
  },
];

const steps = [
  { num: "01", title: "Upload Your CV", desc: "Drop in your resume. Our AI parses every detail — skills, experience, and career trajectory." },
  { num: "02", title: "Set Your Targets", desc: "Define dream roles, locations, salary range, and industry preferences." },
  { num: "03", title: "AI Runs Your Pipeline", desc: "14 services work in parallel — discovery, scoring, tailoring, outreach, and prep." },
  { num: "04", title: "Land Interviews", desc: "Walk in with custom prep, STAR stories, and a CV that passed ATS." },
];

const marqueeItems = [
  "Job Discovery", "ATS Scoring", "CV Tailoring", "Cover Letters",
  "Interview Prep", "Contact Prospecting", "Pipeline Tracking",
  "Industry Packs", "LinkedIn Outreach", "STAR Stories",
  "Keyword Matching", "AI-Powered", "Smart Applications",
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
          <Image src="/logo.png" alt="ApplySauce" width={160} height={48} className="h-auto w-32 sm:w-36" />
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

      {/* ════════ HERO ════════ */}
      <section className="relative min-h-screen flex items-center px-6 pt-28 pb-16 sm:px-10 lg:px-20">
        {/* Background effects */}
        <div className="pointer-events-none absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-brand/6 blur-[180px] animate-blob" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-accent/4 blur-[160px] animate-blob-reverse" />

        {/* Decorative grid lines */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: "linear-gradient(rgba(245,184,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,184,0,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }} />
        </div>

        <div className="relative mx-auto w-full max-w-7xl">
          <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-20">
            {/* Left — copy */}
            <div className="flex-1 space-y-8 text-center lg:text-left">
              {/* Badge */}
              <div className="animate-fade-up">
                <span className="inline-flex items-center gap-2.5 rounded-full border border-brand/20 bg-brand/5 px-5 py-2 text-sm font-medium text-brand">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                  </span>
                  Now in Early Access
                </span>
              </div>

              {/* Headline — mixed fonts for editorial feel */}
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
              <p className="animate-fade-up delay-300 max-w-lg text-lg leading-relaxed text-white/45 sm:text-xl mx-auto lg:mx-0">
                ApplySauce automates your entire job search pipeline &mdash; from
                discovery and ATS scoring to tailored CVs, cover letters, and
                interview prep.
              </p>

              {/* CTA */}
              <div className="animate-fade-up delay-400 flex flex-wrap justify-center gap-4 lg:justify-start">
                <a
                  href="https://app.applysauce.com"
                  className="btn-primary group rounded-full bg-brand px-8 py-4 font-bold text-bg text-lg animate-pulse-glow"
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

              {/* Mini stats */}
              <div className="animate-fade-up delay-500 flex items-center justify-center gap-8 pt-4 lg:justify-start">
                {[
                  { val: "14", label: "AI services" },
                  { val: "95%", label: "ATS pass rate" },
                  { val: "3x", label: "more interviews" },
                ].map((s) => (
                  <div key={s.label} className="text-center lg:text-left">
                    <div className="font-display text-2xl font-extrabold text-brand">{s.val}</div>
                    <div className="text-xs text-white/30 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — mascot */}
            <div className="relative w-64 shrink-0 sm:w-80 lg:w-[420px] animate-fade-up delay-500">
              {/* Warm glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand/20 via-brand/8 to-accent/8 blur-[100px] animate-blob" />

              {/* Decorative ring */}
              <div className="absolute inset-[-20px] animate-spin-slow opacity-[0.06]">
                <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
                  <circle cx="200" cy="200" r="195" stroke="currentColor" strokeWidth="0.5" strokeDasharray="6 14" className="text-brand" />
                </svg>
              </div>

              {/* Mascot */}
              <div className="animate-float relative z-10">
                <Image
                  src="/mascot.png"
                  alt="ApplySauce mascot — a friendly sauce bottle with a magnifying glass and briefcase"
                  width={420}
                  height={420}
                  priority
                  className="drop-shadow-[0_30px_80px_rgba(245,184,0,0.15)]"
                />
              </div>

              {/* Floating tags */}
              <div className="absolute -left-4 top-1/4 z-20 animate-float-gentle rounded-xl bg-bg-card/90 border border-white/[0.06] px-4 py-2.5 shadow-xl backdrop-blur-sm" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  <span className="text-xs font-semibold text-white/70">ATS Score: 94</span>
                </div>
              </div>
              <div className="absolute -right-2 bottom-1/4 z-20 animate-float-gentle rounded-xl bg-brand/90 px-4 py-2.5 shadow-xl" style={{ animationDelay: "2.5s" }}>
                <span className="text-xs font-bold text-bg">CV Tailored</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-1000">
          <div className="flex flex-col items-center gap-2 text-white/15">
            <div className="h-8 w-4 rounded-full border border-white/15 flex items-start justify-center pt-1.5">
              <div className="h-1.5 w-1 rounded-full bg-white/30 animate-float-gentle" />
            </div>
          </div>
        </div>
      </section>

      {/* ════════ DOUBLE MARQUEE ════════ */}
      <div className="relative py-6 overflow-hidden border-y border-white/[0.03]">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-bg to-transparent" />

        {/* Row 1 */}
        <div className="flex animate-marquee whitespace-nowrap mb-3">
          {[...marqueeItems, ...marqueeItems].map((word, i) => (
            <span key={`a-${i}`} className="mx-5 flex items-center gap-3 text-sm font-display font-bold text-white/[0.07] uppercase tracking-wider">
              <span className="h-1 w-1 rounded-full bg-brand/30" />
              {word}
            </span>
          ))}
        </div>
        {/* Row 2 — reverse direction */}
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((word, i) => (
            <span key={`b-${i}`} className="mx-5 flex items-center gap-3 text-sm font-display font-bold text-white/[0.05] uppercase tracking-wider">
              <span className="h-1 w-1 rounded-full bg-accent/20" />
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* ════════ FEATURES — Asymmetric Editorial Grid ════════ */}
      <section id="features" className="px-6 py-28 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          {/* Section header — left-aligned for editorial feel */}
          <div className="mb-20 max-w-3xl">
            <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand/60">
              Features
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Everything you need.{" "}
              <span className="font-serif italic font-normal text-brand">Nothing you don&apos;t.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/35">
              14 AI services working together to automate your entire job search
              pipeline, from first discovery to final offer.
            </p>
          </div>

          {/* Asymmetric grid — 5 columns for varied sizing */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`feature-card feature-card-${f.variant} rounded-3xl p-8 sm:p-10 ${f.size} overflow-hidden`}
              >
                <span className="feature-number">{f.num}</span>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${
                    f.variant === "brand"
                      ? "bg-bg/10 text-bg"
                      : f.variant === "cream"
                        ? "bg-ink/5 text-ink/70"
                        : "bg-white/[0.04] text-white/50"
                  }`}>
                    {f.icon}
                  </div>

                  {/* Title */}
                  <h3 className={`mb-3 font-display text-xl font-bold tracking-tight sm:text-2xl ${
                    f.variant === "brand"
                      ? "text-bg"
                      : f.variant === "cream"
                        ? "text-ink"
                        : "text-white"
                  }`}>
                    {f.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm sm:text-base leading-relaxed max-w-md ${
                    f.variant === "brand"
                      ? "text-bg/70"
                      : f.variant === "cream"
                        ? "text-ink/50"
                        : "text-white/40"
                  }`}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CREAM BREAK — How It Works ════════ */}
      <section id="how" className="diagonal-top relative bg-cream px-6 py-28 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-20 flex flex-col items-center text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
            <div>
              <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-accent/60">
                How It Works
              </span>
              <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
                Four steps to{" "}
                <span className="font-serif italic font-normal text-accent">your next offer.</span>
              </h2>
            </div>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-ink/40 lg:mt-0 lg:text-right">
              Set it up once. ApplySauce runs your pipeline around the clock while you focus on what matters.
            </p>
          </div>

          {/* Steps — cards with tilt on hover */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div
                key={s.num}
                className="step-card group rounded-3xl bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-ink/[0.04]"
              >
                {/* Number */}
                <div className="mb-8 font-display text-6xl font-extrabold text-ink/[0.04] leading-none">
                  {s.num}
                </div>

                {/* Content */}
                <h3 className="mb-3 font-display text-xl font-bold tracking-tight text-ink transition-colors group-hover:text-accent">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink/40">
                  {s.desc}
                </p>

                {/* Arrow */}
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-accent/40 transition-all group-hover:text-accent group-hover:gap-3">
                  <span className="h-px w-6 bg-current transition-all group-hover:w-10" />
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ STATS BAND ════════ */}
      <section className="bg-ink px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
            {[
              { value: "14", label: "AI Services", suffix: "" },
              { value: "95", label: "ATS Pass Rate", suffix: "%" },
              { value: "3", label: "More Interviews", suffix: "x" },
              { value: "24/7", label: "Pipeline Running", suffix: "" },
            ].map((stat) => (
              <div key={stat.label} className="stat-sep text-center">
                <div className="font-display text-5xl font-extrabold text-cream sm:text-6xl">
                  {stat.value}
                  {stat.suffix && (
                    <span className="font-serif italic text-brand text-4xl sm:text-5xl">{stat.suffix}</span>
                  )}
                </div>
                <div className="mt-2 text-sm font-medium text-cream/30">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <section id="waitlist" className="relative px-6 py-32 sm:px-10 lg:px-20">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-brand/6 blur-[200px] animate-blob" />
          <div className="absolute top-1/3 right-1/4 h-[300px] w-[300px] rounded-full bg-accent/4 blur-[150px] animate-blob-reverse" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          {/* Mascot small */}
          <div className="inline-block mb-8 animate-float-gentle">
            <Image
              src="/mascot.png"
              alt="ApplySauce mascot"
              width={80}
              height={80}
              className="drop-shadow-[0_10px_30px_rgba(245,184,0,0.12)]"
            />
          </div>

          <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Ready to{" "}
            <span className="font-serif italic font-normal text-brand">supercharge</span>
            <br />
            your job search?
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-lg text-white/35 leading-relaxed">
            Join the waitlist and be the first to experience AI-powered job
            applications that actually land interviews.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://app.applysauce.com"
              className="btn-primary group rounded-full bg-brand px-10 py-4 text-lg font-bold text-bg hover:shadow-[0_0_60px_var(--color-brand-glow)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Join the Waitlist
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </a>
            <a
              href="#features"
              className="rounded-full border border-white/10 px-10 py-4 text-lg font-semibold text-white/50 transition-all hover:border-brand/20 hover:text-white"
            >
              Explore Features
            </a>
          </div>

          {/* Trust signals */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-xs text-white/20">
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
              Your data stays private
            </span>
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
              Nothing sent without approval
            </span>
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              Cancel anytime
            </span>
          </div>
        </div>
      </section>

      {/* ════════ FOOTER ════════ */}
      <footer className="relative border-t border-white/[0.04] px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-14 lg:flex-row lg:justify-between">
          {/* Brand */}
          <div className="max-w-xs space-y-5">
            <Image src="/logo.png" alt="ApplySauce" width={180} height={54} className="h-auto w-40" />
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

          {/* Links */}
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

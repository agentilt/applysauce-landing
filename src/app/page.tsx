import Image from "next/image";

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
    ),
    title: "Job Discovery",
    desc: "Automatically search Indeed, parse results, and surface roles matching your profile, skills, and career goals.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
    ),
    title: "ATS Scoring",
    desc: "Score every job 0\u2013100 against your CV with keyword matching. Know your real match before you apply.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
    ),
    title: "AI CV Tailoring",
    desc: "Two-phase AI generation: interrogation to fill gaps, then a role-specific CV preserving your original formatting.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
    ),
    title: "Cover Letters & Outreach",
    desc: "Templated cover letters plus 4 LinkedIn/email outreach variants \u2014 all personalized, never auto-sent.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
    ),
    title: "Interview Prep",
    desc: "AI-generated STAR stories, company-specific questions, and talking points tailored to each role you apply for.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
    title: "Contact Prospecting",
    desc: "Find and score referral contacts via Clay and Vibe. Rank by warmth and relevance to maximize introductions.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 11.207V17"/><path d="M11 8.207V17"/><path d="M15 12.207V17"/><path d="M19 5.207V17"/></svg>
    ),
    title: "Pipeline Dashboard",
    desc: "Track every application from discovery to offer. Funnel charts, follow-up alerts, and weekly digest \u2014 all in one view.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12h.01"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M22 13a18.15 18.15 0 0 1-20 0"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
    ),
    title: "Industry Specialization",
    desc: "Rule packs for consulting, investment banking, tech, and policy \u2014 so your materials match industry expectations.",
  },
];

const footerLinks = {
  Product: [
    "Job Discovery",
    "ATS Scoring",
    "CV Builder",
    "Cover Letters",
    "Interview Prep",
  ],
  Company: ["About", "Blog", "Contact"],
  Resources: ["Documentation", "GitHub"],
  Legal: ["Privacy", "Terms"],
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ───── HERO ───── */}
      <section className="relative overflow-hidden px-6 pt-32 pb-20 sm:px-10 lg:px-20">
        {/* glow */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-brand/15 blur-[120px]" />

        <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row lg:items-center lg:justify-between">
          {/* left */}
          <div className="max-w-xl space-y-8 text-center lg:text-left">
            <span className="inline-block rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-medium text-brand">
              AI-Powered Job Search
            </span>
            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
              Land your dream job,{" "}
              <span className="text-brand">faster</span>
            </h1>
            <p className="text-lg leading-relaxed text-white/70">
              ApplySauce automates your job search pipeline &mdash; from Indeed
              discovery and ATS scoring to tailored CVs, cover letters, and
              interview prep. All powered by AI.
            </p>
            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href="#waitlist"
                className="rounded-xl bg-brand px-6 py-3 font-semibold text-black transition hover:bg-brand-dark"
              >
                Get Early Access
              </a>
              <a
                href="#features"
                className="rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/5"
              >
                See How It Works
              </a>
            </div>
          </div>

          {/* right — mascot */}
          <div className="relative w-72 shrink-0 sm:w-96 lg:w-[420px]">
            <div className="pointer-events-none absolute inset-0 rounded-full bg-brand/20 blur-[80px]" />
            <Image
              src="/mascot.png"
              alt="ApplySauce mascot"
              width={420}
              height={420}
              priority
              className="relative z-10"
            />
          </div>
        </div>
      </section>

      {/* ───── FEATURES ───── */}
      <section id="features" className="px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="inline-block rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-medium text-brand">
              Your AI Pipeline
            </span>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-brand sm:text-5xl">
              Everything you need to land interviews
            </h2>
            <p className="mt-4 text-lg text-white/60">
              From profile to offer &mdash; ApplySauce runs 14 core services
              that automate every step of your job search pipeline.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-white/5 bg-bg-card p-6 transition hover:border-brand/20 hover:bg-bg-card-hover"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  {f.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section
        id="waitlist"
        className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-20"
      >
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[100px]" />
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-brand sm:text-5xl">
            Ready to supercharge your job search?
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Join the waitlist and be the first to experience AI-powered job
            applications that actually land interviews.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://app.applysauce.com"
              className="rounded-xl bg-brand px-8 py-3.5 font-semibold text-black transition hover:bg-brand-dark"
            >
              Join the Waitlist
            </a>
            <a
              href="#features"
              className="rounded-xl border border-white/20 px-8 py-3.5 font-semibold transition hover:bg-white/5"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* ───── FOOTER ───── */}
      <footer className="border-t border-white/5 px-6 py-16 sm:px-10 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:justify-between">
          {/* brand col */}
          <div className="max-w-xs space-y-4">
            <Image
              src="/logo.png"
              alt="ApplySauce"
              width={200}
              height={60}
              className="h-auto w-48"
            />
            <p className="text-sm leading-relaxed text-white/50">
              AI-powered job search automation. From discovery to offer,
              ApplySauce has your back.
            </p>
          </div>

          {/* link columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="mb-3 text-sm font-semibold">{heading}</h4>
                <ul className="space-y-2">
                  {links.map((l) => (
                    <li key={l}>
                      <span className="cursor-default text-sm text-white/40 transition hover:text-white/70">
                        {l}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/5 pt-6 text-center text-xs text-white/30">
          &copy; {new Date().getFullYear()} ApplySauce. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

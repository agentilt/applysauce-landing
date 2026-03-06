import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ApplySauce — AI-Powered Job Search Automation",
  description:
    "From Indeed discovery and ATS scoring to tailored CVs, cover letters, and interview prep. Land your dream job, faster.",
  openGraph: {
    title: "ApplySauce — Land Your Dream Job, Faster",
    description:
      "AI-powered job search automation: discovery, scoring, tailored materials, and interview prep.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Instrument+Serif:ital@0;1&family=Outfit:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-white antialiased font-sans">{children}</body>
    </html>
  );
}

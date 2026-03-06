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
      <body className="bg-bg text-white antialiased">{children}</body>
    </html>
  );
}

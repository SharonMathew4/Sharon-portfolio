import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sharon P Mathew | Computer Science Engineer & Web Developer",
  description:
    "Portfolio of Sharon P Mathew — B.Tech Computer Science graduate, web developer, and tech enthusiast. Specializing in modern web applications, React, Next.js, and scalable technology solutions.",
  keywords: [
    "Sharon P Mathew",
    "Web Developer",
    "Computer Science Engineer",
    "React Developer",
    "Next.js",
    "Portfolio",
    "Full Stack Developer",
  ],
  authors: [{ name: "Sharon P Mathew" }],
  openGraph: {
    title: "Sharon P Mathew | Computer Science Engineer & Web Developer",
    description:
      "Portfolio of Sharon P Mathew — B.Tech Computer Science graduate, web developer, and tech enthusiast.",
    type: "website",
    locale: "en_US",
    siteName: "Sharon P Mathew Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharon P Mathew | Computer Science Engineer & Web Developer",
    description:
      "Portfolio of Sharon P Mathew — B.Tech Computer Science graduate, web developer, and tech enthusiast.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-text">{children}</body>
    </html>
  );
}

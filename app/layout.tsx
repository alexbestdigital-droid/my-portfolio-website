import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Best Digital | AI Educator & YouTube Creator",
  description:
    "Alex Turanzyomwe — AI educator, YouTube creator, and founder of Alex Best Digital. Helping creators worldwide build profitable faceless YouTube channels using AI, from Uganda to the globe.",
  keywords: [
    "Alex Best Digital",
    "AI Educator",
    "Faceless YouTube",
    "AI Tools",
    "Uganda",
    "YouTube Academy",
  ],
  openGraph: {
    title: "Alex Best Digital | AI Educator & YouTube Creator",
    description:
      "Helping creators worldwide build profitable faceless YouTube channels using AI — from Uganda to the globe.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="font-sans bg-charcoal text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}

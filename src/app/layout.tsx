import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jing Gong - Frontend Engineer",
  description: "Portfolio website showcasing 15+ years of frontend engineering experience, projects, and skills.",
  keywords: ["Frontend Engineer", "React", "TypeScript", "UI/UX", "Web Development"],
  authors: [{ name: "Jing Gong" }],
  openGraph: {
    title: "Jing Gong - Frontend Engineer",
    description: "Portfolio website showcasing 15+ years of frontend engineering experience",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50`}>
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jing Gong - Senior Frontend Engineer",
  description: "Portfolio website showcasing 15+ years of frontend engineering experience, projects, and skills. Specializing in React, TypeScript, and modern web development.",
  keywords: ["Frontend Engineer", "React", "TypeScript", "UI/UX", "Web Development", "JavaScript", "Software Engineer"],
  authors: [{ name: "Jing Gong" }],
  openGraph: {
    title: "Jing Gong - Senior Frontend Engineer",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} bg-gray-50 antialiased`}>
        {/* Scroll Progress Bar */}
        <ScrollProgress />
        
        {/* Skip Links for Accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50 font-medium"
        >
          Skip to main content
        </a>
        
        <Navigation />
        
        <main id="main-content">
          {children}
        </main>

        {/* Back to Top Button */}
        <BackToTop />

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400">
                  © {new Date().getFullYear()} Jing Gong. All rights reserved.
                </p>
              </div>
              <div className="flex gap-6">
                <a
                  href="https://github.com/jinggong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/javascriptguru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:leogong99@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

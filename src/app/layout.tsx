import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";

const archivo = Archivo({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-archivo',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

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
      <body className={`${archivo.variable} ${spaceGrotesk.variable} font-sans antialiased`} style={{ background: 'var(--page-bg)' }}>
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
        <footer
          className="relative py-10 px-4 sm:px-6 lg:px-8"
          style={{ borderTop: '1px solid var(--divider)' }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'var(--top-line)' }}
          />
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-mono text-xs text-slate-400 dark:text-zinc-700">
              © {new Date().getFullYear()} Jing Gong. All rights reserved.
            </p>
            <div className="flex gap-6">
              {[
                { href: 'https://github.com/jinggong', label: 'GitHub' },
                { href: 'https://linkedin.com/in/javascriptguru', label: 'LinkedIn' },
                { href: 'mailto:leogong99@gmail.com', label: 'Email' },
              ].map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-slate-400 dark:text-zinc-600 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 font-mono text-xs"
                  aria-label={label}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

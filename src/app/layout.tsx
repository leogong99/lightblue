import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeWrapper from "./components/ThemeWrapper";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=VT323&family=Söhne:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} bg-gray-50 theme-body`}>
        <ThemeProvider>
          <ThemeWrapper>
            {/* Skip Links for Accessibility */}
            <a 
              href="#main-content" 
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
            >
              Skip to main content
            </a>
            <a 
              href="#navigation" 
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-32 bg-blue-600 text-white px-4 py-2 rounded z-50"
            >
              Skip to navigation
            </a>
            <Navigation />
            <main id="main-content" className="pt-16">
              {children}
            </main>
          </ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}

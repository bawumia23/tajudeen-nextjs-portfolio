import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeProvider from "./components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://tajudeen-nextjs-portfolio.vercel.app"
  ),

  title: {
    default: "Tajudeen Bawumia | Full Stack Developer",
    template: "%s | Tajudeen Bawumia",
  },

  description:
    "Explore the portfolio of Tajudeen Bawumia, an aspiring full stack developer building web applications and backend systems with Python, JavaScript, React, Next.js, TypeScript and MySQL.",

  applicationName: "Tajudeen Bawumia Portfolio",

  authors: [
    {
      name: "Adamu Tajudeen Bawumia",
    },
  ],

  creator: "Adamu Tajudeen Bawumia",

  verification: {
    google: "lfk1GSymPe8FhFiAZZL7PqGBRXkx41aMN8rnWDvoeto",
  },

  openGraph: {
    type: "website",
    locale: "en_GH",
    siteName: "Tajudeen Bawumia Portfolio",
    title: "Tajudeen Bawumia | Full Stack Developer",
    description:
      "Discover my software engineering journey, frontend applications, Python backend projects and development experience.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tajudeen Bawumia | Full Stack Developer",
    description:
      "Explore my software projects, technical skills and journey into full stack development.",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <Navbar />

          <div className="flex-1">
            {children}
          </div>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Faizan Mushtaq — Data Scientist & ML Engineer",
  description:
    "Portfolio of Faizan Mushtaq, a Data Scientist and Machine Learning Engineer building intelligent systems that transform data into real-world impact.",
  keywords: ["Data Scientist", "Machine Learning Engineer", "AI", "Python", "Portfolio"],
  authors: [{ name: "Faizan Mushtaq" }],
  openGraph: {
    title: "Faizan Mushtaq — Data Scientist & ML Engineer",
    description: "Building intelligent systems that transform data into real-world impact.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

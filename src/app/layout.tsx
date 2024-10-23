import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const gugi = localFont({
  src: "./fonts/Gugi-Regular.woff",
  variable: "--font-gugi",
  weight: "400",
  preload: true,
  fallback: ["sans-serif"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  fallback: ["sans-serif"],
  preload: true,
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Harrsh Patel | Senior Full Stack Developer",
  description:
    "Senior full-stack developer with expertise in Node.js, React, and AWS. Specializing in scalable web apps, database optimization, and clean code.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${gugi.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DotsBackground from "../components/DotsBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kishor Kumar Shriwas | Full-Stack & IT Operations",
  description: "Digital portfolio of Kishor Kumar Shriwas. Bridging the gap between robust software development, enterprise IT operations, and digital media.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0A192F] text-gray-300">
        
        {/* Naya animation background jo stars drop karega aur smart arrow dikhayega */}
        <DotsBackground />
        
        {/* Baaki ka portfolio content */}
        {children}
        
      </body>
    </html>
  );
}
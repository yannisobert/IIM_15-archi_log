import type React from "react"
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css"
import Footer from "@/components/layout/footer";
import { Inter } from "next/font/google"

export const metadata = {
    title: "PeeMap - Track Your Bathroom Breaks",
    description: "Track, log, and remember your bathroom visits with this fun and practical app.",
    // manifest: "/manifest.json",
    // themeColor: "#7c3aed",
    viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    appleWebApp: {
        capable: true,
        statusBarStyle: "default",
        title: "PeeMap",
    },
}


const inter = Inter({ subsets: ["latin"] })

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head/>
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}

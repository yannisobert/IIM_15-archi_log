'use client'

// Sections
import HeaderLanding from "@/components/landing/HeaderLanding";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Privacy from "@/components/landing/Privacy";
import TryIt from "@/components/landing/TryIt";


export default function Home() {
  return (
      <div className="flex min-h-screen flex-col">
        <HeaderLanding />
        <main className="flex-1">
          <Hero />

          <Features />

          <HowItWorks />

          <Privacy />

          <TryIt />
        </main>
      </div>
  );
}

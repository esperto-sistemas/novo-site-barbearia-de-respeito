"use client";

import AppPresentation from "@/components/app-presentation";
import Comparison from "@/components/comparison";
import DetailedFeatures from "@/components/detailed-features";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import FinalCTA from "@/components/final-cta";
import FloatingButtons from "@/components/floating-buttons";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Pricing from "@/components/pricing";
import Problems from "@/components/problems";
import Testimonials from "@/components/testimonials";
import { usePostHog } from "posthog-js/react";
import { useEffect } from "react";

export default function Home() {
  const posthog = usePostHog();

  useEffect(() => {
    // Verificar se o PostHog está disponível
    if (!posthog) {
      console.log("PostHog not available yet");
      return;
    }

    console.log("PostHog instance:", posthog);

    // Definir no localStorage
    localStorage.setItem("site_version", "B");

    // Aguardar um pouco para garantir que o PostHog está totalmente inicializado
    const timer = setTimeout(() => {
      try {
        // Registrar a propriedade no PostHog
        posthog.register({
          site_version: "B",
        });

        console.log(
          "PostHog properties:",
          posthog.get_property("site_version")
        );
      } catch (error) {
        console.error("Error registering site_version in PostHog:", error);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [posthog]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <Hero />
      <Problems />
      <AppPresentation />
      <Features />
      <Testimonials />
      <HowItWorks />
      <Comparison />
      <DetailedFeatures />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

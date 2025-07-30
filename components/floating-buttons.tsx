"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { whatsappLink } from "@/utils";

export default function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        className="fixed bottom-5 right-5 w-16 h-16 bg-white hover:bg-green-100 text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-50"
      >
        <img src="/whatsapp-icon.png" alt="WhatsApp" className="h-12 w-12" />
        <span className="sr-only">WhatsApp</span>
      </a>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-24 w-12 h-12 bg-gray-800/80 hover:bg-primary-color text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:-translate-y-1 z-50"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}

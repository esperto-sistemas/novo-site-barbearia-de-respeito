"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import TermosDeUsoScreen from "@/components/screen/TermosDeUso/TermosDeUso";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermosDeUsoPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <div className="container mx-auto px-4 py-16">
        <Link
          href="/"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para o início
        </Link>

        <TermosDeUsoScreen />
      </div>

      <Footer />
    </div>
  );
}

"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src="/logo.png" alt="Barberia de Respeito" className="h-10" />
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#inicio"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Início
            </a>
            <a
              href="#funcionalidades"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Funcionalidades
            </a>
            <a
              href="#planos"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Planos
            </a>
            <a
              href="#sobre"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Sobre nós
            </a>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                window.location.href =
                  "https://sistema.barbeariaderespeito.com.br/";
              }}
            >
              Entrar
            </Button>
          </nav>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              <a
                href="#inicio"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Início
              </a>
              <a
                href="#funcionalidades"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Funcionalidades
              </a>
              <a
                href="#planos"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Planos
              </a>
              <a
                href="#sobre"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Sobre nós
              </a>
              <a
                href="https://sistema.barbeariaderespeito.com.br/"
                className="flex flex-col space-y-2 pt-4"
              >
                <Button
                  onClick={() => {
                    window.location.href =
                      "https://sistema.barbeariaderespeito.com.br/";
                  }}
                  variant="outline"
                  size="sm"
                >
                  Entrar
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

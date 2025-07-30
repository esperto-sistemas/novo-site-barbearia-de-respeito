import { whatsappLink } from "@/utils";
import {
  Facebook,
  Instagram,
  Mail,
  MessageCircle,
  Phone,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer id="sobre" className="bg-gray-900 border-t border-gray-800 pt-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img
                src="/logo.png"
                alt="Barberia de Respeito"
                className="h-10 mb-4"
              />
            </div>
            <p className="text-gray-300 mb-8 max-w-2xl">
              O Barberia de Respeito é uma plataforma especializada em gestão de
              barbearias, desenvolvida por quem entende as necessidades reais do
              setor. Nossa missão é ajudar barbearias de todos os tamanhos a
              crescerem com tecnologia acessível e eficiente.
            </p>
          </div>

          <div>
            <div className="mb-8">
              <h4 className="font-semibold text-white mb-4">Siga-nos</h4>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/barbeariaderespeito"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-color transition-all"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://facebook.com/barbeariaderespeito"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-color transition-all"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://youtube.com/barbeariaderespeito"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-color transition-all"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contato</h4>
              <div className="space-y-3">
                <a className="flex items-center">
                  <Mail className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">
                    contato@barberiaderespeito.com.br
                  </span>
                </a>
                <a className="flex items-center" href="tel:+5554994023003">
                  <Phone className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">(54) 9940 23003</span>
                </a>
                <a
                  className="flex items-center"
                  referrerPolicy="no-referrer"
                  target="_blank"
                  href={whatsappLink}
                >
                  <MessageCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6 text-sm">
              <a
                href="https://www.barbeariaderespeito.com.br/termos-de-uso"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Termos de uso
              </a>
              <a
                href="https://www.barbeariaderespeito.com.br/politicas-de-privacidade"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Política de privacidade
              </a>
            </div>
            <p className="text-sm text-gray-400">
              © 2025 Barberia de Respeito - Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

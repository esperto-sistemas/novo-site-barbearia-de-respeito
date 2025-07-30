import { CheckCircle, TrendingUp, MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/utils";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="pt-20 pb-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-color/10 via-transparent to-blue-500/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-color/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-color/50 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-500/50 rounded-full animate-ping delay-500"></div>
      <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-primary-color/50 rounded-full animate-ping delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Coluna de texto - ocupa 7 colunas no desktop */}
          <div className="lg:col-span-7 max-w-2xl animate-in fade-in-50 slide-in-from-left-10 duration-1000">
            {/* Badge de credibilidade */}
            <div className="inline-flex items-center gap-2 bg-primary-color/10 text-primary-color px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary-color/20 backdrop-blur-sm hover:bg-primary-color/20 transition-all duration-300">
              <CheckCircle className="w-4 h-4" />
              Usado por +500 barbearias
              <div className="flex ml-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="block">Lote sua agenda e</span>
              <span className="bg-clip-text text-blue-500">
                pare de perder clientes
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Barbeiros aumentam até{" "}
              <span className="text-blue-500/90 font-bold bg-primary-color/10 px-2 py-1 rounded">
                30%
              </span>{" "}
              o faturamento e reduzem{" "}
              <span className="text-green-500 font-bold bg-green-500/10 px-2 py-1 rounded">
                70%
              </span>{" "}
              das faltas com nosso sistema de gestão.
            </p>

            {/* Lista de benefícios */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                { icon: "📅", text: "Agenda online 24h" },
                { icon: "🔔", text: "Lembretes automáticos" },
                { icon: "💰", text: "Controle financeiro" },
                { icon: "📊", text: "Relatórios detalhados" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-300 bg-gray-800/50 px-4 py-3 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-primary-color/50 transition-all duration-300"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-primary-color hover:bg-primary-color/90 text-white px-8 py-4 font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  window.location.href = "/#planos";
                }}
              >
                Contratar agora
              </Button>
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-500/90 text-white px-8 py-4 font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                onClick={() => {
                  window.location.href = whatsappLink;
                }}
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>+1.200 agendamentos hoje</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>98% de satisfação</span>
              </div>
            </div>
          </div>

          {/* Coluna do iPhone - ocupa 5 colunas no desktop */}
          <div className="lg:col-span-5 relative order-first lg:order-last animate-in fade-in-50 slide-in-from-right-10 duration-1000 delay-300">
            {/* Efeito de brilho atrás da imagem */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-color/20 to-blue-500/10 blur-2xl transform rotate-3 animate-pulse"></div>

            {/* Container para a imagem do iPhone */}
            <div className="relative flex justify-center">
              <img
                src="/iphone.png"
                alt="Sistema de gestão para barbearia"
                className="w-64 sm:w-72 lg:w-80 h-auto relative z-10 shadow-2xl drop-shadow-2xl max-w-none hover:scale-105 transition-transform duration-700"
                style={{
                  filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))",
                }}
              />
            </div>

            {/* Card flutuante com métrica principal */}
            <div className="absolute top-8 -left-4 lg:-left-8 bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-xl p-4 shadow-xl z-20 animate-in fade-in-50 slide-in-from-left-10 duration-1000 delay-500 hover:scale-105 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-color/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary-color animate-pulse" />
                </div>
                <div>
                  <p className="text-primary-color font-bold text-xl">+30%</p>
                  <p className="text-gray-400 text-sm">Faturamento</p>
                </div>
              </div>
            </div>

            {/* Card flutuante adicional */}
            <div className="absolute bottom-8 -right-4 lg:-right-8 bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-xl p-4 shadow-xl z-20 animate-in fade-in-50 slide-in-from-right-10 duration-1000 delay-700 hover:scale-105 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-500 animate-pulse" />
                </div>
                <div>
                  <p className="text-green-500 font-bold text-xl">-70%</p>
                  <p className="text-gray-400 text-sm">Faltas</p>
                </div>
              </div>
            </div>

            {/* Card adicional - Reviews */}
            <div className="absolute top-1/2 -right-2 lg:-right-6 bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-xl p-3 shadow-xl z-20 animate-in fade-in-50 slide-in-from-right-10 duration-1000 delay-1000 hover:scale-105 transition-all">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-white text-sm font-medium">4.9</span>
              </div>
              <p className="text-gray-400 text-xs mt-1">+500 reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Star } from "lucide-react";

export default function AppPresentation() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              O aplicativo completo para gestão da sua barbearia
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              O Barberia de Respeito é um aplicativo especializado que
              automatiza agendamentos, envia lembretes para reduzir faltas,
              controla finanças e ajuda a fidelizar clientes. Tudo isso com uma
              interface simples, feita para barbeiros que querem focar no que
              fazem de melhor.
            </p>

            <div className="mb-8">
              <p className="text-gray-300 mb-4">
                Disponível para iOS e Android, com versão web completa para
                gestão no computador
              </p>
              <div className="flex gap-4">
                <a
                  href="https://apps.apple.com/br/app/barbearia-de-respeito/id1614277912"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/app-store-badge.svg"
                    alt="App Store"
                    className="h-12 cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=br.com.espertosistemas.barbeariaderespeito"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/google-play-badge.svg"
                    alt="Google Play"
                    className="h-12 cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </a>
                <a
                  href="https://sistema.barbeariaderespeito.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/navigator-badge.svg"
                    alt="Navegador"
                    className="h-12 cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="text-gray-300">
                Avaliado em 4.8/5 por barbeiros reais
              </span>
            </div>
          </div>

          <div className="relative overflow-hidden flex items-center">
            <img
              src="/celular.png"
              alt="App Barberia de Respeito"
              className="h-full scale-140"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

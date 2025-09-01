import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-green-500/10"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Pronto para organizar e crescer sua barbearia?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
          Junte-se a centenas de barbeiros que já simplificaram sua rotina e
          aumentaram seus lucros com a nossa plataforma.
        </p>

        <div className="mb-8">
          <Button
            variant={"outline"}
            onClick={() => {
              window.location.href = "/#planos";
            }}
          >
            Comece hoje mesmo e leve sua barbearia para o próximo nível.
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm">
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            <span>Sem complicação</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            <span>Suporte completo</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            <span>Resultado desde o primeiro mês</span>
          </div>
        </div>
      </div>
    </section>
  );
}

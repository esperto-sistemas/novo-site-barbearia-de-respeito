import { UserPlus, Settings, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: 1,
    icon: UserPlus,
    title: "Cadastre-se",
    description:
      "Crie sua conta em menos de 2 minutos e comece a usar o aplicativo imediatamente.",
  },
  {
    number: 2,
    icon: Settings,
    title: "Configure sua barbearia em minutos",
    description:
      "Adicione serviços, preços, horários de funcionamento e sua equipe de barbeiros. Nossa equipe está disponível para ajudar.",
  },
  {
    number: 3,
    icon: Calendar,
    title: "Comece a receber agendamentos online",
    description:
      "Compartilhe seu link personalizado nas redes sociais e veja os agendamentos chegarem automaticamente.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-12">
          Comece a transformar sua barbearia em 3 passos simples
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12 relative">
          {/* Connection line for desktop */}
          <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-0.5 bg-gray-600"></div>

          {steps.map((step, index) => (
            <div key={index} className="text-center relative z-10">
              <div className="w-20 h-20 bg-primary-color text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 text-white">
                {step.number}
              </div>
              <step.icon className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant={"outline"}
            size="lg"
            onClick={() => {
              window.location.href = "/#planos";
            }}
          >
            Começar agora
          </Button>
        </div>
      </div>
    </section>
  );
}

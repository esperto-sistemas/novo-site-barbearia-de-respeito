import {
  CalendarCheck,
  Bell,
  TrendingUp,
  Award,
  Megaphone,
  PieChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: CalendarCheck,
    title: "Agendamento online 24/7",
    description:
      "Seus clientes podem marcar horários a qualquer momento, mesmo quando você está ocupado atendendo ou fora do expediente. Agenda sempre atualizada e sem conflitos de horários.",
  },
  {
    icon: Bell,
    title: "Sistema anti-faltas",
    description:
      "Reduza em até 70% as faltas com confirmações automáticas por WhatsApp, lembretes personalizados e histórico de clientes que costumam faltar.",
  },
  {
    icon: TrendingUp,
    title: "Gestão financeira completa",
    description:
      "Controle de caixa, divisão automática de comissões, relatórios de faturamento e integração com sistemas de pagamento. Saiba exatamente quanto sua barbearia está lucrando.",
  },
  {
    icon: PieChart,
    title: "Relatórios e análises",
    description:
      "Dados em tempo real sobre serviços mais vendidos, desempenho de barbeiros e comportamento dos clientes. Tome decisões baseadas em informações reais.",
  },
];

export default function Features() {
  return (
    <section id="funcionalidades" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-12">
          Tudo o que você precisa em um só lugar
        </h2>

        <div className="grid md:grid-cols2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-700/50 p-6 rounded-lg hover:bg-gray-700/70 transition-all hover:-translate-y-1"
            >
              <feature.icon className="h-12 w-12 text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

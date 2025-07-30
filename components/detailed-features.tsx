import { Calendar, DollarSign, Chrome, BarChart } from "lucide-react";

const featureCategories = [
  {
    icon: Calendar,
    title: "Agendamento e gestão de clientes",
    features: [
      "Agenda online sincronizada para todos os barbeiros",
      "Perfil completo de clientes com histórico de serviços",
      "Lembretes automáticos",
      "Confirmação de presença com um clique",
      "Reagendamento simplificado",
      "Bloqueio de horários para intervalos e eventos",
    ],
  },
  {
    icon: DollarSign,
    title: "Controle financeiro",
    features: [
      "Registro automático de pagamentos",
      "Divisão de comissões por barbeiro",
      "Controle de despesas e receitas",
      "Relatórios de faturamento diário, semanal e mensal",
      "Integração com sistemas de pagamento (Clube de Assinaturas)",
    ],
  },
  {
    icon: Chrome,
    title: "Link para clientes",
    features: [
      "Link de agendamento personalizado",
      "Página de agendamento responsiva",
      "Compartilhamento fácil via WhatsApp e redes sociais",
      "Pagamento direto pelo link (Clube de assinaturas)",
      "Agendamento sem necessidade de baixar o app",
    ],
  },
  {
    icon: BarChart,
    title: "Relatórios e análises",
    features: [
      "Dashboard com indicadores principais",
      "Análise de desempenho por barbeiro",
      "Taxa de ocupação da agenda",
      "Serviços mais vendidos e rentáveis",
      "Taxa de retorno de clientes",
    ],
  },
];

export default function DetailedFeatures() {
  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-12">
          Tudo o que nossa plataforma oferece
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {featureCategories.map((category, index) => (
            <div key={index} className="bg-gray-700/50 p-6 rounded-lg">
              <div className="flex items-center mb-6">
                <category.icon className="h-8 w-8 text-primary-color mr-3" />
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {category.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="text-primary-color mr-3 mt-1">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

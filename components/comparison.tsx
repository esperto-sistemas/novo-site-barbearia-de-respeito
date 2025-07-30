import { Check, X, AlertTriangle } from "lucide-react";

const comparisonData = [
  {
    criteria: "Agendamento online",
    traditional: {
      icon: X,
      text: "Apenas telefone ou WhatsApp",
      color: "text-red-500",
    },
    generic: {
      icon: Check,
      text: "Disponível, mas genérico",
      color: "text-green-500",
    },
    ours: {
      icon: Check,
      text: "Específico para barbearias com serviços pré-configurados",
      color: "text-green-500",
    },
  },
  {
    criteria: "Redução de faltas",
    traditional: {
      icon: X,
      text: "Sem sistema automático",
      color: "text-red-500",
    },
    generic: {
      icon: Check,
      text: "Lembretes básicos",
      color: "text-green-500",
    },
    ours: {
      icon: Check,
      text: "Sistema completo anti-faltas com confirmação e histórico",
      color: "text-green-500",
    },
  },
  {
    criteria: "Controle financeiro",
    traditional: {
      icon: X,
      text: "Manual, sujeito a erros",
      color: "text-red-500",
    },
    generic: { icon: Check, text: "Básico", color: "text-green-500" },
    ours: {
      icon: Check,
      text: "Completo com divisão de comissões para barbeiros",
      color: "text-green-500",
    },
  },
  {
    criteria: "Facilidade de uso",
    traditional: {
      icon: AlertTriangle,
      text: "Depende da organização",
      color: "text-yellow-500",
    },
    generic: {
      icon: AlertTriangle,
      text: "Complexo, muitas funções desnecessárias",
      color: "text-yellow-500",
    },
    ours: {
      icon: Check,
      text: "Interface simples e intuitiva, feita para barbeiros",
      color: "text-green-500",
    },
  },
  {
    criteria: "Suporte técnico",
    traditional: { icon: X, text: "Inexistente", color: "text-red-500" },
    generic: {
      icon: AlertTriangle,
      text: "Genérico, filas de espera",
      color: "text-yellow-500",
    },
    ours: {
      icon: Check,
      text: "Especializado em barbearias, resposta em até 2 horas",
      color: "text-green-500",
    },
  },
];

export default function Comparison() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-12">
          Por que escolher nossa plataforma?
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-700">
                <th className="p-4 text-left text-white font-semibold">
                  Critério
                </th>
                <th className="p-4 text-left text-white font-semibold">
                  Métodos Tradicionais
                </th>
                <th className="p-4 text-left text-white font-semibold">
                  Plataformas Genéricas
                </th>
                <th className="p-4 text-left text-white font-semibold bg-green-500/50">
                  Nossa Plataforma Especializada
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="border-b border-gray-700">
                  <td className="p-4 font-semibold text-white">
                    {row.criteria}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <row.traditional.icon
                        className={`h-5 w-5 ${row.traditional.color}`}
                      />
                      <span className="text-gray-300">
                        {row.traditional.text}
                      </span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <row.generic.icon
                        className={`h-5 w-5 ${row.generic.color}`}
                      />
                      <span className="text-gray-300">{row.generic.text}</span>
                    </div>
                  </td>
                  <td className="p-4 bg-green-500/10">
                    <div className="flex items-center gap-2">
                      <row.ours.icon className={`h-5 w-5 ${row.ours.color}`} />
                      <span className="text-gray-300">{row.ours.text}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

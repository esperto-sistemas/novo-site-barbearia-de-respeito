import { CalendarX, UserX, FileText, Users } from "lucide-react";

const problems = [
  {
    icon: CalendarX,
    title: "Agendas desorganizadas",
    description:
      "Horários sobrepostos, confusão entre barbeiros e perda de clientes por falta de organização",
  },
  {
    icon: UserX,
    title: "Clientes que não aparecem",
    description:
      "Faltas sem aviso que geram prejuízo e tempo ocioso para sua equipe",
  },
  {
    icon: FileText,
    title: "Controle financeiro manual",
    description:
      "Anotações em papel, contas imprecisas e dificuldade para calcular comissões",
  },
  {
    icon: Users,
    title: "Dificuldade para fidelizar",
    description:
      "Clientes que experimentam uma vez e não retornam por falta de relacionamento",
  },
];

export default function Problems() {
  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-12">
          Chega de perder tempo e dinheiro com:
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-gray-700/50 p-6 rounded-lg hover:bg-gray-700/70 transition-colors"
            >
              <problem.icon className="h-12 w-12 text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-300">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white relative inline-block">
            Nossa plataforma resolve tudo isso com tecnologia especializada para
            barbearias
          </h2>
        </div>
      </div>
    </section>
  );
}

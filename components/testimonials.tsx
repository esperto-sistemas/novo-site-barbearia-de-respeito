"use client";

import { useRef } from "react";

const testimonials = [
  {
    text: "Com o app gerenciar meu negócio ficou mais fácil. O app é fácil de usar e agendar compromissos é rápido. Os lembretes automáticos reduzem cancelamentos e o histórico de cortes ajuda a personalizar atendimentos.",
    business: "Everton Barber Shop",
  },
  {
    business: "Barbearia Marau",
    text: `Os links de agenda são a melhor parte. Meus clientes agendam horários sem me enviar
    mensagens ou ligar e sem precisar baixar nada, assim eu posso focar nos atendimentos. Também posso fechar
     a agenda quando preciso.`,
  },
  {
    business: "DS Barbearia",
    text: `É fácil de usar e o sistema de controle de caixa é incrível! Me ajuda a manter o controle do dinheiro
    que entra e sai da minha barbearia, sem precisar me preocupar com a papelada. Estou muito satisfeito com a
    solução!`,
  },
  {
    business: "Be Happy Barber Shop",
    text: `Curti porque não exige que meus clientes baixem nenhum aplicativo. Eles só acessam o link de
    agendamento e fazem suas reservas sem nenhuma dificuldade. O sistema funciona muito bem!`,
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-12">
          O que dizem os barbeiros que já transformaram seus negócios
        </h2>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-6 rounded-lg min-w-[350px] max-w-[400px] flex-shrink-0 hover:bg-gray-800/70 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div>
                  <h3 className="text-gray-400">{testimonial.business}</h3>
                </div>
              </div>

              <p className="text-gray-300 mb-4 italic relative">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

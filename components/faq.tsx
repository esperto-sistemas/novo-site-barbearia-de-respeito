"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/utils";

const faqs = [
  {
    question: "Para a barbearia, o uso é através de um aplicativo?",
    answer: `Se o uso for feito através de um celular, o barbeiro instala o app Barbearia
      de Respeito na loja de aplicativo do seu telefone. Se o uso for através de um computador, será via navegador.`,
  },
  {
    question: "O cliente precisa baixar um aplicativo?",
    answer: `Não é necessário que o cliente baixe qualquer aplicativo. 
    Forneceremos um link onde ele terá acesso à agenda dos barbeiros, 
    contendo os serviços oferecidos e seus respectivos valores.`,
  },
  {
    question: "Como posso utilizar o link da agenda da barbearia?",
    answer: `O link poderá ser disponibilizado em suas redes sociais e como resposta automática em seu WhatsApp
    Business.`,
  },
  {
    question: "Quantos barbeiros posso cadastrar no aplicativo?",
    answer: `Quantos você quiser, o cadastro é ilimitado.`,
  },
  {
    question: "Preciso ter um CNPJ para usar o app?",
    answer: `Não. Além de CNPJ, aceitamos pessoa física.`,
  },
  {
    question: "O aplicativo avisa os clientes sobre os horários agendados?",
    answer: `Os avisos são enviados com antecedência de 24 horas, 12 horas e 1 hora antes do agendamento.`,
  },
  {
    question: "Posso bloquear horários ou dias que não posso atender?",
    answer: `Sim, você terá a opção de bloquear horários e dias nos quais não poderá atender. 
    Para o cliente, a agenda estará indisponível nessas datas e horários selecionados..`,
  },
  {
    question: "O aplicativo tem funções para controle financeiro?",
    answer: `Sim, tem controle de entrada e saída de valores, contas pagas e gera extratos diários, semanais, mensais
    ou durante o período que desejar.`,
  },
  {
    question: "Qual a política de reajuste dos valores?",
    answer: `Uma vez contratado o plano semestral ou anual, os valores permanecerão inalterados até
     a conclusão do período. Os reajustes são calculados anualmente, sempre no mês de janeiro,
      com base na variação do dólar e no IPCA. Por exemplo, em 2023 não houve aumento. 
      No máximo, os valores dos reajustes poderão se aproximar do valor da inflação.`,
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-12">
          Dúvidas frequentes
        </h2>

        <div className="max-w-4xl mx-auto mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700 mb-4">
              <button
                className="w-full flex justify-between items-center py-4 text-left"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <Minus className="h-5 w-5 text-green-500 flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-green-500 flex-shrink-0" />
                )}
              </button>

              {openItems.includes(index) && (
                <div className="pb-4">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-300 mb-4">Ainda tem dúvidas?</p>
          <Button
            onClick={() => {
              window.location.href = whatsappLink;
            }}
            variant="outline"
          >
            Fale conosco
          </Button>
        </div>
      </div>
    </section>
  );
}

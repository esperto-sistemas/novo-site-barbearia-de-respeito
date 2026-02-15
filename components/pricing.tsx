"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Plano Mensal",
    price: "29",
    cents: "90",
    period: "/mês*",
    features: [
      "Todas as funcionalidades essenciais",
      "Suporte prioritário por chat, e-mail e WhatsApp",
    ],
    buttonText: "Contratar",
    info: "*No primeiro mês no cartão de crédito ou PIX. Após R$ 76,90 por mês",
    url: "https://contrate.barbeariaderespeito.com.br/checkout/2?version=B",
  },
  {
    name: "Plano Anual",
    price: "59",
    cents: "58",
    period: "/mês",
    save: "R$ 715,00 à vista (economia de 18,4%)",
    badge: "MAIS VANTAJOSO",
    features: [
      "Todas as funcionalidades essenciais",
      "Suporte prioritário por chat, e-mail e WhatsApp",
    ],
    buttonText: "Contratar",
    buttonVariant: "outline" as const,
    featured: true,
    url: "https://contrate.barbeariaderespeito.com.br/checkout/4?version=B",
  },
];

export default function Pricing() {
  return (
    <section id="planos" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-12">
          Escolha o plano ideal para sua barbearia
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center p-4 pr-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-gray-800/50 p-6 rounded-lg relative transition-all hover:-translate-y-1 ${
                plan.featured ? "border-2 border-green-500 scale-105" : ""
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-3 py-1 rounded text-xs font-bold">
                  {plan.badge}
                </div>
              )}

              <div className="text-center mb-6 pb-6 border-b border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {plan.name}
                </h3>

                {plan.price === "Personalizado" ? (
                  <div className="text-2xl font-bold text-white">
                    {plan.price}
                  </div>
                ) : (
                  <div className="flex items-baseline justify-center">
                    <span className="text-2xl">R$</span>
                    <span className="text-5xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-2xl">,{plan.cents}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                )}

                {plan.save && (
                  <p className="text-sm text-green-400 mt-2">{plan.save}</p>
                )}
                {plan.info && <p className="text-xs mt-2">{plan.info}</p>}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={"w-full"}
                variant={plan.buttonVariant}
                onClick={() => {
                  window.location.href = plan.url;
                }}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

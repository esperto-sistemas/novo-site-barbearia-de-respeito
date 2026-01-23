import { politicasStatic } from "./PoliticasDePrivacidade.static";

export default function PoliticasDePrivacidade() {
  return (
    <div className="flex flex-col bg-[#0a0a0a] text-white p-8 md:p-16 gap-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Políticas de Privacidade
      </h2>
      <div className="flex flex-col gap-8">
        {politicasStatic?.map((termo, index) => {
          return (
            <p className="text-justify text-gray-300" key={index}>
              {termo}
            </p>
          );
        })}
      </div>
    </div>
  );
}

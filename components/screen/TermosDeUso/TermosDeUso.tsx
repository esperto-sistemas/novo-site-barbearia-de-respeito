import { termosStatic } from "./TermosDeUso.static";

export default function TermosDeUso() {
  return (
    <div className="flex flex-col bg-[#0a0a0a] text-white p-8 md:p-16 gap-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Termos de Uso
      </h2>
      <div className="flex flex-col gap-8">
        {termosStatic?.map((termo, index) => {
          return (
            <p className="text-justify text-gray-300" key={index}>
              {termo}
            </p>
          );
        })}
      </div>
      <div className="flex flex-col gap-8 border-t border-gray-700 pt-8 mt-8">
        <div>
          <p className="font-semibold">
            VP TESTES, ANÁLISES TÉCNICAS E GERENCIAMENTO DE PROJETOS LTDA
          </p>
          <p className="font-semibold">INTERVENIENTES:</p>
        </div>
        <div>
          <p>EDUARDO DE BASTIANI MIOR</p>
          <p>CPF: 026.960.980-69</p>
        </div>
        <div>
          <p>ROGER MIGLIAVACA BRUSAMARELLO</p>
          <p>CPF: 016.050.820-74</p>
        </div>
      </div>
    </div>
  );
}

import { Button } from "@/components/atoms/Button";
import { useRouter } from "next/router";
// import { useId } from "react";

export default function Selos(): JSX.Element {
  const router = useRouter();
  //   const uuidCupom = useId();
  const handleBtnClick = (id: number): void => {
    router.push(`/dashboard/usuarios/${id}`);
  };
  return (
    <div className=" ml-6 flex flex-col justify-center items-center w-full ">
      <h2 className=" mt-6 ml-6 mb-4 text-2xl font-semibold">
        Gerenciar Selos
      </h2>
      <Button
        title="+ Novo Selo"
        status={true}
        className={[
          "flex items-center py-2 px-2 ml-6 mb-4 bg-[#8b00d1] text-white rounded hover:bg-[#8b0099]",
        ]}
        onClick={(): void => handleBtnClick(5)}
      />
      <div className="flex justify-around w-full">
        <table className="table-auto border-collapse text-center">
          <caption className="text-center text-bold text-red-600 mb-1">
            Selos Ocultados no App
          </caption>
          <thead className="border-collapse border border-slate-500">
            <tr>
              <th>Ordem</th>
              <th>Nome</th>
              <th>Séries</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <table className="table-auto border-collapse text-center">
          <caption className="text-center text-bold text-green-500  mb-1">
            Selos Ativos no App
          </caption>

          <thead className="border-collapse border border-slate-500">
            <tr>
              <th>Ordem</th>
              <th>Nome</th>
              <th>Séries</th>
              <th> Ordenar conteúdo</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}

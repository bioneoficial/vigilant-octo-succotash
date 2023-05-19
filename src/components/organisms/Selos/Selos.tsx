import { Button } from "@/components/atoms/Button";
import SelosContainer from "@/components/molecules/SelosContainer/SelosContainer";
import SelosItem from "@/components/molecules/SelosItem/SelosItem";
import { Stamps } from "@/types/types";
import { useRouter } from "next/router";
// import { useId } from "react";

export default function Selos(): JSX.Element {
  const selos: Stamps[] = [
    {
      id: 1,
      name: "Selo 1",
      desc: "Descrição do Selo 1",
      image: "/images/selos/AqueceCoracao.svg",
      active: 1,
      order: 1,
      order_by_serie: "name",
      featured: 0,
      created_at: "2021-10-01T00:00:00Z",
      updated_at: "2021-10-01T00:00:00Z",
      deleted_at: "",
      series_count: 3,
    },
    {
      id: 2,
      name: "Selo 2",
      desc: "Descrição do Selo 2",
      image: "/images/selos/BolaQuadrada.svg",
      active: 0,
      order: 2,
      order_by_serie: "created_at",
      featured: 1,
      created_at: "2021-10-02T00:00:00Z",
      updated_at: "2021-10-02T00:00:00Z",
      deleted_at: "",
      series_count: 5,
    },
  ];

  const router = useRouter();
  //   const uuidCupom = useId(); Iremos fazer fetch dos selos nesse menino aqui ou pelo menos ler ele.
  const handleBtnClick = (id: number): void => {
    router.push(`/dashboard/selos/${id}`);
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
        <table className="table-auto border border-slate-500 border-collapse text-center">
          <caption className="font-bold mb-2">Selos Ativos no App</caption>

          <thead className="border-collapse border border-slate-500 ">
            <tr>
              <th className="px-2">Ordem</th>
              <th className="px-2">Nome</th>
              <th className="px-2">Séries</th>
              <th className="px-2">Status</th>
              <th className="px-2">Ordenar</th>
            </tr>
          </thead>
          <tbody>
            <SelosItem Selos={selos} />
          </tbody>
        </table>
      </div>
      <div className="m-6 flex  justify-around items-center w-full text-center">
        <SelosContainer Selos={selos} />
      </div>
    </div>
  );
}

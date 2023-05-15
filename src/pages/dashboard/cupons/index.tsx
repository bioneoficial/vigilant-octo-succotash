import { Button } from "@/components/atoms/Button";
import { CouponItem } from "@/components/atoms/CoupounItem";
import { MainTemplate } from "@/components/templates/MainTemplate";
import { cuponsMock } from "@/utils/const";
import { useId } from "react";

export default function MyCouponsPage(): JSX.Element {
  const uuidCupom = useId();
  return (
    <MainTemplate>
      <h2 className=" mt-6 ml-6 mb-4 text-2xl font-semibold">Cupons</h2>
      <Button
        title="+ Novo Cupom"
        status={true}
        className={[
          "flex items-center py-2 px-2 ml-6 mb-4 bg-[#8b00d1] text-white rounded hover:bg-[#8b0099]",
        ]}
      />

      <div className=" ml-6 mx-auto flex flex-row justify-between items-start 0">
        <table className="table-auto border-collapse border border-slate-500">
          <thead className="border-collapse border border-slate-500">
            <tr>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Código</th>
              <th>Limite Usos</th>
              <th>Qtd Dias</th>
              <th>Validade</th>
              <th>Status</th>
              <th>Criado</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {cuponsMock.map((cupom) => (
              <CouponItem {...cupom} key={uuidCupom + cupom.id} />
            ))}
            {/* <tr className="border-collapse border border-slate-300">
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </MainTemplate>
  );
}

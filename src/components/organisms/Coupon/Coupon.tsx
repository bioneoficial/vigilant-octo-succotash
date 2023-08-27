import { openModal } from "@/Redux/Reducers/modalSlice";
import { getAllCoupon, getAllCouponResponse } from "@/api/coupon";
import { Button } from "@/components/atoms/Button";
import { CouponItem } from "@/components/molecules/CoupounItem";
import { MyError, cupom } from "@/types/types";
import {
  HEAD_TABLE_COUPONS,
  PrivacyItemStatus,
  modalTypeEnum,
} from "@/utils/enums";
import { useId } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import secureLocalStorage from "react-secure-storage";

export default function Coupon(): JSX.Element {
  const dispatch = useDispatch();
  const uuidCupom = useId();

  const storedData: any = secureLocalStorage.getItem("funktoonToken") || "{}";
  const token = storedData.token || "";
  const { data } = useQuery<getAllCouponResponse, MyError>(
    "getAllCoupon",
    () => getAllCoupon(token),
    { enabled: !!token }
  );

  return (
    <div className=" ml-6 flex flex-col justify-center items-center w-full ">
      <h2 className=" mt-6 ml-6 mb-4 text-2xl font-semibold">Cupons</h2>
      <Button
        title="+ Novo Cupom"
        status={true}
        className={[
          "flex items-center py-2 px-2 ml-6 mb-4 bg-[#8b00d1] text-white rounded hover:bg-[#8b0099]",
        ]}
        onClick={(): void => {
          dispatch(openModal(modalTypeEnum.CREATE_COUPON));
        }}
      />
      <table className="table-auto text-center">
        <thead className=" border bg-gray-100 border-slate-500">
          <tr>
            {Object.values(HEAD_TABLE_COUPONS).map((header) => (
              <th key={header} className="border">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className=" border bg-gray-100 border-slate-500">
          {data?.map((cupom) => {
            const cupomData: cupom = {
              id: cupom.id,
              nome: cupom.nome,
              descricao: `Criado por:${cupom.id_usuario_operacao} Usados:${cupom.qtd_usado}`,
              codigo: cupom.codigo,
              usoLimite: cupom.limite_uso,
              diaQtd: cupom.qtd_dias,
              validade: new Date(cupom.data_validade),
              status:
                cupom.ativo === 1
                  ? PrivacyItemStatus.Ativo
                  : PrivacyItemStatus.Inativo,
              createdAt: new Date(cupom.data_inclusao),
            };

            return <CouponItem {...cupomData} key={uuidCupom + cupomData.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

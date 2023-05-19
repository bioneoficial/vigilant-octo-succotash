import { setCoupon } from "@/Redux/Reducers/couponSlice";
import { openModal } from "@/Redux/Reducers/modalSlice";
import { Button } from "@/components/atoms/Button";
import { cupom } from "@/types/types";
import { PrivacyItemStatus, modalTypeEnum } from "@/utils/enums";
import { useDispatch } from "react-redux";

export const CouponItem: React.FC<cupom> = ({
  id,
  nome,
  descricao,
  codigo,
  usoLimite,
  diaQtd,
  validade,
  status,
  createdAt,
}) => {
  const formattedValidade = validade.toLocaleDateString();
  const formattedCreatedAt = createdAt.toLocaleDateString();
  const dispatch = useDispatch();

  return (
    <tr
      className="border-collapse border  border-slate-300 hover:bg-gray-700 hover:text-white"
      key={id + nome}
    >
      <td>{nome}</td>
      <td
        className={` ${
          status === PrivacyItemStatus.Ativo ? "text-green-600" : "text-red-600"
        }`}
      >
        {status}
      </td>
      <td>{formattedCreatedAt}</td>
      <td className="bg-gray-500 mx-auto">{codigo}</td>
      <td>{descricao}</td>
      <td>{usoLimite}</td>
      <td>{diaQtd}</td>
      <td>{formattedValidade}</td>

      <td className=" px-2">
        <Button
          title={""}
          status={true}
          icon={{ src: "/images/pencil.svg", alt: "EditCoupon" }}
          onClick={(): void => {
            dispatch(
              setCoupon({
                id,
                nome,
                descricao,
                codigo,
                usoLimite,
                diaQtd,
                validade,
                status,
                createdAt,
              })
            );
            dispatch(openModal(modalTypeEnum.EDIT_COUPON));
          }}
        />
      </td>
    </tr>
  );
};

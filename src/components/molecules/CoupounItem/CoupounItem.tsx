import { cupom } from "@/types/types";
import { PrivacyItemStatus } from "@/utils/enums";
import Image from "next/image";

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
        <Image src="/images/pencil.svg" width={19} height={19} alt="plus" />
      </td>
    </tr>
  );
};

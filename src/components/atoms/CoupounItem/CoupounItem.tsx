import { cupom } from "@/types/types";
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
    <tr className="border-collapse border border-slate-300" key={id + nome}>
      <td>{nome}</td>
      <td>{descricao}</td>
      <td>{codigo}</td>
      <td>{usoLimite}</td>
      <td>{diaQtd}</td>
      <td>{formattedValidade}</td>
      <td>{status}</td>
      <td>{formattedCreatedAt}</td>
      <td>
        <Image src="/images/pencil.svg" width={19} height={19} alt="plus" />
      </td>
    </tr>
  );
};

import { user } from "@/types/types";
import { PrivacyItemStatus } from "@/utils/enums";
import Image from "next/image";

export const UserItem: React.FC<user> = ({
  id,
  nome,
  email,
  imagem,
  status,
  createdAt,
  tipo,
}) => {
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
      <td>{email}</td>
      <td>{imagem}</td>
      <td>{tipo}</td>

      <td className=" px-2">
        <Image src="/images/pencil.svg" width={19} height={19} alt="plus" />
      </td>
    </tr>
  );
};

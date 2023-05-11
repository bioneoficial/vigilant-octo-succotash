import { useState, useEffect } from "react";
import { PrivacyItem } from "@/types/types";
import { PrivacyItemStatus, PrivacyItemType } from "@/utils/enums";

interface EditPrivacyProps {
  item: PrivacyItem;
}

export const EditPrivacy: React.FC<EditPrivacyProps> = ({
  item = {
    id: 2,
    name: "Termos de Uso",
    status: PrivacyItemStatus.Ativo,
    type: PrivacyItemType.TermosUso,
    version: 2,
    publish: true,
    date: "23/08/2022",
  },
}) => {
  const [editedItem, setEditedItem] = useState<PrivacyItem | undefined>({
    id: 2,
    name: "Termos de Uso",
    status: PrivacyItemStatus.Ativo,
    type: PrivacyItemType.TermosUso,
    version: 2,
    publish: true,
    date: "23/08/2022",
  });

  useEffect(() => {
    setEditedItem(item);
  }, [item]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    console.log(event.target.value);
  };

  // if (!editedItem) return null;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Politicas de Privacidade</h2>
      <div className="border-b border-gray-200 py-4">
        <h3 className="text-lg font-semibold">{editedItem?.name}</h3>
        <textarea
          className="mt-2 border rounded p-2 w-full"
          name="name"
          value={editedItem?.name}
          onChange={handleInputChange}
        />
        <div className="flex items-center mt-2">
          <p className="text-gray-500 text-sm">{editedItem?.type}</p>
          <div
            className={`ml-4 px-2 py-1 rounded text-xs text-white font-semibold ${
              editedItem?.status === PrivacyItemStatus.Ativo
                ? "bg-green-500"
                : "bg-red-500"
            }`}
          >
            {editedItem?.status}
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Versão: {editedItem?.version}
        </p>
        <p className="mt-2 text-sm text-gray-500">
          {editedItem?.publish ? "Publicado" : "Não Publicado"} em{" "}
          {editedItem?.date}
        </p>
      </div>
    </div>
  );
};

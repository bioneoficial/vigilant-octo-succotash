import { InputField } from "@/components/atoms/InputField";
import Image from "next/image";
import React from "react";

interface UserFormProps {
  handleSubmitUser: (event: React.FormEvent<HTMLFormElement>) => void;
  urlImageBannerSelection: string;
  setUrlImageBannerSelection: React.Dispatch<React.SetStateAction<string>>;
}

export const UserForm: React.FC<UserFormProps> = ({
  handleSubmitUser,
  urlImageBannerSelection,
  setUrlImageBannerSelection,
}) => {
  const handleUrlImageBannerSelectionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setUrlImageBannerSelection(event.target.value);
  };

  return (
    <div className="flex flex-col items-center text-center">
      <h6 className="">Usuário GUARA</h6>
      <form method="POST" action="#" onSubmit={handleSubmitUser}>
        <InputField
          name="NomeGuara"
          label="Nome"
          initialValue={"Guará"}
          classNameInput={[
            "mt-1",
            "block",
            "w-full",
            "border",
            "border-gray-500",
            "rounded-md",
            "shadow-sm",
            "focus:border-indigo-300",
            "focus:ring",
            "focus:ring-indigo-200",
            "focus:ring-opacity-50",
          ]}
        />
        <div className="flex flex-col">
          <label>Descrição</label>
          <textarea
            rows={7}
            name="description"
            className="border border-black rounded-md"
            defaultValue="Somos um estúdio que publica e produz histórias em quadrinhos totalmente brasileiras. Queremos popularizar o quadrinho nacional e levá-lo para o dia-a-dia das pessoas. Buscamos contribuir com a expansão do mercado para artistas e leitores. Vencedores do Troféu HQMix de Editora do Ano em 2022."
          />
        </div>
        <div className="flex flex-col items-center">
          <InputField
            name="imageUrl"
            label="Imagem"
            initialValue={urlImageBannerSelection}
            classNameInput={[
              "mt-1",
              "block",
              "w-full",
              "border",
              "border-gray-500",
              "rounded-md",
              "shadow-sm",
              "focus:border-indigo-300",
              "focus:ring",
              "focus:ring-indigo-200",
              "focus:ring-opacity-50",
            ]}
            onChange={handleUrlImageBannerSelectionChange}
          />
          <Image
            src={urlImageBannerSelection}
            alt="Preview"
            width={64}
            height={64}
            className="rounded-full"
          />
        </div>
        <button
          type="submit"
          className="  bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
        >
          Salvar dados do usuário
        </button>
      </form>
    </div>
  );
};

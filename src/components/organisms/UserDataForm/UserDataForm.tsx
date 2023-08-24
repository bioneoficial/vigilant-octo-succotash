import { Button } from "@/components/atoms/Button";
import { InputField } from "@/components/atoms/InputField";
import Link from "next/link";
import { useState } from "react";

const UserDataForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    cpfOrCnpj: "",
    termsOfUse: false,
    copyright: false,
    ageConfirmation: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: checked }));
  };

  const handleUpdateClick = (): void => {
    // Validation logic will go here
    window.alert("sucesso pai"); // Temporary success alert
  };
  return (
    <div className="flex flex-col mt-3 p-4 space-y-4 bg-white shadow-md rounded-md">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="checkbox-1"
          onChange={handleCheckboxChange}
          name="termsOfUse"
          className="h-5 w-5 text-blue-600"
        />
        <label htmlFor="checkbox-1" className="text-sm">
          Confirmo que li e concordo com os{" "}
          <Link
            href="https://funktoon.com/termos-e-privacidade?type=terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Termos de uso
          </Link>
        </label>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="copyright"
          onChange={handleCheckboxChange}
          name="copyright"
          className="h-5 w-5 text-blue-600"
        />
        <label htmlFor="copyright" className="text-sm">
          Declaro que sou o exclusivo titular de todos os direitos autorais
          sobre qualquer conteúdo que eu publicar no Funktoon
        </label>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="ageConfirmation"
          onChange={handleCheckboxChange}
          name="ageConfirmation"
          className="h-5 w-5 text-blue-600"
        />
        <label htmlFor="ageConfirmation" className="text-sm">
          Sou maior de idade
        </label>
      </div>

      <InputField
        type="text"
        name="fullName"
        label="Seu Nome completo"
        initialValue={formData.fullName}
        onChange={handleInputChange}
        classNameInput={[
          "ml-2 border border-gray-500 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",
        ]}
      />

      <InputField
        type="text"
        name="cpfOrCnpj"
        label="CPF ou CNPJ"
        initialValue={formData.cpfOrCnpj}
        onChange={handleInputChange}
        classNameInput={[
          "ml-2 border border-gray-500 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",
        ]}
      />

      <p className="text-sm">
        Ao clicar no botão abaixo, confirmo a veracidade dos dados informados.
      </p>
      <Button
        status
        title="Atualizar meus dados"
        onClick={handleUpdateClick}
        className={[
          "mt-2 px-4 py-2 w-full bg-gray-400 text-white rounded-md hover:bg-gray-500",
        ]}
      />
    </div>
  );
};

export default UserDataForm;

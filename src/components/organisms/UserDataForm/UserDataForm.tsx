import { Button } from "@/components/atoms/Button";
import { InputField } from "@/components/atoms/InputField";
import toastService from "@/utils/toastService";
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
    let newValue = value;
    if (name === "cpfOrCnpj") {
      newValue = value.replace(/\D/g, "");
      newValue = newValue.replace(/(\d{3})(\d)/, "$1.$2");
      newValue = newValue.replace(/(\d{3})(\d)/, "$1.$2");
      newValue = newValue.replace(/(\d{3})(\d{1,2})/, "$1-$2");
      newValue = newValue.substring(0, 14);
    }

    setFormData((prevData) => ({ ...prevData, [name]: newValue }));
  };

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: checked }));
  };

  const validateForm = (): boolean => {
    if (
      !formData.termsOfUse ||
      !formData.copyright ||
      !formData.ageConfirmation
    ) {
      window.alert("Por favor, confirme todos os termos e condições.");
      return false;
    } else if (
      !formData.fullName.trim() ||
      formData.fullName.trim().length < 2
    ) {
      window.alert("Por favor, insira seu nome completo.");
      return false;
    } else if (
      !formData.cpfOrCnpj.trim() ||
      formData.cpfOrCnpj.trim().length !== 14
    ) {
      toastService().error("Por favor, insira seu CPF ou CNPJ.");
      return false;
    }

    return true;
  };

  const handleUpdateClick = (): void => {
    if (!validateForm()) {
      return;
    }
    console.log(formData);
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

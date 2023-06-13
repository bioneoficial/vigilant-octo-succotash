import React, { FormEvent, useState } from "react";
import { InputField } from "@/components/atoms/InputField";
import Link from "next/link";
import { resetPasswordValidate } from "@/api/password";
import { handlePasswordResetError } from "@/utils/utils";
import "react-toastify/dist/ReactToastify.css";
import toastService from "@/utils/toastService";
import { ResetPasswordProps } from "@/types/types";

const ResetPasswordSecondStep: React.FC<ResetPasswordProps> = ({
  onSuccess,
}): JSX.Element => {
  const [code, setCode] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const validateCode = (code: string): boolean => {
    return code.length === 6;
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    if (!validateCode(code)) {
      setErrorMessage("Codigo inválido");
      return;
    }

    try {
      const token = sessionStorage.getItem("resetPasswordToken");
      const resetPasswordResponse = await resetPasswordValidate(
        { code },
        token as string
      );
      console.log(resetPasswordResponse);
      setErrorMessage("");
      const { success } = toastService();
      success("Codigo validado com sucesso");
      onSuccess();
    } catch (err: unknown) {
      handlePasswordResetError(err, toastService());
      setErrorMessage("Erro na verificacao");
    }
  };

  const commonInputClass = [
    "shadow appearance-none border border-neutral-950 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm",
  ];
  return (
    <>
      <h6 className="mb-4 text-sm">Insira o codigo no campo abaixo</h6>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className="mb-4">
            <InputField
              id="code"
              type="number"
              label="Codigo aqui"
              name="code"
              initialValue={code}
              required
              onChange={(e): void => setCode(e.target.value)}
              classNameInput={commonInputClass}
              errorMessage={errorMessage}
            />
          </div>
        </div>

        <div className="mb-0">
          <button
            className="bg-[#FF55F1] hover:bg-[#F115F9] text-white text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full text-center"
            type="submit"
          >
            Enviar link para redefinir senha
          </button>
        </div>
        <div className="mt-5 text-center">
          <Link
            className="inline-block align-baseline text-sm text-[#FF55F1] hover:text-[#F115F9]"
            href="/login"
          >
            Login
          </Link>
        </div>
      </form>
    </>
  );
};

export default ResetPasswordSecondStep;

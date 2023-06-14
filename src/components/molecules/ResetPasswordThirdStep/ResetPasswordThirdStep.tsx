import React, { FormEvent, useState } from "react";
import { InputField } from "@/components/atoms/InputField";
import Link from "next/link";
import { updatePassword } from "@/api/password";
import { handlePasswordResetError, validatePassword } from "@/utils/utils";
import "react-toastify/dist/ReactToastify.css";
import toastService from "@/utils/toastService";

function ResetPasswordThirdStep(): JSX.Element {
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    if (!validatePassword(newPassword)) {
      setErrorMessage("Senha inválida");
      return;
    } else if (newPassword !== confirmPassword) {
      setErrorMessage("Senhas não conferem");
      return;
    }

    try {
      await updatePassword({ newPassword });
      sessionStorage.removeItem("resetPasswordToken");
      setErrorMessage("");
      const { success } = toastService();
      success("Senha alterada com sucesso");
    } catch (err: unknown) {
      handlePasswordResetError(err, toastService());
      setErrorMessage("Erro no envio");
    }
  };

  const commonInputClass = [
    "shadow appearance-none border border-neutral-950 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm",
  ];
  return (
    <>
      <h6 className="mb-4 text-sm">
        Digite seu e-mail para iniciar o processo
      </h6>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className="mb-4">
            <InputField
              id="newPassword"
              type="text"
              label="Nova senha"
              name="newPassword"
              initialValue={newPassword}
              required
              onChange={(e): void =>
                setNewPassword(e.target.value.replace(/\s/g, ""))
              }
              classNameInput={commonInputClass}
              errorMessage={errorMessage}
            />
          </div>
        </div>

        <div className="mb-4">
          <InputField
            id="password-confirm"
            type="password"
            label="Confirmação de senha"
            name="password_confirmation"
            initialValue={confirmPassword}
            required
            onChange={(e): void =>
              setConfirmPassword(e.target.value.replace(/\s/g, ""))
            }
            classNameInput={commonInputClass}
            errorMessage={errorMessage}
          />
        </div>

        <div className="mb-0">
          <button
            className="bg-[#FF55F1] hover:bg-[#F115F9] text-white text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full text-center"
            type="submit"
          >
            Enviar nova senha
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
}

export default ResetPasswordThirdStep;

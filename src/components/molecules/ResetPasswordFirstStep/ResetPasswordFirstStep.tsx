import React, { FormEvent, useState } from "react";
import { InputField } from "@/components/atoms/InputField";
import Link from "next/link";
import { resetPassword } from "@/api/password";
import { handlePasswordResetError } from "@/utils/utils";
import "react-toastify/dist/ReactToastify.css";
import toastService from "@/utils/toastService";
import { ResetPasswordProps } from "@/types/types";

const ResetPasswordFirstStep: React.FC<ResetPasswordProps> = ({
  onSuccess,
}): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const validateEmail = (email: string): boolean => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Email inválido");
      return;
    }

    try {
      const resetPasswordResponse = await resetPassword({ email });
      sessionStorage.setItem("resetPasswordToken", resetPasswordResponse.token);
      setErrorMessage("");
      const { success } = toastService();
      success("Email enviado com sucesso");
      onSuccess();
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
              id="email"
              type="email"
              label="Email"
              name="email"
              initialValue={email}
              required
              onChange={(e): void => setEmail(e.target.value)}
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

export default ResetPasswordFirstStep;

import React, { FormEvent, useState } from "react";
import Image from "next/image";
import { InputField } from "@/components/atoms/InputField";
import Link from "next/link";
import { createUser } from "@/api/usuario";
import {
  clearStringState,
  handleAxiosError,
  validateForm,
} from "@/utils/utils";
import { commonInputClass } from "@/utils/const";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import toastService from "@/utils/toastService";

function Register(): JSX.Element {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>("");
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>("");
  const [nameErrorMessage, setNameErrorMessage] = useState<string>("");

  const { success } = toastService();

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    clearStringState(
      setNameErrorMessage,
      setEmailErrorMessage,
      setPasswordErrorMessage
    );
    event.preventDefault();
    const errors = validateForm({ name, email, password, confirmPassword });
    if (errors) {
      setNameErrorMessage(errors.name as string);
      setEmailErrorMessage(errors.email as string);
      setPasswordErrorMessage(errors.password as string);
      return;
    } else {
      try {
        await createUser({
          nome: name,
          email,
          senha: password,
        });
        success("Usuario criado com sucesso!");
        clearStringState(setName, setEmail, setPassword, setConfirmPassword);
      } catch (err: unknown) {
        handleAxiosError(err, toastService(), setEmailErrorMessage);
      }
    }
  };

  return (
    <div className="w-1/2 max-w-xs mx-auto">
      <div>
        <Image
          src={"/images/logo-funktoon.svg"}
          width={250}
          height={200}
          alt="logo"
          className="h-160 w-160 rounded-sm"
          quality={100}
        />
      </div>
      <h6 className="mb-4">Crie sua conta</h6>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className="mb-4">
            <InputField
              id="name"
              label="Seu nome"
              name="name"
              initialValue={name}
              required
              onChange={(e): void => setName(e.target.value)}
              classNameInput={commonInputClass}
              errorMessage={nameErrorMessage}
            />
          </div>

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
              errorMessage={emailErrorMessage}
            />
          </div>

          <div className="mb-4">
            <InputField
              id="password"
              type="password"
              label="Senha"
              name="password"
              initialValue={password}
              required
              onChange={(e): void =>
                setPassword(e.target.value.replace(/\s/g, ""))
              }
              classNameInput={commonInputClass}
              errorMessage={passwordErrorMessage}
            />
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
              errorMessage={passwordErrorMessage}
            />
          </div>
        </div>

        <div className="mb-0">
          <button
            className="bg-[#FF55F1] hover:bg-[#F115F9] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full text-center"
            type="submit"
          >
            Registre-se
          </button>
        </div>

        <div className="mt-5 text-center">
          <Link
            className="inline-block align-baseline font-bold text-sm text-[#FF55F1] hover:text-[#F115F9]"
            href="/login"
          >
            Fazer Login
          </Link>
        </div>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default Register;

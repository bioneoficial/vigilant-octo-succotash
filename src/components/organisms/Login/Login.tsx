import React, { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import { InputField } from "@/components/atoms/InputField";
import Link from "next/link";
import { useRouter } from "next/router";
import { LoginResponse } from "@/types/types";
import { UserRole } from "@/utils/enums";
import { handleAxiosError } from "@/utils/utils";
import toastService from "@/utils/toastService";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useLogin from "@/customHooks/useLogin";
import secureLocalStorage from "react-secure-storage";

function Login(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [stayConnected, setStayConnected] = useState<boolean>(false);
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { mutate } = useLogin();

  useEffect(() => {
    const userData: any = secureLocalStorage.getItem("funktoonToken");
    if (userData?.token) {
      userData.role === UserRole.admin || userData.role === UserRole.root
        ? router.push("/dashboard")
        : router.push("/");
    }
  }, [router]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    mutate(
      { email, password, stayConnected },
      {
        onSuccess: (data: LoginResponse) => {
          if (!data.token) {
            setErrorMessage("Usuário não encontrado ou senha inválida");
            return;
          }

          data.user.role === UserRole.admin || data.user.role === UserRole.root
            ? router.push("/dashboard")
            : router.push("/");
        },
        onError: (err: unknown) => {
          handleAxiosError(err, toastService(), setErrorMessage);
          console.error(err);
        },
      }
    );
  };

  const commonInputClass = [
    "shadow appearance-none border border-neutral-950 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
  ];
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
      <h6 className="mb-4">Faça login para continuar</h6>
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

          <div className="mb-4">
            <InputField
              id="password"
              type="password"
              label="Senha"
              name="password"
              initialValue={password}
              required
              onChange={(e): void => setPassword(e.target.value)}
              classNameInput={commonInputClass}
              errorMessage={errorMessage}
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <InputField
                id="stayConnected"
                label="Manter conectado"
                name="stayConnected"
                type="checkbox"
                initialValue={stayConnected ? "true" : "false"}
                onChange={(e): void => setStayConnected(e.target.checked)}
                classNameInput={["mr-2", "w-4", "h-4"]}
              />
            </div>
            <Link
              href="/password/reset"
              className=" text-blue-600 hover:text-blue-800  text-sm"
            >
              Recuperar Senha
            </Link>
          </div>
        </div>

        <div className="mb-0">
          <button
            className="bg-[#FF55F1] hover:bg-[#F115F9] text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full text-center"
            type="submit"
          >
            Entrar
          </button>
        </div>

        <div className="mt-5 text-center">
          <Link
            className="inline-block align-baseline text-sm text-[#FF55F1] hover:text-[#F115F9]"
            href="/register"
          >
            Criar conta
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

export default Login;

import React, { FormEvent, useState } from "react";
import Image from "next/image";
import { InputField } from "@/components/atoms/InputField";
import Link from "next/link";

function Login(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stayConnected, setStayConnected] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // You would handle form submission here
  };

  const commonInputClass = [
    "shadow appearance-none border border-neutral-950 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
  ];
  return (
    <div className="w-1/2 max-w-xs mx-auto">
      <div className="text-center">
        <Image
          src={"/images/logo-funktoon.svg"}
          width={250}
          height={200}
          alt="logo"
          className="h-160 w-160 rounded-sm mx-auto"
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
    </div>
  );
}

export default Login;

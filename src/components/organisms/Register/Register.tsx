import React, { FormEvent, useState } from "react";
import Image from "next/image";
import { InputField } from "@/components/atoms/InputField";

function Register(): JSX.Element {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // You would handle form submission here
  };

  const commonInputClass = [
    "shadow appearance-none border border-neutral-950 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
  ];
  return (
    <div className="min-h-screen flex items-center">
      <div
        className="hidden md:block w-1/2 min-h-screen bg-no-repeat bg-clip-border bg-origin-border bg-cover"
        style={{
          backgroundImage: "url('/images/TeladeLogin.png')",
        }}
      ></div>
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

            <div className="mb-4">
              <InputField
                id="password-confirm"
                type="password"
                label="Confirmação de senha"
                name="password_confirmation"
                initialValue={confirmPassword}
                required
                onChange={(e): void => setConfirmPassword(e.target.value)}
                classNameInput={commonInputClass}
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
            <a
              className="inline-block align-baseline font-bold text-sm text-[#FF55F1] hover:text-[#F115F9]"
              href="/login"
            >
              Fazer Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

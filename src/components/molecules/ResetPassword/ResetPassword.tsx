import React, { FormEvent, useState } from "react";
import Image from "next/image";
import { InputField } from "@/components/atoms/InputField";
import Link from "next/link";
import { resetPassword } from "@/api/password";
import { handlePasswordResetError, withErrorHandler } from "@/utils/utils";

function ResetPassword(): JSX.Element {
  const [email, setEmail] = useState("");

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const resetPasswordResponse = await withErrorHandler(
      () => resetPassword({ email }),
      handlePasswordResetError
    );
    console.log(resetPasswordResponse);
  };

  const commonInputClass = [
    "shadow appearance-none border border-neutral-950 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm",
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
    </div>
  );
}

export default ResetPassword;

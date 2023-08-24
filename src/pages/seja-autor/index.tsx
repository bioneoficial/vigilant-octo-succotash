import "swiper/swiper-bundle.css";
import { HeaderHome } from "@/components/organisms/HeaderHome";
import { InputField } from "@/components/atoms/InputField";
import { useEffect, useState } from "react";
import { Button } from "@/components/atoms/Button";
import { getEmailCode, verifyEmailCode } from "@/api/usuario";
import { useMutation } from "react-query";
import UserDataForm from "@/components/organisms/UserDataForm/UserDataForm";
import toastService from "@/utils/toastService";

export default function Home(): JSX.Element {
  const [code, setCode] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [isCodeSent, setIsCodeSent] = useState<boolean>(false);
  const { success } = toastService();

  const getEmailCodeMutation = (
    token: string
  ): Promise<{ success: boolean; code: string }> => getEmailCode(token);

  const getEmailCodeMutate = useMutation(getEmailCodeMutation, {
    onSuccess: (_data) => {
      setIsCodeSent(true);
      success("Email enviado com sucesso");
    },
    onError: (_error) => {
      toastService().error("Erro ao enviar o email.");
    },
  });

  const verifyEmailCodeMutation = ({
    token,
    code,
  }: {
    token: string;
    code: string;
  }): Promise<{ success: boolean }> => verifyEmailCode(token, code);

  const verifyEmailCodeMutate = useMutation(verifyEmailCodeMutation, {
    onSuccess: (data) => {
      if (data.success) {
        success("Email verificado com sucesso!");
      } else {
        toastService().error("Verificação falhou!");
      }
    },
    onError: (error) => {
      console.error(error);
      toastService().error("Erro na verificação!");
    },
  });

  const handleVerifyClick = (): void => {
    if (typeof code !== "string") {
      window.alert("Código inválido.");
      return;
    }
    verifyEmailCodeMutate.mutate({ token, code });
  };

  const handleSendCodeClick = (): void => {
    getEmailCodeMutate.mutate(token);
  };

  useEffect(() => {
    const tokenInLocalStorage = localStorage.getItem("funktoonToken");
    const tokenInSessionStorage = sessionStorage.getItem("funktoonToken");

    const token = tokenInLocalStorage || tokenInSessionStorage;
    if (token) {
      const parsedToken = JSON.parse(token);
      setUserEmail(parsedToken.user.email);
      setToken(parsedToken.token);
    }
  }, []);

  return (
    <div className="grid grid-cols-1 fold:gap-0 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5">
      <HeaderHome />

      {isCodeSent ? ( // MUDAR PARA !isCodeSent ANTES DE TERMINAR
        <>
          <p className="text-center">
            Clique no botão abaixo para solicitar o código de validação do seu
            email e iniciar o processo de validação da sua conta.
          </p>
          <Button
            title="Enviar código"
            status
            onClick={handleSendCodeClick}
            className={[
              "mx-auto px-4 py-2  bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded",
            ]}
          />
        </>
      ) : (
        <>
          <p>
            Enviamos um email para {userEmail}, digite o codigo do email no
            campo abaixo para confirmar sua conta.O email pode levar alguns
            instantes.
          </p>
          <div>
            <InputField
              placeholder="Digite aqui"
              type="text"
              name="codigo"
              label="Codigo: "
              initialValue={code}
              onChange={(e): void => setCode(e.target.value)}
            />
            <Button title="Validar" status onClick={handleVerifyClick} />
          </div>
          <UserDataForm />
        </>
      )}
    </div>
  );
}

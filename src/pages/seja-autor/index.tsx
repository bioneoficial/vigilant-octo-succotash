import "swiper/swiper-bundle.css";
import { HeaderHome } from "@/components/organisms/HeaderHome";
import { InputField } from "@/components/atoms/InputField";
import { useEffect, useState } from "react";
import { Button } from "@/components/atoms/Button";

const UserDataForm: React.FC = () => {
  return (
    <div className="flex flex-col mt-3">
      <div className="card-style settings-card-1 mb-6">
        <div className="profile-info">
          <div className="form-check checkbox-style mb-4 flex items-center space-x-2">
            <input
              type="checkbox"
              id="checkbox-1"
              className="form-check-input"
            />
            <label htmlFor="checkbox-1" className="form-check-label">
              Confirmo que li e concordo com os{" "}
              <a
                href="https://funktoon.com/termos-e-privacidade?type=terms"
                target="_blank"
                rel="noopener noreferrer"
              >
                Termos de uso
              </a>
            </label>
          </div>

          <div className="form-check checkbox-style mb-4 flex items-center space-x-2">
            <input
              type="checkbox"
              id="copyrightCheck"
              className="form-check-input"
            />
            <label htmlFor="copyrightCheck" className="form-check-label">
              Declaro que sou o exclusivo titular de todos os direitos autorais
              sobre qualquer conteúdo que eu publicar no Funktoon
            </label>
          </div>

          <div className="form-check form-switch toggle-switch mb-6 flex items-center space-x-2">
            <input
              type="checkbox"
              id="toggleSwitch1"
              className="form-check-input"
            />
            <label htmlFor="toggleSwitch1" className="form-check-label">
              Sou maior de idade
            </label>
          </div>

          <div className="input-style-1 mb-4">
            <label>Seu Nome completo</label>
            <input type="email" className="w-full p-2 border rounded" />
          </div>

          <div className="input-style-1 mb-4">
            <label>CPF ou CNPJ</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>

          <p>
            Ao clicar no botão abaixo, confirmo a veracidade dos dados
            informados.
          </p>
          <button
            disabled
            className="mt-2 px-4 py-2 w-full bg-gray-400 text-white rounded-md hover:bg-gray-500"
          >
            Atualizar meus dados
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Home(): JSX.Element {
  const [code, setCode] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");

  useEffect(() => {
    const tokenInLocalStorage = localStorage.getItem("funktoonToken");
    const tokenInSessionStorage = sessionStorage.getItem("funktoonToken");

    const token = tokenInLocalStorage || tokenInSessionStorage;
    if (token) {
      const parsedToken = JSON.parse(token);
      setUserEmail(parsedToken.user.email);
    }
  }, []);

  return (
    <div className="grid grid-cols-1 fold:gap-0 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5">
      <HeaderHome />
      <p>
        Enviamos um email para {userEmail}, digite o codigo do email no campo
        abaixo para confirmar sua conta
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
        <Button
          title="Validar"
          status
          onClick={(): void => window.alert(`Validado`)}
        />
      </div>
      <UserDataForm />
    </div>
  );
}

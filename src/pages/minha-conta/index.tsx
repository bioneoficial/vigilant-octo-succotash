import { InputField } from "@/components/atoms/InputField";
import { MainTemplate } from "@/components/templates/MainTemplate";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function MyProfile(): JSX.Element {
  const [userEmail, serUserEmail] = useState<string>("");
  const [name, setName] = useState<string>("");

  const [previewImageUrl, setPreviewImageUrl] = useState<string | null>(
    "https://media.licdn.com/dms/image/D4D03AQH3XhCLMfcx0w/profile-displayphoto-shrink_400_400/0/1668354197751?e=1689206400&v=beta&t=9jTu05zEYjo6WcK6NtCuCo0tI-deZtdHPS6mUENAduo"
  );

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (event.target.files && event.target.files[0]) {
      const imageUrl = URL.createObjectURL(event.target.files[0]);
      setPreviewImageUrl(imageUrl);
    }
  };

  const handleProfileSubmit = (event: { preventDefault: () => void }): void => {
    event.preventDefault();
  };

  const handlePasswordSubmit = (event: {
    preventDefault: () => void;
  }): void => {
    event.preventDefault();
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  useEffect(() => {
    const tokenInLocalStorage = localStorage.getItem("funktoonToken");
    const tokenInSessionStorage = sessionStorage.getItem("funktoonToken");

    const token = tokenInLocalStorage || tokenInSessionStorage;
    if (token) {
      const parsedToken = JSON.parse(token);
      serUserEmail(parsedToken.user.email);
      setName(parsedToken.user.nome);
    }
  }, []);

  return (
    <MainTemplate>
      <h2 className=" ml-6 mb-4 text-2xl font-semibold">Perfil</h2>

      <div className=" ml-6 mx-auto flex flex-row justify-between items-start">
        <form className="w-1/2 mr-8" onSubmit={handleProfileSubmit}>
          <fieldset className="p-4 border rounded border-gray-700">
            <legend className="text-lg font-semibold">Atualizar Perfil</legend>
            <InputField
              label="Nome"
              name="Nome"
              placeholder="Nome"
              initialValue={name}
              onChange={handleNameChange} // Bind the onChange event
              classNameInput={["w-full my-2 p-2 border rounded"]}
            />

            <InputField
              label="Email"
              name="Email"
              type="email"
              placeholder="Email"
              initialValue={userEmail}
              classNameInput={["w-full my-2 p-2 border rounded"]}
              disabled
            />

            <label>
              Sobre
              <textarea
                placeholder="Biografia"
                className=" w-full my-2 p-2 border border-gray-400 rounded"
              />
            </label>

            <InputField
              label="Imagem do perfil"
              name="Imagem do perfil"
              type="file"
              onChange={handleImageChange}
              classNameInput={["w-full my-2 p-2 border rounded"]}
            />
            {previewImageUrl && (
              <Image
                className="ml-4 h-20 w-20 rounded-full"
                width={32}
                height={32}
                src={previewImageUrl}
                alt="Profile Picture Preview"
              />
            )}

            <button
              type="submit"
              className="mt-4 px-4 py-2  bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded"
            >
              Atualizar Perfil
            </button>
          </fieldset>
        </form>
        <form className="w-1/2" onSubmit={handlePasswordSubmit}>
          <fieldset className="p-4 border rounded border-gray-700">
            <legend className="text-lg font-semibold">Atualizar Senha</legend>
            <InputField
              label="Nova Senha"
              name="Nova Senha"
              type="password"
              placeholder="Nova Senha"
              classNameInput={["w-full my-2 p-2 border rounded"]}
            />
            <InputField
              label="Confirmar Senha"
              name="Confirmar Senha"
              type="password"
              placeholder="Confirmar Senha"
              classNameInput={["w-full my-2 p-2 border rounded"]}
            />
            <button
              type="submit"
              className="mt-4 px-4 py-2  bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded"
            >
              Atualizar Senha
            </button>
          </fieldset>
        </form>
      </div>
    </MainTemplate>
  );
}

import { InputField } from "@/components/atoms/InputField";
import { MainTemplate } from "@/components/templates/MainTemplate";
import { useRef, useState } from "react";
import Image from "next/image";

export default function MyProfilePage(): JSX.Element {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const bioRef = useRef<HTMLTextAreaElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
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
    console.log(
      nameRef.current?.value,
      emailRef.current?.value,
      bioRef.current?.value
    );
  };

  const handlePasswordSubmit = (event: {
    preventDefault: () => void;
  }): void => {
    event.preventDefault();
    console.log(passwordRef.current?.value, confirmPasswordRef.current?.value);
  };

  return (
    <MainTemplate>
      <h2 className=" ml-6 mb-4 text-2xl font-semibold">Perfil</h2>

      <div className=" ml-6 mx-auto flex flex-row justify-between items-start">
        <form className="w-1/2 mr-8" onSubmit={handleProfileSubmit}>
          <fieldset className="p-4 border rounded border-gray-700">
            <legend className="text-lg font-semibold">Atualizar Perfil</legend>
            <InputField
              label="Nome"
              inputRef={nameRef}
              name="Nome"
              placeholder="Nome"
              classNameInput={["w-full my-2 p-2 border rounded"]}
            />
            <InputField
              label="Email"
              inputRef={emailRef}
              name="Email"
              type="email"
              placeholder="Email"
              classNameInput={["w-full my-2 p-2 border rounded"]}
            />

            <label>
              Sobre
              <textarea
                ref={bioRef}
                placeholder="Biografia"
                className=" w-full my-2 p-2 border rounded"
              />
            </label>

            <InputField
              label="Imagem do perfil"
              inputRef={imageRef}
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
              inputRef={passwordRef}
              name="Nova Senha"
              type="password"
              placeholder="Nova Senha"
              classNameInput={["w-full my-2 p-2 border rounded"]}
            />
            <InputField
              label="Confirmar Senha"
              inputRef={confirmPasswordRef}
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

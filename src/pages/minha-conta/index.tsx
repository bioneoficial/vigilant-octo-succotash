import { InputField } from "@/components/atoms/InputField";
import { useEffect, useState } from "react";
import Image from "next/image";
import toastService from "@/utils/toastService";
import { updateUser, getUserById, updatePhoto } from "@/api/usuario";
import {
  handlePasswordResetError,
  isValidName,
  isValidPassword,
} from "@/utils/utils";
import { useQuery } from "react-query";
import { HeaderHome } from "@/components/organisms/HeaderHome";

export default function MyProfile(): JSX.Element {
  const [userEmail, setUserEmail] = useState<string>("");
  const [nome, setNome] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [id, setUserId] = useState<number>(0);
  const [previewImageUrl, setPreviewImageUrl] = useState<string | null>(null);
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const { success } = toastService();

  const {
    data: userData,
    isLoading,
    refetch,
  } = useQuery(["getUserById", id], () => getUserById(id), {
    enabled: !!id,
  });

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setDescricao(e.target.value);
  };

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    if (event.target.files && event.target.files[0]) {
      const imageUrl = URL.createObjectURL(event.target.files[0]);
      setPreviewImageUrl(imageUrl);

      const formData = new FormData();
      formData.append("foto", event.target.files[0]);
      formData.append("id", id.toString());

      try {
        const response = await updatePhoto(token, formData);
        if (response.success) {
          success("Image updated successfully!");
          await refetch();

          const tokenInLocalStorage = localStorage.getItem("funktoonToken");
          if (tokenInLocalStorage && userData) {
            const parsedToken = JSON.parse(tokenInLocalStorage);
            parsedToken.user.fotoPath = userData.fotoPath;
            localStorage.setItem("funktoonToken", JSON.stringify(parsedToken));
          } else {
            const tokenInSessionStorage =
              sessionStorage.getItem("funktoonToken");
            if (tokenInSessionStorage && userData) {
              const parsedToken = JSON.parse(tokenInSessionStorage);
              parsedToken.user.fotoPath = userData.fotoPath;
              sessionStorage.setItem(
                "funktoonToken",
                JSON.stringify(parsedToken)
              );
            }
          }
        } else {
          throw new Error(response.error || "Failed to update image");
        }
      } catch (error) {
        toastService().error("An error occurred.");
      }
    }
  };

  const handleProfileSubmit = async (event: {
    preventDefault: () => void;
  }): Promise<void> => {
    event.preventDefault();
    try {
      if (!isValidName(nome)) {
        toastService().error("O nome deve ter entre 2 e 90 caracteres.");
        return;
      }

      const response = await updateUser(token, { nome, descricao, id });
      if (response.sucess) success("Profile updated successfully!");
    } catch (error) {
      handlePasswordResetError(error, toastService());
    }
  };

  const handlePasswordSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    if (!isValidPassword(newPassword) || !isValidPassword(confirmPassword)) {
      toastService().error("A senha deve ter entre 8 e 30 caracteres.");
      return;
    }

    if (newPassword && confirmPassword && newPassword === confirmPassword) {
      try {
        const response = await updateUser(token, { senha: newPassword, id });

        if (response.success) {
          success("Password updated successfully!");
        } else {
          handlePasswordResetError(response.error, toastService());
        }
      } catch (error) {
        handlePasswordResetError(error, toastService());
      }
    } else {
      handlePasswordResetError(
        { message: "senha não coincide" },
        toastService()
      );
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNome(e.target.value);
  };

  useEffect(() => {
    const tokenInLocalStorage = localStorage.getItem("funktoonToken");
    const tokenInSessionStorage = sessionStorage.getItem("funktoonToken");

    const token = tokenInLocalStorage || tokenInSessionStorage;
    if (token) {
      const parsedToken = JSON.parse(token);
      setToken(parsedToken.token);
      setUserId(parsedToken.user.id);
    }
    if (userData) {
      setUserEmail(userData.email);
      setNome(userData.nome);
      setDescricao(userData.descricao);
      setPreviewImageUrl(userData.fotoPath);
    }
    console.log(userData);
  }, [userData]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <HeaderHome />
      <h2 className=" ml-6 mb-4 text-2xl font-semibold">Perfil</h2>

      <div className=" ml-6 mx-auto flex flex-row justify-between items-start">
        <form className="w-1/2 mr-8" onSubmit={handleProfileSubmit}>
          <fieldset className="p-4 border rounded border-gray-700">
            <legend className="text-lg font-semibold">Atualizar Perfil</legend>
            <InputField
              label="Nome"
              name="Nome"
              placeholder="Nome"
              initialValue={nome}
              onChange={handleNameChange}
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
                value={descricao}
                onChange={handleDescriptionChange}
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
              initialValue={newPassword}
              onChange={(e): void => setNewPassword(e.target.value)}
            />
            <InputField
              label="Confirmar Senha"
              name="Confirmar Senha"
              type="password"
              placeholder="Confirmar Senha"
              classNameInput={["w-full my-2 p-2 border rounded"]}
              initialValue={confirmPassword}
              onChange={(e): void => setConfirmPassword(e.target.value)}
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
    </>
  );
}

import { InputField } from "@/components/atoms/InputField";
import { SelectField } from "@/components/atoms/SelectField";
import { selectSelectedUser } from "@/Redux/Reducers/userSlice";
import { MainTemplate } from "@/components/templates/MainTemplate";
import { useSelector } from "react-redux";
import { useRef } from "react";
import UserCard from "@/components/molecules/UserCard/UserCard";

const PrivacyItemPage: React.FC = () => {
  const selecteduser = useSelector(selectSelectedUser);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const bioRef = useRef<HTMLTextAreaElement>(null);
  const subscriptionRef = useRef<HTMLInputElement>(null);
  let formattedDate = "";
  if (selecteduser?.createdAt)
    formattedDate = new Date(selecteduser?.createdAt).toLocaleDateString();
  console.log(selecteduser);
  return (
    <MainTemplate>
      <div className=" flex flex-col items-center justify-center p-4 ">
        <h2 className="text-2xl font-semibold mb-4">Gerenciar Usuario</h2>
        <div className=" p-2  w-10/12">
          <>
            <UserCard
              name={selecteduser?.nome}
              isSubscriber={false}
              // profileImage={
              //   selecteduser?.imagem
              //     ? selecteduser.imagem
              //     : "https://www.gravatar.com/avatar/000?d=mp&amp;f=y"
              // }
              profileImage={"https://www.gravatar.com/avatar/000?d=mp&amp;f=y"}
            />
          </>
          <div className="flex flex-col items-center justify-center p-4 md:flex-row md:space-x-4">
            <InputField
              inputRef={nameRef}
              label="Nome"
              name="nameInput"
              placeholder="Nome da política/termo"
              required={true}
              initialValue={selecteduser?.nome}
              id={selecteduser?.nome}
              classNameInput={[
                "w-full",
                "py-2",
                "px-3",
                "border",
                "border-gray-400",
                "rounded",
              ]}
              className={[
                "text-gray-700",
                "leading-tight",
                "text-md",
                "mt-3",
                "mb-1",
              ]}
            />
            <label className="text-gray-700 text-md mt-3 mb-1">
              Sobre
              <textarea
                ref={bioRef}
                placeholder="Biografia"
                className=" w-full my-2 p-2 border border-gray-400 rounded"
              />
            </label>
            <InputField
              inputRef={emailRef}
              label="Email"
              name="emailInput"
              placeholder="Email"
              required={true}
              initialValue={selecteduser?.email}
              id={selecteduser?.email}
              classNameInput={[
                "w-full",
                "py-2",
                "px-3",
                "border",
                "border-gray-400",
                "rounded",
              ]}
              className={[
                "text-gray-700",
                "leading-tight",
                "text-md",
                "mt-3",
                "mb-1",
              ]}
            />
            <InputField
              inputRef={subscriptionRef}
              label="Assinatura-Validade"
              name="subscriptionInput"
              type="date"
              placeholder="dd/mm/aaaa"
              required={true}
              initialValue={formattedDate}
              id={formattedDate}
              classNameInput={[
                "w-full",
                "py-2",
                "px-3",
                "border",
                "border-gray-400",
                "rounded",
              ]}
              className={[
                "text-gray-700",
                "leading-tight",
                "text-md",
                "mt-3",
                "mb-1",
              ]}
            />

            <SelectField
              label="Tipo"
              name="typeInput"
              required={true}
              options={[
                { value: "usuario", text: "Usuário" },
                { value: "admin", text: "Admin" },
                {
                  value: "autor",
                  text: "Autor",
                },
                { value: "root", text: "Root" },
              ]}
              initialValue={selecteduser?.tipo}
              classNameInput={[
                "w-full",
                "py-2",
                "px-3",
                "border",
                "border-gray-400",
                "rounded",
              ]}
              className={[
                "text-gray-700",
                "leading-tight",
                "text-md",
                "mt-3",
                "mb-1",
              ]}
            />
            <button className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 ">
              Atualizar Usuário
            </button>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
};

export default PrivacyItemPage;

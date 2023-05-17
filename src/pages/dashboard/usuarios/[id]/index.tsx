import { InputField } from "@/components/atoms/InputField";
import { SelectField } from "@/components/atoms/SelectField";
import { selectSelectedUser } from "@/Redux/Reducers/userSlice";
import { MainTemplate } from "@/components/templates/MainTemplate";
import { useSelector } from "react-redux";

const PrivacyItemPage: React.FC = () => {
  const selecteduser = useSelector(selectSelectedUser);
  console.log(selecteduser);
  return (
    <MainTemplate>
      <div className=" flex flex-col items-center justify-center p-4 ">
        <h2 className="text-2xl font-semibold mb-4">Gerenciar Usuario</h2>
        <div className=" p-2  w-10/12">
          <div className="flex flex-col items-center justify-center p-4 md:flex-row md:space-x-4">
            <InputField
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

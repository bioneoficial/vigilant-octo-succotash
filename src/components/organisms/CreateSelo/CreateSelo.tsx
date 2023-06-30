import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputField } from "@/components/atoms/InputField";
import { clearStamp, selectStamp } from "@/Redux/Reducers/stampSlice";
import Image from "next/image";

export const CreateSelo: React.FC = () => {
  const uuid = useId();
  const editStamp = useSelector(selectStamp);
  const dispatch = useDispatch();

  const handleGoBack = (): void => {
    dispatch(clearStamp());

    history.back();
  };
  return (
    <div className=" flex flex-col items-center justify-center p-4 ">
      <h2 className="text-2xl font-semibold mb-4">Criar Selo</h2>
      <div className=" p-2  w-10/12">
        <div className="flex p-2 py-4 bg-white justify-between items-center w-12/12 border-solid border-2 border-gray-200 mb-4">
          <h3 className="text-lg font-semibold ">{editStamp?.name}</h3>
          <button
            onClick={(): void => handleGoBack()}
            className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 "
          >
            Voltar
          </button>

          <button className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 ">
            Salvar
          </button>
        </div>
        <div className="flex flex-col items-center justify-center p-4 md:flex-row md:space-x-4">
          <InputField
            label="Nome"
            name="nameInput"
            placeholder="Nome da política/termo"
            required={true}
            initialValue={editStamp?.name}
            id={uuid + editStamp?.name}
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
            label={editStamp?.active === 1 ? "Ativo" : "Inativo"}
            type="checkbox"
            name="StampStatus"
            id="StampStatus"
            initialValue={editStamp?.active === 1 ? "true" : "false"}
            onChange={(e): void => {
              console.log(e.target.value);
            }}
          />
          <Image
            src={editStamp?.image ?? "/images/placeholder.png"}
            alt={editStamp?.name ?? "Stamp Image"}
            width={96}
            height={96}
          />
          <label>
            Descrição
            <textarea className="border border-black" value={editStamp?.desc} />
          </label>
        </div>
      </div>
    </div>
  );
};

import { useId, useState } from "react";
import { PrivacyItem } from "@/types/types";
import { Editor } from "@tinymce/tinymce-react";
import { useSelector } from "react-redux";
import { selectPrivacyItem } from "@/Redux/Reducers/privacySlice";
import { InputField } from "@/components/atoms/InputField";
import { SelectField } from "@/components/atoms/SelectField";
import { editPrivacy, postPrivacy } from "@/api/privacy";
import { useMutation, useQueryClient } from "react-query";
import { useAuth } from "@/utils/utils";
import router from "next/router";
import toastService from "@/utils/toastService";

const optionsType = [
  { value: "PoliticaPrivacidade", text: "Política de Privacidade" },
  { value: "TermosUso", text: "Termos de Uso" },
  { value: "PoliticaTermoAutor", text: "Política de Termo de Autor" },
];

export const EditPrivacy: React.FC = () => {
  const { success } = toastService();

  const item = useSelector(selectPrivacyItem);
  const [editedItem, setEditedItem] = useState<Partial<PrivacyItem>>(
    item ?? {
      nome: "",
      id_tipo_politica: 0,
      data_inclusao: "",
      descricao: "",
    }
  );
  const uuid = useId();
  const queryClient = useQueryClient();
  const token = useAuth();

  const handleEditorChange = (content: string, _editor: unknown): void => {
    setEditedItem((editedItem) => ({
      ...editedItem,
      descricao: content,
    }));
  };

  const mutation = useMutation(
    (newPrivacyItem: Partial<PrivacyItem>) =>
      postPrivacy(token, newPrivacyItem),
    {
      onSuccess: () => {
        success("Política criada com sucesso");
        queryClient.invalidateQueries("privacyItems");
      },
    }
  );

  const editMutation = useMutation(
    ({ id, payload }: { id: number; payload: Partial<PrivacyItem> }) =>
      editPrivacy(token, id, payload),
    {
      onSuccess: () => {
        success("Política editada com sucesso");
        queryClient.invalidateQueries("privacyItems");
      },
    }
  );

  const handleSave = (): void => {
    editedItem?.id
      ? editMutation.mutate({ id: editedItem.id, payload: editedItem })
      : mutation.mutate(editedItem);
    router.push("/dashboard/privacy");
  };

  return (
    <div className=" flex flex-col items-center justify-center p-4 ">
      <h2 className="text-2xl font-semibold mb-4">Editar</h2>
      <div className=" p-2  w-10/12">
        <div className="flex p-2 py-4 bg-white justify-between items-center w-12/12 border-solid border-2 border-gray-200 mb-4">
          <h3 className="text-lg font-semibold  mx-auto">{editedItem?.nome}</h3>
          <button
            className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500"
            onClick={handleSave}
          >
            Salvar
          </button>
        </div>
        <div className="flex flex-col items-center justify-center p-4 md:flex-row md:space-x-4">
          <InputField
            label="Nome"
            name="nameInput"
            placeholder="Nome da política/termo"
            required={true}
            type="text"
            initialValue={editedItem?.nome}
            id={uuid + editedItem?.nome}
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
            onChange={(e): void => {
              setEditedItem((editedItem) => ({
                ...editedItem,
                nome: e.target.value,
              }));
            }}
          />
          <SelectField
            label="Tipo"
            name="typeInput"
            required={true}
            options={optionsType}
            initialValue={editedItem?.tipo}
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
            onChange={(e): void => {
              const selectedOptionIndex = optionsType.findIndex(
                (option) => option.value === e.target.value
              );
              setEditedItem((editedItem) => ({
                ...editedItem,
                id_tipo_politica: selectedOptionIndex + 1,
              }));
            }}
          />
          <InputField
            label="Versão"
            name="versionInput"
            required={true}
            type="number"
            initialValue={editedItem?.versao}
            id={uuid + editedItem?.versao}
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
            onChange={(e): void => {
              setEditedItem((editedItem) => ({
                ...editedItem,
                versao: Number(e.target.value),
              }));
            }}
          />
          <InputField
            label="Publicar"
            name="publishInput"
            required={true}
            type="checkbox"
            initialValue={editedItem?.ativo}
            id={uuid + editedItem?.ativo}
            classNameInput={["py-2", "px-3 accent-pink-500 mt-auto w-10 h-6"]}
            className={[
              "flex gap-2",
              "text-gray-700",
              "leading-tight",
              "mt-5",
              "mb-1",
            ]}
            onChange={(e): void => {
              setEditedItem((editedItem) => ({
                ...editedItem,
                ativo: e.target.checked ? 1 : 0,
              }));
            }}
          />
        </div>
        <Editor
          // apiKey={process.env.TINY_API_KEY} ver se em PROD o .env nao acusa warning
          apiKey="elhqxjppa5ipq0e8xb3dfrcs53g78dc00pke776zqeauhywg"
          initialValue={item?.descricao}
          init={{
            height: 500,
            menubar: true,
            // plugins: [
            //   "advlist autolink lists link image charmap print preview anchor",
            //   "searchreplace visualblocks code fullscreen",
            //   "insertdatetime media table paste code help wordcount",
            // ],
            toolbar:
              "undo redo | formatselect | bold italic backcolor fontfamily fontsize | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | help",
            fontsize_formats: "8px 10px 12px 14px 16px 18px 24px 36px",
            font_formats:
              "Arial=arial,helvetica,sans-serif;Courier New=courier new,courier,monospace;Times New Roman=times new roman,times,serif",
          }}
          onEditorChange={handleEditorChange}
        />
      </div>
    </div>
  );
};

import { useId, useState } from "react";
import { PrivacyItem } from "@/types/types";
import { Editor } from "@tinymce/tinymce-react";
import { useSelector } from "react-redux";
import { selectPrivacyItem } from "@/Redux/Reducers/privacySlice";
import { InputField } from "@/components/atoms/InputField";
import { SelectField } from "@/components/atoms/SelectField";

export const EditPrivacy: React.FC = () => {
  const item = useSelector(selectPrivacyItem);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [editedItem, setEditedItem] = useState<PrivacyItem | null>(item);
  const uuid = useId();

  console.log("item", editedItem);

  const handleEditorChange = (content: string, editor: unknown): void => {
    console.log("Content was updated:", content);
    console.log("Editor was updated:", editor); // precisamos melhorar o editor e aplicar o PUT da API
  };

  return (
    <div className=" flex flex-col items-center justify-center p-4 ">
      <h2 className="text-2xl font-semibold mb-4">Editar</h2>
      <div className=" p-2  w-10/12">
        <div className="flex p-2 py-4 bg-white justify-between items-center w-12/12 border-solid border-2 border-gray-200 mb-4">
          <h3 className="text-lg font-semibold ">{editedItem?.nome}</h3>
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
          />
          <SelectField
            label="Tipo"
            name="typeInput"
            required={true}
            options={[
              { value: "PoliticaPrivacidade", text: "Política de Privacidade" },
              { value: "TermosUso", text: "Termos de Uso" },
              {
                value: "PoliticaTermoAutor",
                text: "Política de Termo de Autor",
              },
            ]}
            initialValue={editedItem?.type}
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
          />
          <InputField
            label="Publicar"
            name="publishInput"
            required={true}
            type="checkbox"
            initialValue={editedItem?.versao}
            id={uuid + editedItem?.versao}
            classNameInput={["py-2", "px-3 accent-pink-500 mt-auto w-10 h-6"]}
            className={[
              "flex gap-2",
              "text-gray-700",
              "leading-tight",
              "mt-5",
              "mb-1",
            ]}
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

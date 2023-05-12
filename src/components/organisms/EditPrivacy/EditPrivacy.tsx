import { useState, useEffect } from "react";
import { PrivacyItem } from "@/types/types";
import { Editor } from "@tinymce/tinymce-react";
import { useSelector } from "react-redux";
import { selectPrivacyItem } from "@/Redux/Reducers/privacySlice";

export const EditPrivacy: React.FC = () => {
  const item = useSelector(selectPrivacyItem);
  const [editedItem, setEditedItem] = useState<PrivacyItem | null>(item);

  useEffect(() => {
    setEditedItem(item);
    console.log("item", item);
  }, [item]);

  const handleEditorChange = (content: string, editor: unknown): void => {
    console.log("Content was updated:", content);
    console.log("Editor was updated:", editor); // precisamos melhorar o editor e aplicar o PUT da API
  };

  return (
    <div className=" flex flex-col items-center justify-center p-4 ">
      <h2 className="text-2xl font-semibold mb-4">Editar</h2>
      <div className=" p-2  w-10/12">
        <div className="flex p-2 py-4 bg-white justify-between w-12/12">
          <h3 className="text-lg font-semibold ">{editedItem?.name}</h3>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
            Salvar
          </button>
        </div>
        <Editor
          apiKey={process.env.TINY_API_KEY}
          initialValue={"Funktoon"}
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
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

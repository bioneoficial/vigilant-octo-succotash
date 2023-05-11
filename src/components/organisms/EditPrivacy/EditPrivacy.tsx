import { useState, useEffect } from "react";
import { PrivacyItem } from "@/types/types";
import { PrivacyItemStatus, PrivacyItemType } from "@/utils/enums";
import { Editor } from "@tinymce/tinymce-react";

interface EditPrivacyProps {
  item: PrivacyItem;
}

export const EditPrivacy: React.FC<EditPrivacyProps> = ({
  item = {
    id: 2,
    name: "Termos de Uso",
    status: PrivacyItemStatus.Ativo,
    type: PrivacyItemType.TermosUso,
    version: 2,
    publish: true,
    date: "23/08/2022",
  },
}) => {
  const [editedItem, setEditedItem] = useState<PrivacyItem | undefined>({
    id: 2,
    name: "Termos de Uso",
    status: PrivacyItemStatus.Ativo,
    type: PrivacyItemType.TermosUso,
    version: 2,
    publish: true,
    date: "23/08/2022",
  });

  useEffect(() => {
    setEditedItem(item);
  }, [item]);

  const handleEditorChange = (content: string, editor: unknown): void => {
    console.log("Content was updated:", content);
    console.log("Editor was updated:", editor);
  };

  return (
    <div className="p-4 bg-gray-200">
      <h2 className="text-2xl font-semibold mb-4">Politicas de Privacidade</h2>
      <div className="border-b border-gray-200 py-4 bg-white">
        <h3 className="text-lg font-semibold">{editedItem?.name}</h3>
        <div className="border rounded p-2">
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
    </div>
  );
};

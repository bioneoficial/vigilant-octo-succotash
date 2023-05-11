import { EditPrivacy } from "@/components/organisms/EditPrivacy";
import { MainTemplate } from "@/components/templates/MainTemplate";
import { PrivacyItemStatus, PrivacyItemType } from "@/utils/enums";
import { useRouter } from "next/router";

const EditPrivacyPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log("id", id);

  return (
    <MainTemplate>
      <EditPrivacy
        item={{
          id: 2,
          name: "Termos de Uso",
          status: PrivacyItemStatus.Ativo,
          type: PrivacyItemType.TermosUso,
          version: 2,
          publish: true,
          date: "23/08/2022",
        }}
      />
    </MainTemplate>
  );
};

export default EditPrivacyPage;

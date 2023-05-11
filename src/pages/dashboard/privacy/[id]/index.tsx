import { EditPrivacy } from "@/components/organisms/EditPrivacy";
import { PrivacyItemStatus, PrivacyItemType } from "@/utils/enums";
import { useRouter } from "next/router";

const PrivacyItemPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Privacy Item {id}</h1>
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
      {/* Renderizar os detalhes do item aqui */}
    </div>
  );
};

export default PrivacyItemPage;

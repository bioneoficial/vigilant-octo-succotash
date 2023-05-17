import { MainTemplate } from "@/components/templates/MainTemplate";
import { useState } from "react";
import { BannerSelection } from "@/components/molecules/BannerSelection";
import { UserForm } from "@/components/molecules/UserForm";
import { SelectField } from "@/components/atoms/SelectField";
import { InputField } from "@/components/atoms/InputField";

export default function ConfigPage(): JSX.Element {
  const [showBannerSelection, setShowBannerSelection] = useState<boolean>(true);
  const [showCheckLandingPageApp, setShowCheckLandingPageApp] =
    useState<boolean>(true);
  const [bannerLink, setBannerLink] = useState<string>("open_subscription");
  const [urlImageBannerSelection, setUrlImageBannerSelection] =
    useState<string>("https://i.imgur.com/ClzPk2w.png");

  const handleSubmitConfig = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();
  };

  const handleSubmitUser = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return (
    <MainTemplate>
      <div className="flex flex-col items-center text-center">
        <h2 className="ml-6 mb-4 text-2xl font-semibold">Configurações</h2>
        <div className="flex  gap-10">
          <div className="border border-gray-950">
            <form method="POST" action="#" onSubmit={handleSubmitConfig}>
              <InputField
                type="number"
                name="count_items_home"
                label="Quantidade de items da home"
                initialValue={10}
                classNameInput={[
                  "mt-1",
                  "block",
                  "w-full",
                  "border border-gray-500",
                  "rounded-md",
                  "shadow-sm",
                  "focus:border-indigo-300",
                  "focus:ring",
                  "focus:ring-indigo-200",
                  "focus:ring-opacity-50",
                ]}
              />
              <InputField
                type="number"
                name="bombando_count_days"
                label="Bombando X (bombando nos ultimos X dias)"
                initialValue={7}
                classNameInput={[
                  "mt-1",
                  "block",
                  "w-full",
                  "border",
                  "border-gray-500",
                  "rounded-md",
                  "shadow-sm",
                  "focus:border-indigo-300",
                  "focus:ring",
                  "focus:ring-indigo-200",
                  "focus:ring-opacity-50",
                ]}
              />
              <InputField
                type="checkbox"
                name="show_banner_selection"
                label="Habilitar banner seleções"
                initialValue={showBannerSelection ? "true" : "false"}
                onChange={(e): void => setShowBannerSelection(e.target.checked)}
                className={["ml-2", "block", "text-gray-900"]}
                classNameInput={["h-5", "w-5", "text-indigo-600"]}
              />
              {showBannerSelection && (
                <BannerSelection
                  urlImageBannerSelection={urlImageBannerSelection}
                  setUrlImageBannerSelection={setUrlImageBannerSelection}
                  showCheckLandingPageApp={showCheckLandingPageApp}
                  setShowCheckLandingPageApp={setShowCheckLandingPageApp}
                  bannerLink={bannerLink}
                  setBannerLink={setBannerLink}
                />
              )}
              <button
                type="submit"
                className="  bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
              >
                Salvar configuração
              </button>
            </form>
          </div>
          <div className="border border-gray-950">
            <UserForm
              handleSubmitUser={handleSubmitUser}
              urlImageBannerSelection={urlImageBannerSelection}
              setUrlImageBannerSelection={setUrlImageBannerSelection}
            />
          </div>
        </div>
        <div className="border border-gray-950 bg-gray-200  ">
          <h3>Exportação de usuários do sistema</h3>
          <SelectField
            label="Filtro de usuários"
            options={[
              { value: "author", text: "Autores" },
              { value: "users", text: "Usuários" },
              { value: "subscribers", text: "Assinantes" },
              { value: "all", text: "Todos" },
            ]}
            name="ExportUsers"
            className={[
              " mt-1 flex flex-col w-full py-2 px-3  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
            ]}
          />

          <button
            id="export-users-btn"
            className="  bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          >
            Exportar usuários
          </button>
        </div>
      </div>
    </MainTemplate>
  );
}

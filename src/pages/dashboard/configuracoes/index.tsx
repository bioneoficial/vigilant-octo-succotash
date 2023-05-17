import { MainTemplate } from "@/components/templates/MainTemplate";
import { useState } from "react";
import { BannerSelection } from "@/components/molecules/BannerSelection";
import { UserForm } from "@/components/molecules/UserForm";

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
      <div className="flex flex-col items-center">
        <h2 className="ml-6 mb-4 text-2xl font-semibold">Configurações</h2>
        <div className="flex  gap-10">
          <div className="border border-gray-950">
            <form
              method="POST"
              action="https://funktoon.com/dashboard/configurations/update/conf"
              onSubmit={handleSubmitConfig}
            >
              <>
                <label className="text-gray-700">
                  Quantidade de items da home
                </label>
                <input
                  type="number"
                  name="count_items_home"
                  value="10"
                  className=" mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </>
              <>
                <label className="text-gray-700">
                  Bombando $variavel dias (bombando nos ultimos X dias)
                </label>
                <input
                  type="number"
                  name="bombando_count_days"
                  value="7"
                  className=" mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </>
              <div className="form-check form-switch toggle-switch mb-30">
                <input
                  type="checkbox"
                  checked={showBannerSelection}
                  onChange={(): void =>
                    setShowBannerSelection(!showBannerSelection)
                  }
                  id="checkBannerSelection"
                  className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
                />
                <label
                  htmlFor="checkBannerSelection"
                  className="ml-2 block text-gray-900"
                >
                  Habilitar banner seleções
                </label>
              </div>
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
        <div className="border border-gray-950">
          <h3>Exportação de usuários do sistema</h3>
          <div className="col-md-4 mt-4">
            <label className="text-gray-700">
              Filtro de usuários
              <select
                id="typeExport"
                className=" mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="author">Autores</option>
                <option value="users">Usuários</option>
                <option value="subscribers">Assinantes</option>
                <option selected={true} value="all">
                  Todos
                </option>
              </select>
            </label>
            <button
              id="export-users-btn"
              className="  bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
            >
              Exportar usuários
            </button>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
}

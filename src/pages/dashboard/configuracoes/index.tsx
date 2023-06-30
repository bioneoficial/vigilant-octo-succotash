import { MainTemplate } from "@/components/templates/MainTemplate";
import { useState } from "react";
import { UserForm } from "@/components/molecules/UserForm";
import { ExportUsers } from "@/components/molecules/ExportUsers";
import { ConfigForm } from "@/components/molecules/ConfigForm";

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
          <ConfigForm
            showBannerSelection={showBannerSelection}
            setShowBannerSelection={setShowBannerSelection}
            urlImageBannerSelection={urlImageBannerSelection}
            setUrlImageBannerSelection={setUrlImageBannerSelection}
            showCheckLandingPageApp={showCheckLandingPageApp}
            setShowCheckLandingPageApp={setShowCheckLandingPageApp}
            bannerLink={bannerLink}
            setBannerLink={setBannerLink}
            onSubmit={handleSubmitConfig}
          />
          <div className="border border-gray-950">
            <UserForm
              handleSubmitUser={handleSubmitUser}
              urlImageBannerSelection={urlImageBannerSelection}
              setUrlImageBannerSelection={setUrlImageBannerSelection}
            />
          </div>
        </div>
        <ExportUsers />
      </div>
    </MainTemplate>
  );
}

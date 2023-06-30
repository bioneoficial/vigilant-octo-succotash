import { ChangeEvent } from "react";
import { InputField } from "@/components/atoms/InputField";
import { BannerSelection } from "@/components/molecules/BannerSelection";
import { ConfigFormProps } from "@/types/types";

export const ConfigForm = ({
  showBannerSelection,
  setShowBannerSelection,
  urlImageBannerSelection,
  setUrlImageBannerSelection,
  showCheckLandingPageApp,
  setShowCheckLandingPageApp,
  bannerLink,
  setBannerLink,
  onSubmit,
}: ConfigFormProps): JSX.Element => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setShowBannerSelection(e.target.checked);
  };

  return (
    <div className="border border-gray-950">
      <form method="POST" action="#" onSubmit={onSubmit}>
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
          onChange={handleInputChange}
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
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
        >
          Salvar configuração
        </button>
      </form>
    </div>
  );
};

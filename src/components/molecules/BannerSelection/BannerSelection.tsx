import { BannerSelectionProps } from "@/types/types";
import React from "react";



export const BannerSelection: React.FC<BannerSelectionProps> = ({
  urlImageBannerSelection,
  setUrlImageBannerSelection,
  showCheckLandingPageApp,
  setShowCheckLandingPageApp,
  //   bannerLink,
  //   setBannerLink,
}) => {
  //   const handleBannerLinkChange = (
  //     event: React.ChangeEvent<HTMLInputElement>
  //   ): void => {
  //     setBannerLink(event.target.value);
  //   };

  const handleUrlImageBannerSelectionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setUrlImageBannerSelection(event.target.value);
  };

  const handleShowCheckLandingPageAppChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setShowCheckLandingPageApp(event.target.checked);
  };

  return (
    <div className="bg-gray-200 rounded-sm shadow-2xl">
      <h3>Imagem Banner (Acima do seleções)</h3>

      <div>
        <label htmlFor="urlImageBannerSelection">Banner Image URL:</label>
        <input
          type="text"
          id="urlImageBannerSelection"
          value={urlImageBannerSelection}
          onChange={handleUrlImageBannerSelectionChange}
        />
      </div>
      <div>
        <input
          type="checkbox"
          id="showCheckLandingPageApp"
          checked={showCheckLandingPageApp}
          onChange={handleShowCheckLandingPageAppChange}
        />
        <label htmlFor="showCheckLandingPageApp">
          Show Check Landing Page App
        </label>
      </div>
      {/* <label htmlFor="bannerLink">Banner Link:</label>
      <input ENTENDER A LOGICA DISSO
        type="text"
        id="bannerLink"
        value={bannerLink}
        onChange={handleBannerLinkChange}
      /> */}
    </div>
  );
};

import React from "react";

interface BannerSelectionProps {
  urlImageBannerSelection: string;
  setUrlImageBannerSelection: React.Dispatch<React.SetStateAction<string>>;
  showCheckLandingPageApp: boolean;
  setShowCheckLandingPageApp: React.Dispatch<React.SetStateAction<boolean>>;
  bannerLink: string;
  setBannerLink: React.Dispatch<React.SetStateAction<string>>;
}

export const BannerSelection: React.FC<BannerSelectionProps> = ({
  urlImageBannerSelection,
  setUrlImageBannerSelection,
  showCheckLandingPageApp,
  setShowCheckLandingPageApp,
  bannerLink,
  setBannerLink,
}) => {
  const handleBannerLinkChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setBannerLink(event.target.value);
  };

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
    <div>
      <h3>Banner Selection</h3>
      <div>
        <label htmlFor="bannerLink">Banner Link:</label>
        <input
          type="text"
          id="bannerLink"
          value={bannerLink}
          onChange={handleBannerLinkChange}
        />
      </div>
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
    </div>
  );
};

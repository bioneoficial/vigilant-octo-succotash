import FooterHomePage from "@/components/organisms/FooterHomePage/FooterHomePage";
import { HeaderHome } from "@/components/organisms/HeaderHome";
import { HomepageSecaoContainer } from "@/components/organisms/HomepageSecaoContainer";
import React from "react";

function selosPage(): JSX.Element {
  // with endpoint ready, just map the HomepageSecaoContainer component
  return (
    <div className="grid grid-cols-1 fold:gap-0 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5">
      <HeaderHome />

      <div
        id="contentContainer"
        className="mx-auto flex flex-col fold:gap-12 md:gap-16 lg:gap-12 xl:gap-16 fold:w-11/12 md:w-11/12"
      >
        <HomepageSecaoContainer sectionTitle={"Selos"} sectionItems={[]} />
      </div>
      <FooterHomePage />
    </div>
  );
}

export default selosPage;

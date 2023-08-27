/* eslint-disable @next/next/no-img-element */
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import { HeaderHome } from "@/components/organisms/HeaderHome";
import FooterHomePage from "@/components/organisms/FooterHomePage/FooterHomePage";
import Faixa1 from "@/components/molecules/Faixa1/Faixa1";
import { HomepageSecaoContainer } from "@/components/organisms/HomepageSecaoContainer";
import PrincipalBanner from "@/components/organisms/PrincipalBanner/PrincipalBanner";
import BarNotificationStores from "@/components/organisms/BarNotificationStores/BarNotificationStores";
import { ContentHomeResponse, HomePageSection, MyError } from "@/types/types";
import { useQuery } from "react-query";
import { getContentHome } from "@/api/contentHome";
import { useEffect, useState } from "react";
import CookieBanner from "@/components/organisms/CookieBanner/CookieBanner";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/store";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Home(): JSX.Element {
  const dispatch = useDispatch();
  const { isLoading, error, data } = useQuery<ContentHomeResponse, MyError>(
    "getContentHome",
    getContentHome
  );
  const [bannerItems, setBannerItems] = useState<HomePageSection[]>([]);
  const showCookieBanner = useSelector(
    (state: RootState) => state.cookieBanner.showBanner
  );

  useEffect(() => {
    if (data) {
      if (data.BANNER) {
        setBannerItems(data.BANNER);
      }
    }
  }, [data, dispatch]);

  if (error) {
    return <div>There was an error loading the content: {error.message}</div>;
  }

  const filteredEntries =
    typeof data === "object" && data !== null
      ? Object.entries(data).filter(([key]) => key !== "BANNER")
      : [];
  return (
    <div className="grid grid-cols-1 fold:gap-0 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5">
      <HeaderHome />
      {!isLoading && !error && (
        <>
          <PrincipalBanner bannerItems={bannerItems} />
          <Faixa1 />
          <div
            id="contentContainer"
            className="mx-auto flex flex-col fold:gap-12 md:gap-16 lg:gap-12 xl:gap-16 fold:w-11/12 md:w-11/12"
          >
            {filteredEntries.map(([key, value]) => (
              <HomepageSecaoContainer
                key={key}
                sectionTitle={key}
                sectionItems={value}
              />
            ))}
          </div>
          <FooterHomePage />
          <BarNotificationStores />
          {showCookieBanner && <CookieBanner />}
        </>
      )}
    </div>
  );
}

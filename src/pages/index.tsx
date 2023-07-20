/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import { HeaderHome } from "@/components/organisms/HeaderHome";
import FooterHomePage from "@/components/organisms/FooterHomePage/FooterHomePage";
import Faixa1 from "@/components/molecules/Faixa1/Faixa1";
import { HomepageSecaoContainer } from "@/components/organisms/HomepageSecaoContainer";
import PrincipalBanner, {
  BannerItem,
} from "@/components/organisms/PrincipalBanner/PrincipalBanner";
import BarNotificationStores from "@/components/organisms/BarNotificationStores/BarNotificationStores";
import { ContentHomeResponse, MyError } from "@/types/types";
import { useQuery } from "react-query";
import { getContentHome } from "@/api/contentHome";
import { useEffect, useState } from "react";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Home(): JSX.Element {
  const { isLoading, error, data } = useQuery<ContentHomeResponse, MyError>(
    "getContentHome",
    getContentHome
  );
  const [bannerItems, setBannerItems] = useState<BannerItem[]>([]);

  useEffect(() => {
    if (data) {
      if (data.BANNER) {
        setBannerItems(data.BANNER);
      }
    }
  }, [data]);

  console.log(data?.BANNER);
  console.log(typeof data?.BANNER);
  return (
    <div className="grid grid-cols-1 fold:gap-0 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5">
      <HeaderHome />
      <PrincipalBanner bannerItems={bannerItems} />
      <Faixa1 />
      <div
        id="contentContainer"
        className="mx-auto flex flex-col fold:gap-12 md:gap-16 lg:gap-12 xl:gap-16 fold:w-11/12 md:w-11/12"
      >
        <HomepageSecaoContainer sectionTitle="BOMBANDO" />
        <HomepageSecaoContainer sectionTitle="ORIGINAIS" />
        <HomepageSecaoContainer sectionTitle="PREMIUM" />
        <HomepageSecaoContainer sectionTitle="MÊS DO ORGULHO" />
        <HomepageSecaoContainer sectionTitle="INKO" />
        <HomepageSecaoContainer sectionTitle="SELEÇÕES" />
        <HomepageSecaoContainer sectionTitle="INDEPENDENTES" />
      </div>
      <FooterHomePage />
      <BarNotificationStores />
    </div>
  );
}

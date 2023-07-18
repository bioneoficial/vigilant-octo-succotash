/* eslint-disable @next/next/no-img-element */
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import { HeaderHome } from "@/components/organisms/HeaderHome";
import FooterHomePage from "@/components/organisms/FooterHomePage/FooterHomePage";
import Faixa1 from "@/components/molecules/Faixa1/Faixa1";
import { HomepageSecaoContainer } from "@/components/organisms/HomepageSecaoContainer";
import PrincipalBanner from "@/components/organisms/PrincipalBanner/PrincipalBanner";
import BarNotificationStores from "@/components/organisms/BarNotificationStores/BarNotificationStores";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Home(): JSX.Element {
  return (
    <div className="grid grid-cols-1 fold:gap-0 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5">
      <HeaderHome />
      <PrincipalBanner />
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

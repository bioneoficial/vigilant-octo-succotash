import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import Image from "next/image";
import { HeaderHome } from "@/components/organisms/HeaderHome/HeaderHome";

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col">
      <HeaderHome />
      <div className="relative w-full h-96">
        <Swiper
          navigation
          pagination={{ clickable: true }}
          className="w-full h-full"
        >
          <SwiperSlide className="w-full h-full">
            <Image
              src="https://d34oo2ynf8ecvf.cloudfront.net/production/author-7370/serie-579/banner.jpg"
              alt="ImgNet"
              fill={true}
              style={{ objectFit: "fill" }}
            />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <Image
              src="/images/logo-funktoon.svg"
              alt="ImgNet"
              fill={true}
              style={{ objectFit: "fill" }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <h4 className="headline-section demi-font mt-3 mb-3 font-bold uppercase">
          Bombando
        </h4>
      </div>
    </div>
  );
}

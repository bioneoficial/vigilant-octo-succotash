import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import Image from "next/image";
import { HeaderHome } from "@/components/organisms/HeaderHome/HeaderHome";
import { useEffect, useState } from "react";

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

export default function Home(): JSX.Element {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = (): void => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let swiperHeight = "h-96"; // Default height

  if (screenWidth >= 1300) {
    swiperHeight = "h-80";
  } else if (screenWidth >= 1280) {
    swiperHeight = "h-72";
  } else if (screenWidth >= 1200) {
    swiperHeight = "h-64";
  } else if (screenWidth >= 1100) {
    swiperHeight = "h-60";
  } else if (screenWidth >= 1000) {
    swiperHeight = "h-56";
  } else {
    swiperHeight = "h-52";
  }

  return (
    <div className="flex flex-col">
      <HeaderHome />
      <div className={`relative w-full ${swiperHeight}`}>
        <Swiper
          navigation
          pagination={{ clickable: true }}
          slidesPerView={1}
          breakpoints={{
            767: {
              slidesPerView: 3,
            },
          }}
          className="w-full  h-full"
        >
          <SwiperSlide className="w-full h-full">
            <Image
              src="https://d34oo2ynf8ecvf.cloudfront.net/production/author-7370/serie-579/banner.jpg"
              alt="ImgNet"
              fill={true}
              quality={100}
              style={{ objectFit: "fill" }}
            />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <Image
              src="/images/logo-funktoon.svg"
              alt="ImgNet"
              fill={true}
              quality={100}
              style={{ objectFit: "fill" }}
            />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <Image
              src="https://d34oo2ynf8ecvf.cloudfront.net/production/funktoon/serie-300/banner.jpg"
              alt="ImgNet"
              fill={true}
              quality={100}
              style={{ objectFit: "fill" }}
            />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <Image
              src="https://d34oo2ynf8ecvf.cloudfront.net/production/funktoon/serie-50/banner.jpg"
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

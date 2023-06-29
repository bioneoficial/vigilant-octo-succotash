import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HeaderHome } from "@/components/organisms/HeaderHome";

SwiperCore.use([Navigation, Pagination]);

const mockToRemove = [
  {
    src: "https://d34oo2ynf8ecvf.cloudfront.net/production/author-7370/serie-579/banner.jpg",
    alt: "ImgNet",
  },
  {
    src: "/images/logo-funktoon.svg",
    alt: "ImgNet",
  },
  {
    src: "https://d34oo2ynf8ecvf.cloudfront.net/production/funktoon/serie-300/banner.jpg",
    alt: "ImgNet",
  },
  {
    src: "https://d34oo2ynf8ecvf.cloudfront.net/production/funktoon/serie-50/banner.jpg",
    alt: "ImgNet",
  },
];
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

  let swiperHeight = "h-96";

  if (screenWidth >= 1300) {
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
          {mockToRemove.map((item, index) => (
            <SwiperSlide key={index} className="w-full h-full">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                quality={100}
                style={{ objectFit: "fill" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="bg-[faixa-1]">ae</div>
      <div>
        <h4 className="headline-section demi-font mt-3 mb-3 font-bold uppercase">
          Bombando
        </h4>
      </div>
    </div>
  );
}

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import { HeaderHome } from "@/components/organisms/HeaderHome";

SwiperCore.use([Navigation, Pagination]);

const mockToRemove = [
  {
    src: "https://d34oo2ynf8ecvf.cloudfront.net/production/author-35/serie-20/banner.jpg",
    alt: "ImgNet",
  },
  {
    src: "https://d34oo2ynf8ecvf.cloudfront.net/production/author-7370/serie-579/banner.jpg",
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
  // const [screenWidth, setScreenWidth] = useState(0);

  // useEffect(() => {
  //   setScreenWidth(window.innerWidth);

  //   const handleResize = (): void => {
  //     setScreenWidth(window.innerWidth);
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // let swiperHeight = "h-96";

  // if (screenWidth >= 1300) {
  //   swiperHeight = "h-72";
  // } else if (screenWidth >= 1200) {
  //   swiperHeight = "h-64";
  // } else if (screenWidth >= 1100) {
  //   swiperHeight = "h-60";
  // } else if (screenWidth >= 1000) {
  //   swiperHeight = "h-56";
  // } else {
  //   swiperHeight = "h-52";
  // }

  return (
    <div className="flex flex-col">
      <HeaderHome />
      <div className={` relative w-full h-96`}>
        <Swiper
          navigation
          pagination={{ clickable: true }}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1250: {
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
                style={{ objectFit: "scale-down" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="relative bg-faixa-1 bg-cover  bg-center h-32 lg:max-2xlh-40 md:h-36 sm:h-32 fold:h-24 w-full flex flex-row-reverse justify-around ">
        <div className="relative w-1/6 h-auto">
          <Image
            src="/images/FKTN.svg"
            fill
            style={{ objectFit: "cover" }}
            quality={100}
            alt="FKTN image"
            className=" overflow-visible"
          />
        </div>
        <div className="relative w-1/6 h-auto">
          <Image
            src="/images/leia-quadrinhos.svg"
            style={{ objectFit: "cover" }}
            fill
            quality={100}
            alt="Leia Quadrinhos image"
            className=" overflow-visible"
          />
        </div>
      </div>
      <div>
        <h4 className="headline-section demi-font mt-3 mb-3 font-bold uppercase">
          Bombando
        </h4>
      </div>
    </div>
  );
}

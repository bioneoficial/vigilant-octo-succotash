/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import { HeaderHome } from "@/components/organisms/HeaderHome";

SwiperCore.use([Navigation, Pagination, Autoplay]);

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
  {
    src: "https://d34oo2ynf8ecvf.cloudfront.net/production/author-18889/serie-730/banner.jpg",
    alt: "ImgNet",
  },
  {
    src: "https://d34oo2ynf8ecvf.cloudfront.net/production/funktoon/serie-13/banner.jpg",
    alt: "ImgNet",
  },
];
const mockCoverRemove = [
  {
    src: "https://d34oo2ynf8ecvf.cloudfront.net/production/author-7809/serie-482/cover.jpg",
    alt: "ImgNet",
  },
  {
    src: "https://d34oo2ynf8ecvf.cloudfront.net/production/author-5031/serie-75/cover.jpg",
    alt: "ImgNet",
  },
  {
    src: "https://d34oo2ynf8ecvf.cloudfront.net/production/author-127/serie-68/cover.jpg",
    alt: "ImgNet",
  },
  {
    src: "https://d34oo2ynf8ecvf.cloudfront.net/production/author-127/serie-350/cover.jpg",
    alt: "ImgNet",
  },
  {
    src: "https://d34oo2ynf8ecvf.cloudfront.net/production/author-5299/serie-192/cover.jpg",
    alt: "ImgNet",
  },
  {
    src: "https://d34oo2ynf8ecvf.cloudfront.net/production/author-66/serie-44/cover.jpg",
    alt: "ImgNet",
  },
  {
    src: "https://d34oo2ynf8ecvf.cloudfront.net/production/author-13197/serie-420/cover.jpg",
    alt: "ImgNet",
  },
  {
    src: "https://d34oo2ynf8ecvf.cloudfront.net/production/author-12548/serie-689/cover.jpg",
    alt: "ImgNet",
  },
  {
    src: "https://d34oo2ynf8ecvf.cloudfront.net/production/author-66/serie-179/cover.jpg",
    alt: "ImgNet",
  },
];

export default function Home(): JSX.Element {
  return (
    <div className="grid grid-cols-1 fold:gap-0 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5">
      <HeaderHome />
      <div>
        <Swiper
          navigation
          pagination={{ clickable: true }}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={1}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1250: {
              slidesPerView: 3,
            },
          }}
          className="sm:h-96 fold:h-80"
        >
          {mockToRemove.map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                quality={100}
                style={{ objectFit: "contain" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="bg-faixa-1 bg-cover bg-center flex flex-row-reverse justify-around fold:h-32 sm:h-44">
        <div className="relative w-full fold:max-sm:h-4/6  fold:max-sm:translate-y-1/4 md:max-2xl:h-full">
          <Image
            src="/images/FKTN.svg"
            fill
            style={{ objectFit: "fill" }}
            quality={100}
            alt="FKTN image"
            className=" overflow-visible"
          />
        </div>
        <div className="relative w-full fold:max-sm:h-4/6 lg:h-48 xl:h-48 2xl:h-48 fold:max-sm:translate-y-1/3 translate-y-2">
          <Image
            src="/images/leia-quadrinhos.svg"
            style={{ objectFit: "fill" }}
            fill
            quality={100}
            alt="Leia Quadrinhos image"
            className=" overflow-visible"
          />
        </div>
      </div>
      <div
        id="contentContainer"
        className="mx-auto flex flex-col fold:gap-12 md:gap-16 lg:gap-12 xl:gap-16 fold:w-11/12 md:w-11/12"
      >
        <div
          id="bombandoContainer"
          className="fold:h-32 sm:h-40 md:h-44 lg:h-56 xl:h-60 2xl:h-72"
        >
          <h4 className=" font-bold "> BOMBANDO</h4>
          <Swiper
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            slidesPerView={4}
            grabCursor={true}
            className=" h-full"
            breakpoints={{
              768: {
                slidesPerView: 4,
              },
              820: {
                slidesPerView: 5,
              },
            }}
          >
            {mockCoverRemove.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  quality={100}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div
          id="originaisContainer"
          className="fold:h-32 sm:h-40 md:h-44 lg:h-56 xl:h-60 2xl:h-72"
        >
          <h4 className=" font-bold">ORIGINAIS</h4>
          <Swiper
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            slidesPerView={4}
            className="h-full"
            breakpoints={{
              768: {
                slidesPerView: 4,
              },
              820: {
                slidesPerView: 5,
              },
            }}
          >
            {mockCoverRemove.map((item, index) => (
              <SwiperSlide key={index} className="h-full">
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
        <div
          id="premiumContainer"
          className="fold:h-32 sm:h-40 md:h-44 lg:h-56 xl:h-60 2xl:h-72"
        >
          <h4 className=" font-bold ">PREMIUM</h4>
          <Swiper
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            slidesPerView={4}
            className="h-full"
            breakpoints={{
              768: {
                slidesPerView: 4,
              },
              820: {
                slidesPerView: 5,
              },
            }}
          >
            {mockCoverRemove.map((item, index) => (
              <SwiperSlide key={index} className="h-full">
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
        <div
          id="mesContainer"
          className="fold:h-32 sm:h-40 md:h-44 lg:h-56 xl:h-60 2xl:h-72"
        >
          <h4 className=" font-bold ">MÊS DO ORGULHO</h4>
          <Swiper
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            slidesPerView={4}
            className="h-full"
            breakpoints={{
              768: {
                slidesPerView: 4,
              },
              820: {
                slidesPerView: 5,
              },
            }}
          >
            {mockCoverRemove.map((item, index) => (
              <SwiperSlide key={index} className=" h-full">
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
        <div
          id="inkoContainer"
          className="fold:h-32 sm:h-40 md:h-44 lg:h-56 xl:h-60 2xl:h-72"
        >
          <h4 className=" font-bold ">INKO</h4>
          <Swiper
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            slidesPerView={4}
            className="h-full"
            breakpoints={{
              768: {
                slidesPerView: 4,
              },
              820: {
                slidesPerView: 5,
              },
            }}
          >
            {mockCoverRemove.map((item, index) => (
              <SwiperSlide key={index} className="h-full">
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
        <div
          id="bannerSecundarioContainer"
          className="fold:h-24 sm:h-32 md:h-40 lg:h-48 xl:h-60 2xl:h-64"
        >
          <div className="relative h-full">
            <Image
              src={"https://i.imgur.com/i3IT94k.png"}
              alt="Banner-Secundario"
              fill
              quality={100}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <div
          id="selecoesContainer"
          className="fold:h-32 sm:h-40 md:h-44 lg:h-56 xl:h-60 2xl:h-72"
        >
          <h4 className=" font-bold ">SELEÇÕES</h4>
          <Swiper
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            slidesPerView={4}
            className="h-full"
            breakpoints={{
              768: {
                slidesPerView: 4,
              },
              820: {
                slidesPerView: 5,
              },
            }}
          >
            {mockCoverRemove.map((item, index) => (
              <SwiperSlide key={index}>
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
        <div
          id="independentesContainer"
          className="fold:h-32 sm:h-40 md:h-44 lg:h-56 xl:h-60 2xl:h-72"
        >
          <h4 className=" font-bold ">INDEPENDENTES</h4>
          <Swiper
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            slidesPerView={4}
            className=" h-full"
            breakpoints={{
              768: {
                slidesPerView: 4,
              },
              820: {
                slidesPerView: 5,
              },
            }}
          >
            {mockCoverRemove.map((item, index) => (
              <SwiperSlide key={index}>
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
      </div>
      <div className="mt-10 bg-faixa-1 bg-cover bg-center flex flex-row justify-around fold:h-32 sm:h-44 mb-10 fold:max-sm:mb-1">
        <div className="flex flex-row w-full h-48 fold:max-sm:h-4/6 md:max-2xl:h-full translate-y-2 fold:max-sm:translate-y-5 md:translate-y-0 lg:translate-y-0">
          <img
            src="/images/baixe.svg"
            style={{ objectFit: "scale-down" }}
            alt="baixe aqui o app"
            className=" overflow-visible"
          />
          <img
            src="/images/botoes_app_store_android.svg"
            style={{ objectFit: "scale-down" }}
            alt="Playstore"
            className=" overflow-visible"
          />
          <img
            src="/images/botoes_app_store_ios.svg"
            style={{ objectFit: "scale-down" }}
            alt="AppleStore"
            className=" overflow-visible"
          />
        </div>
        <div className="relative w-full fold:max-sm:h-4/6  md:h-40 lg:h-44 xl:h-44 2xl:h-48 translate-y-2 fold:max-sm:translate-y-5 md:max-2xl:translate-y-0 ">
          <Image
            src="/images/faca-parte.svg"
            style={{ objectFit: "fill" }}
            fill
            quality={100}
            alt="Faca parte da comunidade"
            className=" overflow-visible"
          />
        </div>
      </div>
    </div>
  );
}

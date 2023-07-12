import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import { HeaderHome } from "@/components/organisms/HeaderHome";
import Link from "next/link";

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
    <div className="grid  grid-cols-1 fold:gap-0 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5">
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
      <section id="autor" className="py-10 px-6">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center">
            <h2 className="font-semibold">
              Quer publicar seu quadrinho no <b>FUNKTOON?</b>
            </h2>
            <p className="mt-2">
              Se você também gosta de contar suas histórias, o
              <span className="uppercase text-purple-600">Funktoon</span> é o
              lugar perfeito para você estourar! Já pensou ficar famoso com seu
              quadrinho?
            </p>
          </div>
        </div>
      </section>

      <section className="download py-10 px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left">
            <h1 className="font-semibold uppercase">
              Baixe o Aplicativo e leia as histórias onde quiser
            </h1>
            <div className="flex justify-center md:justify-start mt-4 space-x-2">
              <Link
                href="https://apps.apple.com/us/app/funktoon/id6444811852"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/apple.svg"
                  alt="Baixar funktoon na apple"
                  width={150}
                  height={45}
                />
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.funktoon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/google.png"
                  alt="Baixar funktoon no Google"
                  width={150}
                  height={45}
                />
              </Link>
            </div>
          </div>
          <div className="mt-6 md:mt-0">
            <Image
              src="https://i.imgur.com/uPR8ptY.png"
              alt="dowload funktoon"
              width={200}
              height={200}
            />
          </div>
        </div>
      </section>

      <footer className="section-footer py-10 px-6 bg-gray-200 mt-10">
        <div className="flex flex-col items-center justify-center">
          <div>
            <Image
              src="/images/logo-funktoon.svg"
              alt="Funktoon"
              width={100}
              height={50}
            />
            <ul className="flex space-x-3 mt-4">
              <li>
                <Link
                  href="https://www.facebook.com/funktoonapp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/facebook.svg"
                    alt="Funktoon"
                    width={100}
                    height={50}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/funktoonapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/twitter.svg"
                    alt="Funktoon"
                    width={100}
                    height={50}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/funktoonapp/?hl=pt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/instagram.png"
                    alt="Funktoon"
                    width={100}
                    height={50}
                  />
                </Link>
              </li>
            </ul>
            <ul className="mt-4 space-y-1">
              <li>
                <Link href="https://funktoon.com/termos-e-privacidade?type=policy">
                  Política de privacidade e Cookies
                </Link>
              </li>
              <li>
                <Link href="https://funktoon.com/termos-e-privacidade?type=terms">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

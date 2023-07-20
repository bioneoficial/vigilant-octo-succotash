import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export interface BannerItem {
  vitrine_conteudo_id: number;
  vitrine_conteudo_nome: string;
  vitrine_conteudo_ordem: number;
  conteudo_nome: string;
  conteudo_id: number;
  imagem_banner: string;
  imagem_capa: string;
  cvc_id: number;
  cvc_ordem: number;
}

export interface PrincipalBannerProps {
  bannerItems: BannerItem[];
}

const PrincipalBanner: React.FC<PrincipalBannerProps> = ({
  bannerItems,
}): JSX.Element => {
  const sortedBannerItems = bannerItems.sort(
    (a, b) => a.cvc_ordem - b.cvc_ordem
  );

  return (
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
        {sortedBannerItems.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={item.imagem_banner}
              alt={item.conteudo_nome}
              fill
              quality={100}
              style={{ objectFit: "contain" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PrincipalBanner;

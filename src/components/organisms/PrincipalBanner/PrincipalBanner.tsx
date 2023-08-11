import { HomePageSection } from "@/types/types";
import { handleContentClick } from "@/utils/utils";
import Image from "next/image";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";

export interface PrincipalBannerProps {
  bannerItems: HomePageSection[];
}

const PrincipalBanner: React.FC<PrincipalBannerProps> = ({
  bannerItems,
}): JSX.Element => {
  const sortedBannerItems = bannerItems.sort(
    (a, b) => a.cvc_ordem - b.cvc_ordem
  );
  const router = useRouter();

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
              onClick={(): Promise<void> =>
                handleContentClick(router, item.conteudo_id)
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PrincipalBanner;

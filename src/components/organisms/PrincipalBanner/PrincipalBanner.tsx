import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { mockToRemove } from "@/utils/const";

const PrincipalBanner: React.FC = (): JSX.Element => {
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
  );
};

export default PrincipalBanner;

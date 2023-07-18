import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { mockCoverRemove } from "@/utils/const";

interface HomepageSecaoContainerProps {
  sectionTitle: string;
}

export const HomepageSecaoContainer: React.FC<HomepageSecaoContainerProps> = ({
  sectionTitle,
}) => {
  return (
    <div className="fold:h-32 sm:h-40 md:h-44 lg:h-56 xl:h-60 2xl:h-72">
      <h4 className="font-bold">{sectionTitle}</h4>
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
  );
};

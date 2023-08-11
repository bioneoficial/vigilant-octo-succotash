import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { HomePageSection } from "@/types/types";
import { handleContentClick } from "@/utils/utils";
import { useRouter } from "next/router";

interface HomepageSecaoContainerProps {
  sectionTitle: string;
  sectionItems: HomePageSection[];
}

export const HomepageSecaoContainer: React.FC<HomepageSecaoContainerProps> = ({
  sectionTitle,
  sectionItems,
}) => {
  const router = useRouter();

  const handleShowMore = (): void => {
    window.location.href = `/vitrine-conteudo/content/${sectionTitle.toLowerCase()}`;
  };
  return (
    <div className="fold:h-32 sm:h-40 md:h-44 lg:h-56 xl:h-60 2xl:h-72">
      <h4 className="font-bold flex justify-between mb-2 px-6">
        <span>{sectionTitle}</span>
        <span
          onClick={handleShowMore}
          className="cursor-pointer hover:text-slate-400"
        >
          Ver mais
        </span>
      </h4>
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
        {sectionItems.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={item.imagem_capa}
              alt={item.conteudo_nome}
              fill
              quality={100}
              style={{ objectFit: "scale-down", cursor: "pointer" }}
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

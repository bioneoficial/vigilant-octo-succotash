import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import { HeaderHome } from "@/components/organisms/HeaderHome";
import FooterHomePage from "@/components/organisms/FooterHomePage/FooterHomePage";
import { MyError } from "@/types/types";
import { useQuery } from "react-query";
import { getBombando, getVitrineProps } from "@/api/contentHome";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import { apiConfig } from "@/api/apiConfig";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Home(): JSX.Element {
  const { isLoading, error, data } = useQuery<getVitrineProps[], MyError>(
    "getBombando",
    getBombando
  );
  const router = useRouter();

  const handleContentClick = async (conteudo_id: number): Promise<void> => {
    try {
      const response = await axios.get(
        `${apiConfig.conteudoApiUrl}/${conteudo_id}`
      );
      const slug = response.data.slug;
      router.push(`/conteudo/${slug}`);
      sessionStorage.setItem("content", JSON.stringify(response.data));
    } catch (err) {
      console.error("Failed to fetch content by ID:", err);
    }
  };

  if (error) {
    return <div>There was an error loading the content: {error.message}</div>;
  }

  return (
    <div className="grid grid-cols-1 fold:gap-0 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5">
      <HeaderHome />
      {!isLoading && !error && (
        <>
          <div
            id="contentContainer"
            className="mx-auto flex flex-row flex-wrap fold:gap-12 md:gap-12 lg:gap-12 xl:gap-16 fold:w-11/12 md:w-11/12"
          >
            {data?.map((item, index) => (
              <div
                onClick={(): Promise<void> =>
                  handleContentClick(item.conteudo_id)
                }
                key={index}
              >
                <Image
                  src={item.imagem_capa}
                  alt={item.conteudo_nome}
                  width={200}
                  height={200}
                  quality={100}
                  style={{ objectFit: "scale-down" }}
                />
              </div>
            ))}
          </div>
          <FooterHomePage />
        </>
      )}
    </div>
  );
}

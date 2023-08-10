import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import { HeaderHome } from "@/components/organisms/HeaderHome";
import FooterHomePage from "@/components/organisms/FooterHomePage/FooterHomePage";
import { MyError } from "@/types/types";
import { useQuery } from "react-query";
import Image from "next/image";
import { Comic, getAllByConteudoId } from "@/api/episodio";
import axios from "axios";
import { apiConfig } from "@/api/apiConfig";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Home(): JSX.Element {
  const content = sessionStorage.getItem("content");
  const parsedContent = JSON.parse(content || "{}");
  const { data, isLoading, error } = useQuery<Comic[], MyError>(
    "getAllByConteudoId",
    () => getAllByConteudoId(parsedContent.conteudo_id),
    { enabled: !!parsedContent }
  );
  if (error) {
    return <div>There was an error loading the content: {error.message}</div>;
  }
  console.log(data);
  //   const getAllByConteudoId = async (id: number): Promise<Comic[]> => {
  //     const response = await axios.get(`${apiConfig.episodioApiUrl}/${id}`);
  //     return response.data;
  //   };
  //   console.log(getAllByConteudoId(482));

  return (
    <div className="grid grid-cols-1 fold:gap-0 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5">
      <HeaderHome />
      <div className="content-name">{parsedContent.nome}</div>
      <div
        className="content-description"
        dangerouslySetInnerHTML={{ __html: parsedContent.descricao }}
      ></div>

      {/* {!isLoading && !error && (
        <>
          <div
            id="contentContainer"
            className="mx-auto flex flex-row flex-wrap fold:gap-12 md:gap-12 lg:gap-12 xl:gap-16 fold:w-11/12 md:w-11/12"
          >
            {data?.map((item, index) => (
              <Image
                key={index}
                src={item.imagem_capa}
                alt={item.conteudo_nome}
                width={200}
                height={200}
                quality={100}
                style={{ objectFit: "scale-down" }}
              />
            ))}
          </div>
          <FooterHomePage />
        </>
      )} */}
    </div>
  );
}

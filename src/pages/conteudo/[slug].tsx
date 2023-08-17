import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import { HeaderHome } from "@/components/organisms/HeaderHome";
import FooterHomePage from "@/components/organisms/FooterHomePage/FooterHomePage";
import { MyError } from "@/types/types";
import { useQuery } from "react-query";
import {
  Comic,
  ComicWithImages,
  getAllByConteudoId,
  getAllImagesByEpisodioId,
} from "@/api/episodio";
import PlayerContainer from "@/components/organisms/PlayerContainer/PlayerContainer";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Home(): JSX.Element {
  const content = sessionStorage.getItem("content");
  const parsedContent = JSON.parse(content || "{}");
  const { data, isLoading, error } = useQuery<Comic[], MyError>( // todos episodiso aqui
    "getAllByConteudoId",
    () => getAllByConteudoId(Number(parsedContent.id)),
    { enabled: !!parsedContent }
  );

  const {
    data: episodeImage,
    isLoading: isEpisodeLoading,
    error: episodeError,
  } = useQuery<ComicWithImages, MyError>(
    ["getAllImagesByEpisodioId", data?.[0]?.id],
    () => getAllImagesByEpisodioId(data?.[0]?.id || 0),
    { enabled: !!data?.[0].id }
  );

  if (error || episodeError) {
    return (
      <div>
        There was an error loading the content:
        {error?.message ?? episodeError?.message}
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 fold:gap-0 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5 overflow-y-auto h-screen">
      <HeaderHome />
      <div className="text-center">{parsedContent.nome}</div>
      <div
        className="mx-4 my-2"
        dangerouslySetInnerHTML={{ __html: parsedContent.descricao }}
      ></div>
      {!isLoading && !error && data && data.length > 0 && episodeImage && (
        <PlayerContainer
          data={{ name: data[0].nome }}
          isEpisodeLoading={isEpisodeLoading}
          episodeImage={episodeImage}
        />
      )}
      <FooterHomePage />
    </div>
  );
}

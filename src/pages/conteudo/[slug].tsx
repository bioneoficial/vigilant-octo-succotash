import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import { HeaderHome } from "@/components/organisms/HeaderHome";
import FooterHomePage from "@/components/organisms/FooterHomePage/FooterHomePage";
import { MyError } from "@/types/types";
import { useQuery } from "react-query";
import Image from "next/image";
import {
  Comic,
  ComicWithImages,
  getAllByConteudoId,
  getAllImagesByEpisodioId,
} from "@/api/episodio";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Home(): JSX.Element {
  const content = sessionStorage.getItem("content");
  const parsedContent = JSON.parse(content || "{}");
  const { data, isLoading, error } = useQuery<Comic[], MyError>(
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
  console.log(data);
  return (
    <div className="grid grid-cols-1 fold:gap-0 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5">
      <HeaderHome />
      <div className="content-name">{parsedContent.nome}</div>
      <div
        className="content-description"
        dangerouslySetInnerHTML={{ __html: parsedContent.descricao }}
      ></div>
      {!isLoading && !error && data && data.length > 0 && (
        <div id="playerContainer">
          <h2>{data[0].nome}</h2>

          {isEpisodeLoading ? (
            <p>Loading episode images...</p>
          ) : (
            episodeImage?.images?.map((image, index) => (
              <Image
                key={index}
                src={image.url}
                alt={`Image ${image.order} for episode ${data[0].nome}`}
                width={200}
                height={200}
                quality={100}
                style={{ objectFit: "scale-down" }}
              />
            ))
          )}
        </div>
      )}
      <FooterHomePage />
    </div>
  );
}

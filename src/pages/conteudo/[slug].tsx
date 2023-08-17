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
import { useState } from "react";

export default function Home(): JSX.Element {
  const [selectedEpisodeId, setSelectedEpisodeId] = useState<number | null>(
    null
  );
  const content = sessionStorage.getItem("content");
  const parsedContent = JSON.parse(content || "{}");
  const { data, isLoading, error } = useQuery<Comic[], MyError>( // todos episodiso aqui
    ["getAllByConteudoId", parsedContent.id],
    () => getAllByConteudoId(Number(parsedContent.id)),
    { enabled: !!parsedContent }
  );

  const {
    data: episodeImage,
    isLoading: isEpisodeLoading,
    error: episodeError,
  } = useQuery<ComicWithImages, MyError>(
    ["getAllImagesByEpisodioId", selectedEpisodeId || data?.[0]?.id],
    () => getAllImagesByEpisodioId(selectedEpisodeId || data?.[0]?.id || 0),
    { enabled: !!selectedEpisodeId || !!data?.[0].id }
  );
  const currentEpisode =
    data?.find((episode) => episode.id === selectedEpisodeId) || data?.[0];

  if (error || episodeError) {
    return (
      <div>
        There was an error loading the content:
        {error?.message ?? episodeError?.message}
      </div>
    );
  }

  const ContentDetail: React.FC<{ data: Comic[] }> = ({ data }) => (
    <div className="p-4">
      <div
        className="relative h-64 bg-center bg-cover mb-6 overflow-visible"
        style={{ backgroundImage: `url(${parsedContent.imagem_banner})` }}
      >
        <img
          src={parsedContent.imagem_capa}
          alt="Capa"
          className="absolute bottom-[-10%] left-0 w-1/3 h-[80%] object-contain"
        />
      </div>
      <h2 className="text-2xl mb-4 text-center font-bold">
        {parsedContent.nome}
      </h2>
      <div
        className="mx-4 my-2 text-center"
        dangerouslySetInnerHTML={{ __html: parsedContent.descricao }}
      ></div>
      <div className="h-[500px]  overflow-y-scroll custom-scrollbar">
        <h4 className="font-bold text-center mb-2">Episódios</h4>
        {data.map((item, index) => (
          <div
            key={index}
            className="text-center mb-4 cursor-pointer"
            onClick={(): void => setSelectedEpisodeId(item.id)}
          >
            <h4>{item.nome}</h4>
            <img src={item.thumb} alt={item.nome} className="mx-auto" />
          </div>
        ))}
      </div>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #9ca3af;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background-color: #f3f4f6;
          border-radius: 4px;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #9ca3af #f3f4f6;
        }
      `}</style>
    </div>
  );

  return (
    <div className="grid grid-cols-1 fold:gap-0 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5 overflow-y-auto h-full">
      <HeaderHome />

      {!isLoading && !error && data && data.length > 0 && episodeImage && (
        <div className="md:grid md:grid-cols-3 gap-4 ml-8 ">
          <PlayerContainer
            className="md:col-span-2"
            nome={currentEpisode?.nome ?? ""}
            isEpisodeLoading={isEpisodeLoading}
            episodeImage={episodeImage}
          />
          <ContentDetail data={data} />
        </div>
      )}
      <FooterHomePage />
    </div>
  );
}

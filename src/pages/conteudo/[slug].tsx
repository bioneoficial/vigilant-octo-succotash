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

  const ContentDetail: React.FC<{ data: Comic[] }> = ({ data }) => (
    <div className="p-4">
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
          <div key={index} className="text-center mb-4">
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
    <div className="grid grid-cols-1 fold:gap-0 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5 overflow-y-auto h-screen">
      <HeaderHome />

      {!isLoading && !error && data && data.length > 0 && episodeImage && (
        <div className="md:grid md:grid-cols-2 gap-4">
          <PlayerContainer
            data={{ name: data[0].nome }}
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

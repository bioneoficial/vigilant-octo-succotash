import React from "react";

interface PlayerContainerProps {
  className?: string;
  nome: string;
  isEpisodeLoading: boolean;
  episodeImage: {
    images: Array<{
      order: number;
      url: string;
    }>;
  };
}

const PlayerContainer: React.FC<PlayerContainerProps> = ({
  nome,
  isEpisodeLoading,
  episodeImage,
  className,
}) => {
  return (
    <div
      id="playerContainer"
      className={`flex flex-col items-center justify-center h-screen ${className}`}
    >
      <h2 className="text-2xl mb-4">{nome}</h2>
      <div className="h-screen w-full overflow-y-scroll">
        {!isEpisodeLoading &&
          episodeImage.images.map((image, index) => (
            <div className="w-full h-full relative mb-4" key={index}>
              <img
                src={image.url}
                alt={nome}
                style={{ objectFit: "scale-down" }}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PlayerContainer;

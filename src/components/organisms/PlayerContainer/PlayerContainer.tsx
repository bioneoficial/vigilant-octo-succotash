import React from "react";
import Image from "next/image";

interface PlayerContainerProps {
  data: {
    name: string;
  };
  isEpisodeLoading: boolean;
  episodeImage: {
    images: Array<{
      order: number;
      url: string;
    }>;
  };
}

const PlayerContainer: React.FC<PlayerContainerProps> = ({
  data,
  isEpisodeLoading,
  episodeImage,
}) => {
  return (
    <div
      id="playerContainer"
      className="flex flex-col items-center justify-center h-screen"
    >
      <h2 className="text-2xl mb-4">{data.name}</h2>
      {!isEpisodeLoading &&
        episodeImage.images.map((image, index) => (
          <div className="w-full h-full relative" key={index}>
            <Image
              src={image.url}
              alt={data.name}
              fill
              style={{ objectFit: "scale-down" }}
              quality={100}
            />
          </div>
        ))}
    </div>
  );
};

export default PlayerContainer;

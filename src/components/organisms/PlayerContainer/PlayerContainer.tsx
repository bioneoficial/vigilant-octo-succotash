import React from "react";
import Image from "next/image";

interface PlayerContainerProps {
  className?: string;
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
  className,
}) => {
  return (
    <div
      id="playerContainer"
      className={`flex flex-col items-center justify-center h-screen ${className}`}
    >
      <h2 className="text-2xl mb-4">{data.name}</h2>
      <div className="h-screen w-full overflow-y-scroll">
        {!isEpisodeLoading &&
          episodeImage.images.map((image, index) => (
            <div className="w-full h-full relative mb-4" key={index}>
              <Image
                src={image.url}
                alt={data.name}
                fill
                style={{ objectFit: "contain" }}
                quality={100}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PlayerContainer;

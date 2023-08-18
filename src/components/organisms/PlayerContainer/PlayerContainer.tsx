import React, { useEffect } from "react";

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
  onScroll: (progress: number) => void;
}

const PlayerContainer: React.FC<PlayerContainerProps> = ({
  nome,
  isEpisodeLoading,
  episodeImage,
  className,
  onScroll,
}) => {
  useEffect(() => {
    const handleScroll = (): void => {
      const container = document.getElementById("playerContainer");
      if (container) {
        const { scrollTop, scrollHeight, clientHeight } = container;
        const scrollProgress =
          (scrollTop / (scrollHeight - clientHeight)) * 100;
        onScroll(scrollProgress);
      }
    };

    const container = document.getElementById("playerContainer");
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [onScroll]);

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen ${className}`}
    >
      <h2 className="text-2xl mb-4">{nome}</h2>
      <div className="h-screen w-full overflow-y-scroll" id="playerContainer">
        {!isEpisodeLoading &&
          episodeImage.images.map((image, index) => (
            <div className="relative mb-0" key={index}>
              <img
                src={image.url}
                alt={nome}
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PlayerContainer;

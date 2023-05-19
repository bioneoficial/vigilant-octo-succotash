import { Button } from "@/components/atoms/Button";
import { SelosItemProps, Stamps } from "@/types/types";
import Image from "next/image";

const SelosContainer: React.FC<SelosItemProps> = ({ Selos }) => {
  return (
    <>
      {Selos.map((selo: Stamps) => (
        <div
          className="border border-black shadow-lg  shadow-black flex flex-col "
          key={selo.name + selo.image}
        >
          <Button
            title=""
            status={true}
            onClick={(): unknown => window.alert("X")}
            className={["absolute self-end"]}
            icon={{ src: "/images/x-mark.svg", alt: "x-mark" }}
          />
          {selo.name}
          <Image src={selo.image} alt={selo.name} width={100} height={100} />
        </div>
      ))}
    </>
  );
};

export default SelosContainer;

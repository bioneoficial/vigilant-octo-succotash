import Image from "next/image";

const Faixa1: React.FC = (): JSX.Element => {
  return (
    <div className="bg-faixa-1 bg-cover bg-center flex flex-row-reverse justify-around fold:h-32 sm:h-44">
      <div className="relative w-full fold:max-sm:h-4/6  fold:max-sm:translate-y-1/4 md:max-2xl:h-full">
        <Image
          src="/images/FKTN.svg"
          fill
          style={{ objectFit: "fill" }}
          quality={100}
          alt="FKTN image"
          className=" overflow-visible"
        />
      </div>
      <div className="relative w-full fold:max-sm:h-4/6 lg:h-48 xl:h-48 2xl:h-48 fold:max-sm:translate-y-1/3 translate-y-2">
        <Image
          src="/images/leia-quadrinhos.svg"
          style={{ objectFit: "fill" }}
          fill
          quality={100}
          alt="Leia Quadrinhos image"
          className=" overflow-visible"
        />
      </div>
    </div>
  );
};

export default Faixa1;

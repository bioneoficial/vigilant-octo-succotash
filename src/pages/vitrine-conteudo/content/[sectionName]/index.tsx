import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import { HeaderHome } from "@/components/organisms/HeaderHome";
import FooterHomePage from "@/components/organisms/FooterHomePage/FooterHomePage";
import { MyError } from "@/types/types";
import { useQuery } from "react-query";
import { getByNome, getVitrineProps } from "@/api/contentHome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Home(): JSX.Element {
  const router = useRouter();
  const { sectionName } = router.query;
  const { isLoading, error, data } = useQuery<getVitrineProps[], MyError>(
    "getByNome",
    () => getByNome(sectionName as string),
    { enabled: !!sectionName }
  );

  console.log(data);

  if (error) {
    return <div>There was an error loading the content: {error.message}</div>;
  }

  return (
    <div className="grid grid-cols-1 fold:gap-0 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5">
      <HeaderHome />
      {!isLoading && !error && (
        <>
          <div
            id="contentContainer"
            className="mx-auto flex flex-row flex-wrap fold:gap-12 md:gap-12 lg:gap-12 xl:gap-16 fold:w-11/12 md:w-11/12"
          >
            {data?.map((item, index) => (
              <Link
                href={`/vitrine-conteudo/content/${item.conteudo_nome}`}
                key={index}
              >
                <Image
                  src={item.imagem_capa}
                  alt={item.conteudo_nome}
                  width={200}
                  height={200}
                  quality={100}
                  style={{ objectFit: "scale-down" }}
                />
              </Link>
            ))}
          </div>
          <FooterHomePage />
        </>
      )}
    </div>
  );
}

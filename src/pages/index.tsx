import "swiper/swiper.css"; // core Swiper
import "swiper/css/navigation";
import "swiper/css/pagination";
import { HeaderHome } from "@/components/organisms/HeaderHome/HeaderHome";

export default function Home(): JSX.Element {
  // Array of slide properties for rendering the slides
  // const slides = [
  //   // You can add or remove slides from this array
  //   {
  //     imgSrc:
  //       "https://d34oo2ynf8ecvf.cloudfront.net/production/author-7370/serie-579/banner.jpg",
  //     alt: "ImgNet",
  //     link: "https://d34oo2ynf8ecvf.cloudfront.net/production/author-7370/serie-579/banner.jpg",
  //   },
  //   {
  //     imgSrc:
  //       "https://d34oo2ynf8ecvf.cloudfront.net/production/author-7370/serie-579/banner.jpg",
  //     alt: "ImgNet",
  //     link: "https://d34oo2ynf8ecvf.cloudfront.net/production/author-7370/serie-579/banner.jpg",
  //   },
  //   {
  //     imgSrc:
  //       "https://d34oo2ynf8ecvf.cloudfront.net/production/author-7370/serie-579/banner.jpg",
  //     alt: "ImgNet",
  //     link: "https://d34oo2ynf8ecvf.cloudfront.net/production/author-7370/serie-579/banner.jpg",
  //   },
  //   // ...
  // ];

  return (
    <div className="flex flex-col">
      <HeaderHome />
      <div>
        <h4 className="headline-section demi-font mt-3 mb-3 font-bold uppercase">
          Bombando
        </h4>
      </div>

      {/* Repeat the above structure for other sections */}
    </div>
  );
}

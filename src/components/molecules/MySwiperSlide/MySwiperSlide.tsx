import Link from "next/link";
import Image from "next/image";
import "swiper/swiper.css"; // core Swiper
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperSlide } from "swiper/react";

type SwiperSlideProps = {
  imgSrc: string;
  alt: string;
  link: string;
};

const MySwiperSlide: React.FC<SwiperSlideProps> = ({ imgSrc, alt, link }) => (
  <SwiperSlide>
    <Link href={link}>
      <Image src={imgSrc} alt={alt} width={333} height={137} />
    </Link>
  </SwiperSlide>
);

export default MySwiperSlide;

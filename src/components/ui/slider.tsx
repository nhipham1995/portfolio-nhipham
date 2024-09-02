"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

// import Swiper styles
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ImageComponent from "./image";
import { HTMLAttributes } from "react";
type SliderProps = {
  photos: {
    alt: string;
    src: string;
  }[];
  classNames?: HTMLAttributes<HTMLDivElement>["className"];
  slidePerView: number;
};
export default function Slider({
  photos,
  classNames,
  slidePerView,
}: SliderProps) {
  return (
    <div
      // className="max-w-96 "
      className={classNames}
    >
      <Swiper
        height={100}
        spaceBetween={30}
        slidesPerView={slidePerView}
        modules={[Navigation, Pagination, A11y]}
        effect={""}
        loop={true}
        centeredSlides={true}
        grabCursor={true}
        coverflowEffect={{
          rotate: 0,
          slideShadows: false,
        }}
        className="coverflow"
        navigation={true}
      >
        {photos?.map((photo, i) => (
          <SwiperSlide key={photo.alt + i}>
            <ImageComponent
              src={photo.src}
              height={1200}
              width={1200}
              alt={photo.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

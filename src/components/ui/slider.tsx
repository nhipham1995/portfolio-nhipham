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
import { useObserveElementWidth } from "../utils/use-observer-element-width";

type SliderProps = {
  photos: {
    alt: string;
    src: string;
  }[];
  classNames?: HTMLAttributes<HTMLDivElement>["className"];
  slidePerView: number;
  slideStyle?: string;
  height?: number;
};

export default function Slider({
  photos,
  classNames,
  slidePerView,
  slideStyle,
  height,
}: SliderProps) {
  const { width, ref } = useObserveElementWidth<HTMLDivElement>();

  return (
    <div className={classNames} ref={ref}>
      <Swiper
        height={100}
        spaceBetween={30}
        slidesPerView={
          slidePerView > 3
            ? width > 1500
              ? slidePerView
              : width > 800
              ? slidePerView / 2
              : 2
            : slidePerView
        }
        modules={[Navigation, Pagination, A11y]}
        effect={""}
        loop={true}
        centeredSlides={true}
        grabCursor={true}
        coverflowEffect={{
          rotate: 0,
          slideShadows: false,
        }}
        className={`coverflow ${slideStyle}`}
        navigation={true}
      >
        {photos?.map((photo, i) => (
          <SwiperSlide key={photo.alt + i}>
            <ImageComponent
              src={photo.src ?? "helo"}
              height={1200}
              width={1200}
              alt={photo.alt}
            />
          </SwiperSlide>
        ))}

        <style jsx global>{`
          .swiper-slide.swiper-slide-active,
          .swiper-slide.swiper-slide-active.h-48,
          .swiper-slide.swiper-slide-next,
          .swiper-slide.swiper-slide-prev {
            height: ${height ?? 250}px !important;
          }
          .swiper {
            height: ${height ?? 250}px;
          }
        `}</style>
      </Swiper>
    </div>
  );
}

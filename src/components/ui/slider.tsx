"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import ImageComponent from "./image";
import { HTMLAttributes } from "react";
import { useObserveElementWidth } from "../utils/use-observer-element-width";

// import Swiper styles
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type SliderProps = {
  photos: {
    alt: string;
    src: string;
  }[];
  classNames?: HTMLAttributes<HTMLDivElement>["className"];
  slidePerView: number;
  slideStyle?: string;
  height?: number;
  firstImg?: number;
};

export default function Slider({
  photos,
  classNames,
  slidePerView,
  slideStyle,
  height,
  firstImg,
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
        {firstImg ? (
          <div>
            {photos?.slice(firstImg, photos.length - 1).map((photo, i) => (
              <SwiperSlide key={photo.alt + i}>
                <ImageComponent
                  src={photo.src ?? "helo"}
                  height={1200}
                  width={1200}
                  alt={photo.alt}
                />
              </SwiperSlide>
            ))}
            {photos?.slice(firstImg).map((photo, i) => (
              <SwiperSlide key={photo.alt + i}>
                <ImageComponent
                  src={photo.src ?? "helo"}
                  height={1200}
                  width={1200}
                  alt={photo.alt}
                />
              </SwiperSlide>
            ))}
          </div>
        ) : (
          photos?.map((photo, i) => (
            <SwiperSlide key={photo.alt + i}>
              <ImageComponent
                src={photo.src ?? "helo"}
                height={1200}
                width={1200}
                alt={photo.alt}
              />
            </SwiperSlide>
          ))
        )}
        {/* manual set the height of slider by going through css */}
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

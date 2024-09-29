"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import ImageComponent from "./image";
import { useMemo } from "react";

// import Swiper styles
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SliderProps } from "./slider-with-width-observe";

export default function Slider({
  photos,
  classNames,
  slidePerView,
  slideStyle,
  height,
  firstImg,
  activeImg,
}: SliderProps) {
  let newArr = photos;
  if (firstImg) {
    newArr = useMemo(() => {
      const firstSlice = photos?.slice(firstImg, photos.length);
      const secondSlice = photos?.slice(0, firstImg);
      return [...firstSlice, ...secondSlice];
    }, [photos, firstImg]);
  } else {
    newArr = newArr.slice(0, 4);
  }

  const onSlideChangeHandler = (index: number) => {
    let realIndex = index + (firstImg ?? 0);
    if (realIndex >= photos.length) {
      realIndex -= photos.length;
    }
    activeImg?.(realIndex);
  };

  return (
    <div className={classNames}>
      <Swiper
        // height={height}
        spaceBetween={30}
        slidesPerView={slidePerView}
        modules={[Navigation, Pagination, A11y]}
        loop={true}
        centeredSlides={true}
        grabCursor={true}
        coverflowEffect={{
          rotate: 0,
          slideShadows: false,
        }}
        className={`coverflow ${slideStyle}`}
        navigation={true}
        onSlideChange={(e) => onSlideChangeHandler(e.realIndex)}
      >
        {newArr.map((photo, i) => (
          <SwiperSlide key={photo.alt + i}>
            <ImageComponent
              src={photo.src ?? "/images/404.png"}
              height={1200}
              width={1200}
              alt={photo.alt}
            />
          </SwiperSlide>
        ))}

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

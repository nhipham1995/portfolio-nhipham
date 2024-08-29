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

export default function Slider({
  photos,
}: {
  photos: {
    alt: string;
    src: string;
  }[];
}) {
  return (
    <div className="max-w-96 ">
      <Swiper
        height={100}
        spaceBetween={30}
        slidesPerView={1}
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
              className=""
            />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <ImageComponent
            src="/album1/1.jpg"
            height={1200}
            width={1200}
            alt="test"
            className=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <ImageComponent
            src="/album1/2.jpg"
            height={1200}
            width={1200}
            alt="test"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ImageComponent
            src="/album1/3.jpg"
            height={1200}
            width={1200}
            alt="test"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ImageComponent
            src="/album1/4.jpg"
            height={1000}
            width={1000}
            alt="test"
          />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}

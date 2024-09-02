"use client";
import Container from "@/components/container";
import Title from "@/components/ui/title";
import { useParams } from "next/navigation";
import { albums } from "../../data";
import ImageComponent from "@/components/ui/image";
import { DateIcon, LocationIcon } from "@/components/svgs";
import Slider from "@/components/ui/slider";
import Pagination from "@/components/pagination";
import { ChangeEvent, useState } from "react";
import ItemNumberController from "@/components/item-number-controller";

export default function Page() {
  const params = useParams<{ id: string }>();
  const [currentPhotos, setcurrentPhotos] = useState(0);
  const [photoPerTime, setPhotoPerTime] = useState(3);
  let blog = albums.find((album) => album.id === Number(params?.id));
  const pageTotal = Math.ceil((blog?.photos.length ?? 0) / photoPerTime);

  const handlerPaginationChange = (paginationInd: number) => {
    setcurrentPhotos(paginationInd);
  };

  const handlerInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    setPhotoPerTime(value);
  };

  return (
    <div>
      <div className="max-h-96">
        <ImageComponent
          src={blog?.photos[0].src ?? ""}
          height={1500}
          width={2500}
          alt={blog?.photos[0].alt ?? ""}
          className="h-96"
        />
      </div>
      <Container>
        <Title
          content={`Album ${params?.id}: ${blog?.title}`}
          style="font-beloved-sans mt-12"
        />
        <div className="flex justify-center items-center gap-1 ">
          <DateIcon size={20} className="fill-leafgreen-700" />
          <p className="text-base text-gray-400 font-extralight font-kennerly my-3">
            {blog?.date}
          </p>
          <div className="w-5"></div>
          <LocationIcon size={20} className="fill-leafgreen-700" />
          <p className="text-base text-gray-400 font-extralight font-kennerly my-3">
            {blog?.position}
          </p>
        </div>
      </Container>
      <Slider photos={blog?.photos.slice(0, 8) ?? []} slidePerView={4} />

      <div className="grid grid-cols-2 gap-10 px-16">
        <div className="flex justify-center items-center">
          <Title
            content={blog?.description ?? ""}
            type="h3"
            style="font-filo leading-10 tracking-extratight px-8"
            fontWeight="font-light"
            color="text-primary-500"
          />
        </div>

        <div className="flex  mt-10 ">
          <ImageComponent
            src={blog?.photos[2].src ?? ""}
            height={1500}
            width={1500}
            alt={blog?.photos[2].alt ?? ""}
            className="h-128 "
          />
        </div>
      </div>
      <Container className="mt-32">
        <Title
          content="Galerie"
          type="h3"
          fontWeight="font-bold"
          style="font-plantin lg:text-4xl xl:text-5xl flex justify-center "
        />
        <div className="flex justify-end">
          <ItemNumberController
            photoPerTime={photoPerTime}
            handlerInputChange={(e) => handlerInputChange(e)}
            photoTotal={blog?.photos.length ?? 0}
          />
        </div>

        <div className="mt-8 grid grid-cols-3 gap-5">
          {blog?.photos
            .slice(
              currentPhotos * photoPerTime,
              (currentPhotos + 1) * photoPerTime
            )
            .map((photo, i) => {
              return (
                <ImageComponent
                  key={i}
                  src={photo?.src}
                  alt={photo?.alt}
                  height={500}
                  width={500}
                  className="max-h-64"
                />
              );
            })}
        </div>
        <Pagination
          onChange={(i) => handlerPaginationChange(i)}
          pageTotal={pageTotal}
        />
      </Container>
    </div>
  );
}

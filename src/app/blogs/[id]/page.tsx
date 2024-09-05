"use client";
import Container from "@/components/container";
import Title from "@/components/ui/title";
import { useParams } from "next/navigation";
import { albums } from "../../data";
import ImageComponent from "@/components/ui/image";
import { DateIcon, LocationIcon } from "@/components/svgs";
import Slider from "@/components/ui/slider";
import Pagination from "@/components/pagination";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import ItemNumberController from "@/components/item-number-controller";
import Modal from "@/components/modal";
// interface IParams extends ParsedUrlQuery {
//   slug: string;
// }

// interface PageParams {
//   id: string;
// }
// export const getStaticProps: GetStaticProps<PageParams> = async (context) => {
//   const { id } = context.params as IParams;
//   // Fetch images from an external API or local files
//   let blog = albums.find((album) => album.id === Number(id));
//   return {
//     props: {
//       blog,
//     },
//   };
// };
type argProps = {
  alt: string;
  src: string;
};
export default function Page() {
  const params = useParams<{ id: string }>();
  let blog = albums.find((album) => album.id === Number(params?.id));

  const [currentPhotos, setcurrentPhotos] = useState(0);
  const [photoPerTime, setPhotoPerTime] = useState(12);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const itemsRef = useRef<Map<argProps, HTMLDivElement> | null>(null);
  const modalRef = useRef<number | null>(null);

  const pageTotal = Math.ceil((blog?.photos.length ?? 0) / photoPerTime);

  function getMap() {
    if (itemsRef.current === null) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map<argProps, HTMLDivElement>();
    }
    return itemsRef.current;
  }

  function focusOnImage(image: any) {
    const map = getMap();
    const node = map.get(image);
    node?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }
  const handlerPaginationChange = (paginationInd: number) => {
    setcurrentPhotos(paginationInd);
  };

  const handlerInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setPhotoPerTime(value);
  };

  const handleImageClick = (image: argProps, i: number) => {
    // update the index of photo to send the clicked photos as first photo in Modal
    modalRef.current = i;
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isModalOpen]);
  return (
    <div>
      <Modal
        open={isModalOpen}
        photos={blog?.photos ?? []}
        modalClose={() => setIsModalOpen(false)}
        firstImg={modalRef.current ?? 0}
      />
      <div className="-z-50">
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
            style=" font-beloved-sans mt-12 text-center dark:text-primary-100"
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
        <Slider
          photos={blog?.photos.slice(0, 8) ?? []}
          slidePerView={4}
          firstImg={1}
        />

        <div className="grid xl:grid-cols-2 xl:gap-10 xl:px-16 mt-12 xl:mt-0 pt-10">
          <div className="flex justify-center items-center pb-24 xl:pb-0">
            <Title
              content={blog?.description ?? ""}
              type="h3"
              style="font-filo leading-10 tracking-extratight px-8  dark:text-primary-400"
              fontWeight="font-light"
              color="text-primary-500"
            />
          </div>

          <div className="flex ">
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
            style="font-plantin text-5xl mb-8 lg:mb-0 lg:text-6xl xl:text-7xl flex justify-center dark:text-primary-200 "
          />
          <div className="flex justify-end">
            <ItemNumberController
              photoPerTime={photoPerTime}
              handlerInputChange={(e) => handlerInputChange(e)}
              photoTotal={blog?.photos.length ?? 0}
            />
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-5">
            {blog?.photos
              .slice(
                currentPhotos * photoPerTime,
                (currentPhotos + 1) * photoPerTime
              )
              .map((photo, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => handleImageClick(photo, i)}
                    className="cursor-pointer"
                    ref={(node) => {
                      const map = getMap();
                      if (node) {
                        map.set(photo, node);
                      } else {
                        map.delete(photo);
                      }
                    }}
                  >
                    <ImageComponent
                      src={photo?.src}
                      alt={photo?.alt}
                      height={500}
                      width={500}
                      className="h-56 xl:max-h-64"
                    />
                  </div>
                );
              })}
          </div>
          <Pagination
            onChange={(i) => handlerPaginationChange(i)}
            pageTotal={pageTotal}
          />
        </Container>
      </div>
    </div>
  );
}

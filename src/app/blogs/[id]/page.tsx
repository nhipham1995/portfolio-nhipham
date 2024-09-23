"use client";
import Container from "@/components/container";
import Title from "@/components/ui/title";
import { notFound, useParams } from "next/navigation";
import { albums } from "../../data";
import ImageComponent from "@/components/ui/image";
import { DateIcon, LocationIcon } from "@/components/svgs";
import Pagination from "@/components/pagination";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import ItemNumberController from "@/components/item-number-controller";
import Modal from "@/components/modal";
import { EventEmitter } from "events";
import ObserveSlider from "@/components/ui/slider-with-width-observe";
type photoProps = {
  id: number;
  alt: string;
  src: string;
};

type BlogProps =
  | {
      id: number;
      title: string;
      description: string;
      date: string;
      position: string;
      demoImg: photoProps;
      photos: photoProps[];
    }
  | undefined;

const emitter = new EventEmitter();
emitter.setMaxListeners(20);

type argProps =
  | {
      alt: string;
      src: string;
      id: number;
    }
  | undefined;

const Page = () => {
  const params = useParams<{ id: string }>();
  const [blog, setBlog] = useState<BlogProps | undefined>(undefined);
  const [currentPhotos, setCurrentPhotos] = useState(0);
  const [photoPerTime, setPhotoPerTime] = useState(8);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const itemsRef = useRef<Map<argProps, HTMLDivElement> | null>(null);
  const modalRef = useRef<number | null>(null);
  const activeModalImg = useRef<number | null>(null);
  const pageTotal = Math.ceil((blog?.photos.length ?? 0) / photoPerTime);
  useEffect(() => {
    const fetchBlogData = () => {
      const data = albums.find((album) => album.id === Number(params?.id));
      if (data === undefined) notFound();
      setBlog(data);
    };
    fetchBlogData();
    // Event handler for custom event
    const handleEvent = () => {
      fetchBlogData(); // Update blog data on event
    };

    // Listen to the custom event
    emitter.on("customEvent", handleEvent);

    // Cleanup the listener on unmount
    return () => {
      emitter.off("customEvent", handleEvent);
    };
  }, [params?.id]);

  function getMap() {
    if (itemsRef.current === null) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map<argProps, HTMLDivElement>();
    }
    return itemsRef.current;
  }

  function focusOnImage(image: any) {
    const map = getMap();
    const node = map.get(image[0]);
    node?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "center",
    });
    node?.classList.add("border-focus");
    setTimeout(() => {
      node?.classList.remove("border-focus");
    }, 2500);
  }
  const handlerPaginationChange = (paginationInd: number) => {
    setCurrentPhotos(paginationInd);
  };

  const handlerInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setPhotoPerTime(value);
  };

  const handleImageClick = (i: number) => {
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

  // Ensure the component handles cases where blog might be undefined
  if (!blog) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Modal
        open={isModalOpen}
        photos={
          blog?.photos ?? [
            { alt: "Test for beginning", src: "/gallery/paris-sky/1.jpg" },
            { alt: "Test for beginning 2", src: "/gallery/paris-sky/2.jpg" },
          ]
        }
        modalClose={() => {
          setIsModalOpen(false);
          if (activeModalImg?.current !== null) {
            const currentPage = Math.ceil(
              (activeModalImg?.current + 1) / photoPerTime
            );
            const result = currentPage - 1;
            setCurrentPhotos(result);
            setTimeout(() => {
              focusOnImage(
                blog?.photos.filter(
                  (photo) => photo.id === (activeModalImg.current ?? 0)
                )
              ),
                [];
            });
          }
        }}
        firstImg={modalRef.current ?? 0}
        activeImg={(e) => {
          activeModalImg.current = e;
        }}
      />
      <div className="-z-50">
        <div className="max-h-96">
          {blog?.photos[0].src && (
            <ImageComponent
              src={blog?.demoImg?.src}
              height={1500}
              width={2500}
              alt={blog?.demoImg?.src ?? ""}
              className="h-96"
            />
          )}
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
        <ObserveSlider
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
            {blog?.photos[2].src && (
              <ImageComponent
                src={blog?.photos[2].src}
                height={1500}
                width={1500}
                alt={blog?.photos[2].alt ?? ""}
                className="h-128 "
              />
            )}
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

          <div className="mt-8 grid md:grid-cols-2  gap-12">
            {blog?.photos
              .slice(
                currentPhotos * photoPerTime,
                (currentPhotos + 1) * photoPerTime
              )
              .map((photo, i) => {
                return (
                  <div
                    key={i}
                    onClick={() =>
                      handleImageClick(currentPhotos * photoPerTime + i)
                    }
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
                      height={700}
                      width={700}
                      className="h-84 xl:h-96"
                    />
                  </div>
                );
              })}
          </div>
          {/* avoid next, prev icon is under the modal when modal is open */}
          {!isModalOpen && (
            <Pagination
              currentPage={currentPhotos}
              onChange={(i) => handlerPaginationChange(i)}
              pageTotal={pageTotal}
            />
          )}
        </Container>
      </div>
    </div>
  );
};

export default Page;

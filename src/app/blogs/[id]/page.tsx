"use client";
import Container from "@/components/container";
import Title from "@/components/ui/title";
import { useParams } from "next/navigation";
import { albums } from "../../data";
import ImageComponent from "@/components/ui/image";
import { DateIcon, LocationIcon } from "@/components/svgs";
export default function Page() {
  const params = useParams<{ id: string }>();
  console.log(params?.id);
  let blog = albums.find((album) => album.id === Number(params?.id));
  console.log(blog);
  // const First4Photos =
  return (
    <div>
      <div className="max-h-96">
        <ImageComponent
          src={blog?.photos[0].src ?? ""}
          height={1500}
          width={1500}
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
      <div className="grid grid-cols-4 gap-10 px-16">
        {blog?.photos.slice(0, 4).map((photo, i) => (
          <div className="col-span-1 mt-6">
            <ImageComponent
              key={i}
              src={photo.src ?? ""}
              height={1500}
              width={1500}
              alt={photo.alt ?? ""}
              className="h-56 rounded-xl"
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-10 px-16">
        <div className="flex justify-center items-center">
          {" "}
          <Title
            content={blog?.description ?? ""}
            type="h3"
            style="font-filo leading-10 tracking-extratight  px-8"
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
            className="h-128 rounded-xl"
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
      </Container>
      {/* <Title type="h2" content={blog?.title ?? ""} /> */}
    </div>
  );
}

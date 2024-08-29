import { HTMLAttributes } from "react";
import Title from "./ui/title";
import Button from "./ui/button";
import Link from "next/link";
import Slider from "./ui/slider";
import clsx from "clsx";
import { DateIcon, LocationIcon } from "./svgs";

type AlbumCardProps = {
  isImageRight?: boolean;
  photos: {
    alt: string;
    src: string;
  }[];
  title: string;
  description: string;
  className?: HTMLAttributes<HTMLDivElement>["className"];
  date?: string;
  location?: string;
  id: number;
};

export default function AlbumCard({
  photos,
  description,
  title,
  date,
  className,
  isImageRight,
  location,
  id,
}: AlbumCardProps) {
  return (
    <div
      className={`xl:grid xl:grid-cols-9 xl:gap-24 mb-24 xl:mb-32  ${className}`}
    >
      <div
        className={clsx(
          { "order-2": !isImageRight },
          "flex justify-center xl:col-span-3 "
        )}
      >
        <Slider photos={photos} />
      </div>
      <div className="mt-8 px-2 md:px-36 lg:px-64 xl:px-0 xl:mt-0 xl:col-span-6">
        <Title
          content={title.length > 90 ? title.slice(0, 90) + "..." : title}
          style="font-kennerly xl:text-lg "
          type="h3"
          color="text-primary-600"
          fontWeight="font-semibold"
        />
        <div className="flex items-center gap-1 ">
          <DateIcon size={20} className="fill-leafgreen-500" />
          <p className="text-sm text-gray-400 font-extralight font-kennerly my-3">
            {date}
          </p>
          <div className="w-5"></div>
          <LocationIcon size={20} className="fill-leafgreen-500" />
          <p className="text-sm text-gray-400 font-extralight font-kennerly my-3">
            {location}
          </p>
        </div>

        <p className="text-primary-500 text-light font-kennerly pt-2  xl:pr-10 leading-7 ">
          {description.length > 450
            ? description.slice(0, 450) + "..."
            : description}
        </p>
        <Link href={`/blogs/${id}`} className=" flex justify-end pr-10">
          <Button
            downloadable={false}
            des="Regarde plus"
            textStyle="font-light text-xs"
            fillWidth={false}
            className="max-w-48 p-1 cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
}

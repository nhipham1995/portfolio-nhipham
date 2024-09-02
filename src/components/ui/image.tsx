import { HTMLAttributes } from "react";
import Image from "next/image";

interface ImageType {
  src: string;
  height?: number;
  width?: number;
  alt: string;
  className?: HTMLAttributes<HTMLImageElement>["className"];
  size?: string;
}
export default function ImageComponent({
  src,
  height,
  width,
  alt,
  className,
  size = "",
}: ImageType) {
  return (
    <Image
      src={src}
      height={height}
      width={width}
      alt={alt}
      // add w-auto to avoid the warning error about size of image
      // className={`${className} w-auto`}
      className={className}
      priority={true}
      sizes={size}
    ></Image>
  );
}

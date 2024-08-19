import { HTMLAttributes } from "react";

interface ImageType {
  src: string;
  height?: number;
  width?: number;
  alt: string;
  className?: HTMLAttributes<HTMLImageElement>["className"];
}
export default function Image({
  src,
  height,
  width,
  alt,
  className,
}: ImageType) {
  return (
    <img
      src={src}
      height={height}
      width={width}
      alt={alt}
      className={className}
    ></img>
  );
}

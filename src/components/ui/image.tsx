import { CSSProperties, HTMLAttributes } from "react";
import Image from "next/image";

interface ImageType {
  src: string;
  height?: number;
  width?: number;
  alt: string;
  className?: HTMLAttributes<HTMLImageElement>["className"];
  size?: string;
  style?: CSSProperties;
}
export default function ImageComponent({
  src,
  height,
  width,
  alt,
  className,
  size = "",
  style,
}: ImageType) {
  const styleCSS = { style } ?? { width: "auto", height: "auto" };
  return (
    <Image
      src={src}
      height={height}
      width={width}
      alt={alt}
      className={className}
      priority={true}
      sizes={size}
      // style={style}
      // objectFit="cover"
    ></Image>
  );
}

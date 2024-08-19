interface ImageType {
  src: string;
  height?: number;
  width?: number;
  alt: string;
  color?: string;
}
export default function Icon({ src, height, width, alt, color }: ImageType) {
  return <img src={src} height={height} width={width} alt={alt}></img>;
}

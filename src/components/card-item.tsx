import Link from "next/link";
import Image from "./ui/image";

export type CardItemProps = {
  src: string;
  size: number;
  title: string;
  description: string;
  time?: string;
  altImg: string;
  className?: string;
};

export default function CardItem({
  src,
  size,
  title,
  description,
  time,
  altImg,
  className,
}: CardItemProps) {
  return (
    <div
      className={`flex justify-between gap-6 mb-5 hover:bg-gray-50 p-2 rounded-lg dark:hover:bg-primary-600 ${className}`}
    >
      <div className="flex items-center gap-3 px-2">
        <div className="w-12">
          <Image
            src={src}
            height={size}
            width={size}
            alt={altImg}
            className="p-1"
          />
        </div>

        <div>
          <p className="font-semibold text-lg text-primary-700 dark:text-primary-100 font-plantin">
            {title}
          </p>
          <p className="text-gray-500 italic text-lg dark:text-primary-200 ">
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="text-gray-500 dark:text-gray-300">{time}</div>
        <div className="text-gray-400 dark:text-gray-300 text-xs text-right">
          <Link
            href={"/projects/mobalib"}
            className="transition hover:text-orange-500 hover:font-bold"
          >
            {" "}
            En détail
          </Link>
        </div>
      </div>
    </div>
  );
}

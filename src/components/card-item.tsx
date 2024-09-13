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
  goToLink?: string;
  company?: string;
  detail?: boolean;
};

export default function CardItem({
  src,
  size,
  title,
  description,
  time,
  altImg,
  className,
  goToLink,
  company,
  detail,
}: CardItemProps) {
  return (
    <div
      className={`flex justify-between gap-6 mb-5 hover:bg-gray-50 p-2 rounded-lg dark:hover:bg-primary-700 pb-5 ${className}`}
    >
      <div className="flex items-center gap-3 px-2">
        <div className="w-12">
          <Link href={company ?? ""} target="_blank">
            <Image
              src={src}
              height={size}
              width={size}
              alt={altImg}
              className="p-1"
            />
          </Link>
        </div>

        <div>
          <p className="font-semibold text-base lg:text-lg text-primary-700 dark:text-primary-100 font-plantin">
            {title}
          </p>
          <p className="text-gray-500 italic text-base lgtext-lg dark:text-primary-200 ">
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className=" text-sm lg:text-base text-gray-600 dark:text-gray-300">
          {time}
        </div>
        {detail && (
          <div className="text-gray-400 dark:text-gray-300 text-xs text-right">
            <Link
              href={goToLink ?? ""}
              className="transition text-orange-400 hover:bg-orange-400 hover:text-gray-100 p-2 rounded font-bold italic hover:font-bold"
            >
              En détail
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

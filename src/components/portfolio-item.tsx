import Link from "next/link";
import Title from "./ui/title";
import { ShareIcon, SunIcon } from "./svgs";
import ImageComponent from "./ui/image";
import clsx from "clsx";

type CardProps = {
  title: string;
  description: string;
  tech: string[];
  link: string;
  srcImg: string;
  altImg: string;
  reverseOrder?: boolean;
};
export default function PortfolioCard({
  title,
  description,
  tech,
  link,
  srcImg,
  altImg,
  reverseOrder,
}: CardProps) {
  return (
    <div className="lg:grid lg:grid-cols-5 lg:mx-24 gap-12 mb-28 ">
      <div
        className={clsx(
          { "lg:order-2": reverseOrder },
          "col-span-2 flex flex-col justify-center mb-5 lg:mb-0"
        )}
      >
        <Title
          type="h3"
          content={title}
          color="text-primary-700"
          style="font-kennerly dark:text-primary-300 text-5xl lg:text-xl"
          fontWeight="font-semibold"
        />
        <p className="font-light tracking-wide text-primary-700 dark:text-primary-200 text-justify text-base lg:text-lg leading-7 mt-3">
          {description}
        </p>
        <div className="flex justify-around text-sm md:text-base font-kennerly italic text-gray-500 dark:text-gray-400 mt-4 md:mx-36 lg:mx-0">
          {tech.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
        <div className="flex justify-end">
          <Link
            href={link}
            target="_blank"
            className="flex gap-2 items-center justify-end mt-6 cursor-pointer group w-24 group-hover:bg-gray-700"
          >
            <p className="text-orange-500 dark:text-orange-400 text-xs font-plantin group-hover:text-orange-700">
              Live demo
            </p>
            <ShareIcon
              size={15}
              className={
                "fill-orange-500 dark:fill-orange-400 group-hover:fill-orange-700"
              }
            />
          </Link>
        </div>
      </div>
      <div className="col-span-3  flex justify-center items-center mx-12 md:mx-0">
        <ImageComponent
          src={srcImg}
          size="1000"
          alt={altImg}
          width={600}
          height={600}
          className="rounded-lg shadow-xl "
        />
      </div>
    </div>
  );
}

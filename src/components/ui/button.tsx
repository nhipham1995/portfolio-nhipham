import { HTMLAttributes } from "react";
import clsx from "clsx";

export type ButtonProps = {
  downloadable: boolean;
  src?: string;
  des: string;
  textStyle?: HTMLAttributes<HTMLTextAreaElement>["className"];
  fillWidth?: boolean;
  className?: HTMLAttributes<HTMLDivElement>["className"];
};
export default function Button({
  downloadable = false,
  src,
  des,
  textStyle,
  fillWidth,
  className,
}: ButtonProps) {
  return (
    <div
      className={clsx(
        {
          "w-full": fillWidth === true,
        },
        className +
          " bg-primary-200 dark:bg-primary-300 dark:hover:bg-primary-500 rounded-xl p-3  mt-6 flex justyfy-center items-center hover:bg-primary-700 transition text-primary-700 hover:text-primary-200 "
      )}
    >
      {downloadable ? (
        <a
          href={src ?? ""}
          className="w-full flex justify-center cursor-pointer font-bold"
          target="_blank"
          download
        >
          {des}
        </a>
      ) : (
        <button>
          <p className={`text-center w-full font-bold ${textStyle}`}>{des}</p>
        </button>
      )}
    </div>
  );
}

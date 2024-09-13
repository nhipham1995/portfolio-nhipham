import { DOMAttributes, HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import Link from "next/link";

export type ButtonProps = {
  downloadable: boolean;
  src?: string;
  des: string | ReactNode;
  textStyle?: HTMLAttributes<HTMLTextAreaElement>["className"];
  fillWidth?: boolean;
  className?: HTMLAttributes<HTMLDivElement>["className"];
  onClick?: DOMAttributes<HTMLDivElement>["onClick"];
  disabled?: boolean;
};
export default function Button({
  downloadable = false,
  src,
  des,
  textStyle,
  fillWidth,
  className,
  disabled = false,
  ...props
}: ButtonProps) {
  return (
    <div
      onClick={props.onClick}
      className={clsx(
        {
          " cursor-not-allowed bg-primary-200 text-primary-300 fill-primary-600 ":
            disabled,
        },

        className,
        {
          " cursor-pointer group-hover:fill-gray-200  bg-primary-200 dark:bg-primary-300 dark:hover:bg-primary-500 hover:bg-primary-500 dark:group-hover:fill-primary-800 transition hover:text-primary-200 text-primary-700 dark:hover:bg-white dark:hover:text-primary-800":
            !disabled,
        },
        {
          " w-full": fillWidth === true,
        },

        " rounded-xl py-2 px-3  mt-6 flex justyfy-center items-center "
      )}
    >
      {downloadable ? (
        <Link
          href={src ?? ""}
          className="w-full flex justify-center cursor-pointer font-bold"
          target="_blank"
          download
        >
          {des}
        </Link>
      ) : (
        <button
          className={clsx({ "cursor-not-allowed ": disabled })}
          disabled={disabled}
        >
          <p
            className={clsx(
              {
                "fill-gray-200 dark:fill-gray-600 ": disabled,
              },
              {
                "group-hover:fill-gray-200 dark:group-hover:fill-primary-800":
                  !disabled,
              },
              `text-center w-full font-bold  ${textStyle}`
            )}
          >
            {des}
          </p>
        </button>
      )}
    </div>
  );
}

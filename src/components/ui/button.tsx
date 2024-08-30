import { DOMAttributes, HTMLAttributes } from "react";
import clsx from "clsx";

export type ButtonProps = {
  downloadable: boolean;
  src?: string;
  des: string;
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
        className,
        {
          " w-full": fillWidth === true,
        },
        {
          " cursor-not-allowed bg-primary-200 text-primary-300 ": disabled,
        },

        {
          " cursor-pointer bg-primary-200 dark:bg-primary-300 dark:hover:bg-primary-500 hover:bg-primary-700 transition hover:text-primary-200 text-primary-700 ":
            !disabled,
        },
        " rounded-xl py-2 px-3  mt-6 flex justyfy-center items-center "
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
        <button
          className={clsx({ "cursor-not-allowed ": disabled })}
          disabled={disabled}
        >
          <p className={`text-center w-full font-bold ${textStyle}`}>{des}</p>
        </button>
      )}
    </div>
  );
}

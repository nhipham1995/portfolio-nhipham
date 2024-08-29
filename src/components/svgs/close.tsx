import React, { HTMLAttributes, SVGAttributes } from "react";

export type IconProps = {
  className?: HTMLAttributes<HTMLDivElement>["className"];
  style?: SVGAttributes<SVGSVGElement>["style"];
  size: number;
  onClick?: () => void;
};

const CloseIcon = ({ style, size = 100, className, onClick }: IconProps) => (
  <svg
    id="Layer_2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 94.45 95.93"
    width={size}
    style={style}
    height={size}
    className={` ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    onClick={onClick}
  >
    <g id="Layer_4">
      <path
        className="cls-1"
        d="M58.07,47.97L92.28,13.37c2.91-2.95,2.89-7.69-.06-10.61-2.95-2.91-7.69-2.89-10.61.06l-34.1,34.48L12.83,2.23c-2.91-2.94-7.66-2.97-10.61-.06-2.95,2.91-2.97,7.66-.06,10.61l34.8,35.19L2.17,83.16c-2.91,2.95-2.89,7.69.06,10.61,2.95,2.91,7.69,2.89,10.61-.06l34.69-35.07,34.1,34.48c2.91,2.94,7.66,2.97,10.61.06,2.95-2.91,2.97-7.66.06-10.61l-34.22-34.6Z"
      />
    </g>
  </svg>
);

export default CloseIcon;

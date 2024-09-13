import React from "react";
import { IconProps } from "./close";

const DateIcon = ({ style, size = 100, className, onClick }: IconProps) => (
  <svg
    id="Layer_2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 103.55 117.3"
    width={size}
    style={style}
    height={size}
    className={` ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    onClick={onClick}
  >
    <g id="Layer_4">
      <path
        className="cls-3 "
        d="M92.37,14.29v3.33c0,4.76-3.87,8.62-8.62,8.62s-8.62-3.87-8.62-8.62v-3.38H28.31v3.38c0,4.69-3.81,8.5-8.5,8.5s-8.5-3.81-8.5-8.5v-3.34c-6.03.37-10.81,5.37-10.81,11.49v79.49c0,6.37,5.16,11.53,11.53,11.53h79.49c6.37,0,11.53-5.16,11.53-11.53V25.78c0-6.08-4.71-11.05-10.68-11.49Z"
      />
      <text />
      <path
        className="cls-2 "
        d="M19.57,46.95v42.37c0,4.86,3.67,8.81,8.2,8.81h48.01c4.53,0,8.2-3.94,8.2-8.81v-42.37H19.57Z"
      />
      <rect
        className="cls-1 "
        x="15.31"
        y=".13"
        width="9"
        height="22"
        rx="4.5"
        ry="4.5"
      />
      <rect
        className="cls-1 "
        x="79.31"
        y=".12"
        width="9"
        height="22"
        rx="4.5"
        ry="4.5"
      />
      <text />
    </g>
  </svg>
);

export default DateIcon;

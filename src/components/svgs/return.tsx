import React from "react";
import { IconProps } from "./close";

const ReturnIcon = ({ style, size = 100, className, onClick }: IconProps) => (
  <svg
    id="Layer_2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 130.75 113.26"
    width={size}
    style={style}
    height={size}
    className={` ${className || ""}`}
    onClick={onClick}
  >
    <g id="Layer_4">
      <path d="M101.06,107.26H11v-18h90.06c1.11,0,4.49,0,7.67-5.5,2.56-4.42,4.02-10.8,4.02-17.5,0-9.25-3.36-23-12.6-23h-34.57v-18h34.57c18.02,0,30.6,16.86,30.6,41,0,9.91-2.29,19.32-6.44,26.5-5.4,9.35-13.66,14.5-23.26,14.5Z" />
      <rect
        x="48.22"
        y="13.26"
        width="44.55"
        height="18"
        transform="translate(5.46 57.41) rotate(-45.91)"
      />
      <rect
        x="60.5"
        y="20.92"
        width="18"
        height="44.69"
        transform="translate(-11.45 55.45) rotate(-40.46)"
      />
    </g>
  </svg>
);

export default ReturnIcon;

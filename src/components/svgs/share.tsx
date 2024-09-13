import React from "react";
import { IconProps } from "./close";

const ShareIcon = ({ style, size = 100, className, onClick }: IconProps) => (
  <svg
    id="Layer_2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 113 108"
    width={size}
    style={style}
    height={size}
    className={` ${className || ""}`}
    onClick={onClick}
  >
    <g id="Layer_4">
      <path
        className="cls-1"
        d="M57.06,57.68h0c-2.79-3.05-2.74-7.95.1-10.94L97.94,3.85c2.25-2.36,5.86-2.33,8.06.08l.24.27c3.24,3.54,3.19,9.23-.11,12.7l-38.87,40.89c-2.84,2.99-7.41,2.94-10.2-.11Z"
      />
      <rect className="cls-1" x="98" width="15" height="38" />
      <path
        className="cls-1"
        d="M47.2,14.5H0V.5h47.2c3.2,0,5.8,3.13,5.8,7h0c0,3.87-2.6,7-5.8,7Z"
      />
      <rect className="cls-1" y="1" width="14" height="107" />
      <rect className="cls-1" y="94" width="110" height="14" />
      <path
        className="cls-1"
        d="M113,108h-15v-46.59c0-3.54,3.36-6.41,7.5-6.41h0c4.14,0,7.5,2.87,7.5,6.41v46.59Z"
      />
      <rect className="cls-1" x="71" width="40" height="15" />
    </g>
  </svg>
);

export default ShareIcon;

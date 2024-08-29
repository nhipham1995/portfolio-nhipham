import React, { HTMLAttributes, SVGAttributes } from "react";
import { IconProps } from "./close";

const LinkedinIcon = ({ style, size = 100, className, onClick }: IconProps) => (
  <div className={className}>
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 102.55 102.55"
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
          d="M94.93,0H7.63C3.41,0,0,3.41,0,7.63v87.3c0,4.21,3.41,7.63,7.63,7.63h87.3c4.21,0,7.63-3.41,7.63-7.63V7.63c0-4.21-3.41-7.63-7.63-7.63ZM30.71,86h-14.4v-46.17l14.4-2.52v48.69ZM23.69,32.99c-4.59,0-7.92-3.33-7.92-7.65s3.33-7.56,7.92-7.56c4.23,0,7.56,3.24,7.56,7.56s-3.33,7.65-7.56,7.65ZM88.22,86h-14.22v-38.43c0-5.76-2.07-8.28-6.39-8.28s-11.61,4.05-11.61,13.68v33.03h-14.31v-46.35l14.31-2.52v9.83c2.5-6.61,9.05-10.01,15.84-10.01,8.1,0,16.38,3.15,16.38,16.83v32.22Z"
        />
      </g>
    </svg>
  </div>
);

export default LinkedinIcon;

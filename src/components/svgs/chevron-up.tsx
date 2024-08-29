import React from "react";
import { IconProps } from "./close";
const ChevronUpIcon = ({
  style = {},
  size = 100,
  className = "",
}: IconProps) => (
  <>
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 104.76 57.6"
      width={size}
      style={style}
      height={size}
      className={`${className || ""}`}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="Layer_4">
        <path
          className="cls-1"
          d="M103.15,55.6c-2.15,2.15-5.63,2.15-7.78,0L52.97,13.2,9.35,56.03c-2.17,2.13-5.65,2.1-7.78-.07h0c-2.13-2.17-2.1-5.65.07-7.78L48.8,1.88c.16-.16.35-.29.53-.42,2.16-1.99,5.51-1.95,7.6.14l46.22,46.22c2.15,2.15,2.15,5.63,0,7.78Z"
        />
      </g>
    </svg>
  </>
);

export default ChevronUpIcon;

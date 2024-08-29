import React from "react";
import { IconProps } from "./close";
const ChevronDownIcon = ({
  style = {},
  size = 100,
  className = "",
  onClick,
}: IconProps) => (
  <>
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 104.76 57.6"
      width={size}
      style={style}
      height={size}
      className={`svg-icon ${className || ""}`}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      onClick={onClick}
    >
      <g id="Layer_4">
        <path
          className="cls-1"
          d="M103.15,2c-2.15-2.15-5.63-2.15-7.78,0l-42.4,42.4L9.35,1.58C7.19-.55,3.7-.52,1.58,1.65h0c-2.13,2.17-2.1,5.65.07,7.78l47.15,46.29c.16.16.35.29.53.42,2.16,1.99,5.51,1.95,7.6-.14L103.15,9.78c2.15-2.15,2.15-5.63,0-7.78Z"
        />
      </g>
    </svg>
  </>
);

export default ChevronDownIcon;

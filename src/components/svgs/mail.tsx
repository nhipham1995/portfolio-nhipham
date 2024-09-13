import React from "react";
import { IconProps } from "./close";

const MailIcon = ({ style, size = 100, className, onClick }: IconProps) => (
  <div className={className}>
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 103 80"
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
          d="M51.5,35.98L103,6.96v-.69c0-3.46-2.81-6.27-6.27-6.27H6.27C2.81,0,0,2.81,0,6.27v.69l51.5,29.03Z"
        />
        <path
          className="cls-1"
          d="M51.5,44.03L0,15v59.74c0,3.46,2.81,6.27,6.27,6.27h90.46c3.46,0,6.27-2.81,6.27-6.27V15l-51.5,29.03ZM51,57.01c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5Z"
        />
      </g>
    </svg>
  </div>
);

export default MailIcon;

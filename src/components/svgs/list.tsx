import React from "react";
import { IconProps } from "./close";

const ListIcon = ({ style, size = 100, className }: IconProps) => (
  <div className={className}>
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 103.5 80.5"
      width={size}
      style={style}
      height={size}
      className={`svg-icon ${className || ""}`}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="Layer_4">
        <g>
          <rect className="cls-1" y="0" width="103" height="12" rx="6" ry="6" />
          <path
            className="cls-1"
            d="M96.63,46h-39.27c-3.52,0-6.37-2.69-6.37-6h0c0-3.31,2.85-6,6.37-6h39.27c3.52,0,6.37,2.69,6.37,6h0c0,3.31-2.85,6-6.37,6Z"
          />
          <rect
            className="cls-1"
            x="19"
            y="68"
            width="84"
            height="12"
            rx="6"
            ry="6"
          />
          <path
            className="cls-1"
            d="M40.5,46.5c-3.58,0-6.5-2.92-6.5-6.5s2.92-6.5,6.5-6.5,6.5,2.92,6.5,6.5-2.92,6.5-6.5,6.5ZM40.5,38.7c-.72,0-1.3.58-1.3,1.3s.58,1.3,1.3,1.3,1.3-.58,1.3-1.3-.58-1.3-1.3-1.3Z"
          />
        </g>
      </g>
    </svg>
  </div>
);

export default ListIcon;

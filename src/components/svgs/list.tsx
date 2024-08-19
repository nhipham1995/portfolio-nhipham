import React, { HTMLAttributes, SVGAttributes } from "react";
import { IconProps } from "./close";

const ListIcon = ({
  style,
  size = 100,
  className,
  color = "#fff",
}: IconProps) => (
  <div className={className}>
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 103.5 80.5"
      width={size}
      style={style}
      height={size}
      //   className={`svg-icon ${className || ""}`}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      {/* <g id="Layer_4">
        <path
          className="cls-1"
          fill={color}
          d="M58.07,47.97L92.28,13.37c2.91-2.95,2.89-7.69-.06-10.61-2.95-2.91-7.69-2.89-10.61.06l-34.1,34.48L12.83,2.23c-2.91-2.94-7.66-2.97-10.61-.06-2.95,2.91-2.97,7.66-.06,10.61l34.8,35.19L2.17,83.16c-2.91,2.95-2.89,7.69.06,10.61,2.95,2.91,7.69,2.89,10.61-.06l34.69-35.07,34.1,34.48c2.91,2.94,7.66,2.97,10.61.06,2.95-2.91,2.97-7.66.06-10.61l-34.22-34.6Z"
        />
      </g> */}
      <g id="Layer_4">
        <g>
          <rect
            className="cls-1"
            fill={color}
            y="0"
            width="103"
            height="12"
            rx="6"
            ry="6"
          />
          <path
            className="cls-1"
            fill={color}
            d="M96.63,46h-39.27c-3.52,0-6.37-2.69-6.37-6h0c0-3.31,2.85-6,6.37-6h39.27c3.52,0,6.37,2.69,6.37,6h0c0,3.31-2.85,6-6.37,6Z"
          />
          <rect
            className="cls-1"
            fill={color}
            x="19"
            y="68"
            width="84"
            height="12"
            rx="6"
            ry="6"
          />
          <path
            className="cls-1"
            fill={color}
            d="M40.5,46.5c-3.58,0-6.5-2.92-6.5-6.5s2.92-6.5,6.5-6.5,6.5,2.92,6.5,6.5-2.92,6.5-6.5,6.5ZM40.5,38.7c-.72,0-1.3.58-1.3,1.3s.58,1.3,1.3,1.3,1.3-.58,1.3-1.3-.58-1.3-1.3-1.3Z"
          />
        </g>
      </g>
    </svg>
  </div>
);

export default ListIcon;

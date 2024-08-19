import React, { HTMLAttributes, SVGAttributes } from "react";
import { IconProps } from "./close";

const MoonIcon = ({
  style,
  size = 100,
  className,
  color = "#fff",
  onClick,
}: IconProps) => (
  <div className={className}>
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 68.32 102"
      width={size}
      style={style}
      height={size}
      //   className={`svg-icon ${className || ""}`}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      onClick={onClick}
    >
      <g>
        <path
          className="cls-1"
          fill={color}
          d="M13.93,101c-3.68,0-7.35-.36-10.94-1.06,19.65-10.24,31.73-28.76,31.73-48.94S22.63,12.3,2.99,2.06c3.59-.7,7.26-1.06,10.94-1.06,29.44,0,53.39,22.43,53.39,50s-23.95,50-53.39,50Z"
        />
        <path
          className="cls-1"
          fill={color}
          d="M13.93,2c28.89,0,52.39,21.98,52.39,49s-23.5,49-52.39,49c-2.66,0-5.31-.19-7.94-.56,18.48-10.65,29.73-28.76,29.73-48.44S24.47,13.21,5.99,2.56c2.62-.37,5.28-.56,7.94-.56M13.93,0C9.11,0,4.45.59,0,1.69c20.06,9.41,33.72,27.96,33.72,49.31S20.06,90.89,0,100.31c4.45,1.1,9.11,1.69,13.93,1.69,30.04,0,54.39-22.83,54.39-51S43.97,0,13.93,0h0Z"
        />
      </g>
    </svg>
  </div>
);

export default MoonIcon;

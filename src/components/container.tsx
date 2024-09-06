import React, { HTMLAttributes } from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: HTMLAttributes<HTMLDivElement>["className"];
  // onClick?: (x) => void;
};
export default function Container({
  children,
  className,
}: // onClick,
ContainerProps) {
  return (
    <div
      className={`mx-auto  max-w-7xl  p-6 lg:px-8 + ${className}`}
      // onClick={onclick}
    >
      {children}
    </div>
  );
}

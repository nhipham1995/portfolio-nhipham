import React, { HTMLAttributes } from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: HTMLAttributes<HTMLDivElement>["className"];
};
export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={`mx-auto  max-w-7xl  p-6 lg:px-8 + ${className}`}>
      {children}
    </div>
  );
}

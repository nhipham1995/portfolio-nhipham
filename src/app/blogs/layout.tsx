"use client";

import ClickCounter from "@/components/click-counter";
import { ClickCounterContext } from "@/provider";
import React, { useContext } from "react";
type LayoutProps = {
  children?: React.ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  const { clickCounter, setClickCounter } = useContext(ClickCounterContext);

  return (
    <div
      onClick={() => {
        setClickCounter(clickCounter + 1);
      }}
    >
      <main>{children}</main>
      {/* <ClickCounter /> */}
    </div>
  );
}

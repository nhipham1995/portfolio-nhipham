"use client";
import { ClickCounterContext } from "@/provider";
import Link from "next/link";
import { useContext } from "react";

export function Footer() {
  const { clickCounter, setClickCounter } = useContext(ClickCounterContext);

  return (
    <div
      onClick={() => {
        setClickCounter(clickCounter + 1);
      }}
    >
      <footer className="pt-12 border-t divide-y divide-orange-500 bg-white  dark:bg-primary-800 py-6 ">
        <div className="mx-auto md:flex md:justify-between  md:max-w-7xl  gap-12 p-6 ">
          <div className="md:row-span-7 flex gap-12 mb-9 md:mb-0 md:w-80 justify-center md:justify-between text-primary-700 dark:text-primary-100 font-kennerly text-lg">
            <Link href={"/"}>Home</Link>
            <Link href={"/#portfolio"}>Projets</Link>
            <Link href={"/blogs"}>Gallerie Photo</Link>
          </div>

          <div className="row-span-1 text-primary-500 font-kennerly text-sm md:text-base text-center dark:text-primary-300">
            <p>© 2024 Nhi PHAM. All rights reserved.</p>
            <p className="max-w-96">
              All the photos, images, logos and drawings in this website are
              designed, created by Nhi PHAM except logos and images concerned
              Mobalib.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

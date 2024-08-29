"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "./svgs";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <p>...</p>;
  }
  if (resolvedTheme === "dark") {
    return (
      <MoonIcon
        size={30}
        // color="#a3a3a3"
        className="cursor-pointer flex items-center justify-center fill-gray-400 cursor-pointer bg-primary-700 hover:bg-gray-600 rounded px-2 px-2 "
        onClick={() => setTheme("light")}
      />
    );
  }
  if (resolvedTheme === "light") {
    return (
      <SunIcon
        size={18}
        className="cursor-pointer flex items-center fill-gray-400 justify-center cursor-pointer bg-gray-100 hover:bg-gray-200 rounded px-2 "
        onClick={() => setTheme("dark")}
      />
    );
  }
}

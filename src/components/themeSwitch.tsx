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
        size={13}
        color="#a3a3a3"
        className="flex items-center justify-center cursor-pointer bg-primary-700 hover:bg-gray-600 rounded px-3 "
        onClick={() => setTheme("light")}
      />
    );
  }
  if (resolvedTheme === "light") {
    return (
      <SunIcon
        size={18}
        color="#939393"
        className="flex items-center justify-center cursor-pointer bg-gray-50 hover:bg-gray-100 rounded px-2 "
        onClick={() => setTheme("dark")}
      />
    );
  }
}

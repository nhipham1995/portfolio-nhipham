"use client";

import Image from "@/components/ui/image";
import Slider from "@/components/ui/slider";
import Title from "@/components/ui/title";
import { appDesignPages as photos } from "@/app/data";
import { useObserveElementWidth } from "@/components/utils/use-observer-element-width";

export default function Page() {
  const { width, ref } = useObserveElementWidth<HTMLDivElement>();

  return (
    <div className="max-w-7xl mx-auto font-kennerly px-12 lg:px-16" ref={ref}>
      <Slider
        photos={photos}
        slidePerView={1}
        slideStyle="rounded-lg h-128 shadow"
        height={
          width > 1000 ? 750 : width > 750 ? 500 : width > 400 ? 300 : 200
        }
      />
    </div>
  );
}

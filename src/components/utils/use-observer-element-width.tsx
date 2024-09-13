import { useState, useRef, useEffect } from "react";

export const useObserveElementWidth = <T extends HTMLElement>() => {
  const [width, setWidth] = useState(0);
  const ref = useRef<T>(null);
  const observerRef = useRef<ResizeObserver | null>(null);
  useEffect(() => {
    console.log("Hook is being called");

    if (!observerRef.current) {
      observerRef.current = new ResizeObserver((entries) => {
        setWidth(entries[0].contentRect.width);
      });
    }

    const currentElement = ref.current;

    if (currentElement) {
      observerRef.current.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observerRef.current?.unobserve(currentElement);
      }
    };
  }, []);

  return {
    width,
    ref,
  };
};

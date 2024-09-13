import { useState, useRef, useEffect } from "react";

export const useObserveElementHeight = <T extends HTMLElement>() => {
  const [height, setHeight] = useState(0);
  const ref = useRef<T>(null);
  const observerRef = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    if (!observerRef.current) {
      observerRef.current = new ResizeObserver((entries) => {
        setHeight(entries[0].contentRect.width);
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
    height,
    ref,
  };
};

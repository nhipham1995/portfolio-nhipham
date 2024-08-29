"use client";
import { ThemeProvider } from "next-themes";
import { createContext, Dispatch, SetStateAction, useState } from "react";

// Define the correct type for the context
interface ClickCounterContextType {
  clickCounter: number;
  setClickCounter: Dispatch<SetStateAction<number>>;
}
export const ClickCounterContext = createContext<ClickCounterContextType>({
  clickCounter: 0,
  setClickCounter: () => {
    throw new Error("setClickCounter must be overridden");
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [clickCounter, setClickCounter] = useState(0);
  const value = { clickCounter, setClickCounter };

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={false}>
      <ClickCounterContext.Provider value={value}>
        {" "}
        {children}
      </ClickCounterContext.Provider>
    </ThemeProvider>
  );
}

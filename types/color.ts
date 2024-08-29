export type Color =
  | "slate"
  | "gray"
  | "zinc"
  | "neutral"
  | "stone"
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fushsia"
  | "pink"
  | "rose"
  | "primary"
  | "leafgreen";

export type Shade = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
};

export type ShadeKeys = keyof Shade;

type _ColorKeyShade<T extends ShadeKeys> = `${Color}-${T}`;

// make a loop for each K in ShadeKeys that create all shades for each color
export type ColorsShades = {
  [K in ShadeKeys]: _ColorKeyShade<K>;
}[ShadeKeys];

export type ColorsShadesText = {
  [K in ColorsShades]: `text-${K}`;
}[ColorsShades];

export type FontWeight =
  | "thin"
  | "extra-light"
  | "light"
  | "normal "
  | "medium"
  | "semibold"
  | "bold"
  | "extra-bold"
  | "black";

export type FontWeightSyn = {
  [K in FontWeight]: `font-${K}`;
}[FontWeight];

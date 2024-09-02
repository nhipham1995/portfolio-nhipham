import { ColorsShadesText } from "../../../types/color";
import { FontWeightSyn } from "../../../types/font";

export type TypeProps = {
  content: string;
  type?: "h1" | "h2" | "h3" | "h4";
  color?: ColorsShadesText;
  style?: string;
  fontWeight?: FontWeightSyn;
};
export default function Title({
  content,
  type = "h1",
  color = "text-slate-900",
  style,
  fontWeight,
}: TypeProps) {
  switch (type) {
    case "h1":
      return (
        <h1
          className={
            color +
            style +
            " text-2xl lg:text-3xl xl:text-4xl  leading-tight tracking-light " +
            fontWeight
          }
        >
          {content}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={
            color +
            " text-xl lg:text-2xl xl:text-3xl  leading-tight tracking-light " +
            style +
            " " +
            fontWeight
          }
        >
          {content}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={
            color +
            " text-lg lg:text-xl xl:text-2xl leading-tight tracking-light " +
            style +
            " " +
            fontWeight
          }
        >
          {content}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={
            color +
            " text-xl leading-tight tracking-light " +
            style +
            " " +
            fontWeight
          }
        >
          {content}
        </h4>
      );
  }
}

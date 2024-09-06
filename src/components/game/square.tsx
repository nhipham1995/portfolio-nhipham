import clsx from "clsx";
type SquareProps = {
  value: "X" | "O";
  onClick: (x: number) => void;
  ind: number;
  isWinSquare: boolean;
};

function Square({ value, onClick, ind, isWinSquare }: SquareProps) {
  return (
    <button
      // className={`square-item  ${
      //   value !== null
      //     ? value === "X"
      //       ? "green-square inactive"
      //       : "red-square inactive"
      //     : "active"
      // } ${isWinSquare ? "win-square" : ""}`}
      className={clsx(
        {
          "bg-primary-700 text-primary-100 cursor-not-allowed":
            value !== null && value === "X",
        },
        {
          "bg-leafgreen-300 text-white cursor-not-allowed":
            value !== null && value === "O",
        },
        { "win-square bg-primary-950": isWinSquare },
        {
          " bg-primary-500 cursor-pointer ": value === null,
        },
        "h-28 w-28 m-2 p-0 rounded text-4xl"
      )}
      onClick={() => onClick(ind)}
    >
      {value}
    </button>
  );
}
export default Square;

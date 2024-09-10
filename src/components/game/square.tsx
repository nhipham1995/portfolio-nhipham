import clsx from "clsx";
type SquareProps = {
  value: "X" | "O";
  onClick: (x: number) => void;
  ind: number;
  isWinSquare: boolean;
  hasWinner?: boolean;
};

function Square({ value, onClick, ind, isWinSquare, hasWinner }: SquareProps) {
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
        {
          " bg-primary-500": value === null,
        },
        "h-16 w-16 m-2 p-0 rounded text-4xl text-2xl",
        { "cursor-not-allowed opacity-90": hasWinner },
        { "win-square bg-primary-950 opacity-100": isWinSquare }
      )}
      onClick={() => onClick(ind)}
    >
      {value}
    </button>
  );
}
export default Square;

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
        "h-10 w-10 lg:h-16 lg:w-16 m-0.5 lg:m-1 p-0 rounded text-2xl lg:text-4xl",
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

import Square from "./square";
import winnerCheck from "../functions/haveWinner";

type SquareListProps = {
  squares: ("X" | "O")[];
  onNextStep: (a: any[], i: number) => void;
  stepNum: number;
  winPosition?: number[] | string[];
  squareInd: number;
  row: number;
};

function SquareList({
  squares,
  onNextStep,
  stepNum,
  winPosition,
  squareInd,
  row,
}: SquareListProps) {
  console.log("winposition", winPosition);
  const handleClick = (i: number) => {
    if (squares[i] || winnerCheck(squares, row)) return;
    const newSquares = squares.slice();
    newSquares[i] = "X";
    // if (stepNum % 2 === 0) {
    //   newSquares[i] = "X";
    // } else {
    //   newSquares[i] = "O";
    // }
    onNextStep(newSquares, i);
  };

  const array: number[] = [...Array(row).keys()];

  return (
    <>
      {array.map((line, i) => {
        return (
          <div className="flex justify-center" key={i}>
            {array.map((square, f) => {
              const index = i * row + f;
              return (
                <Square
                  key={i + f}
                  value={squares[index]}
                  onClick={(ind) => handleClick(ind)}
                  ind={index}
                  isWinSquare={
                    winPosition && winPosition.length
                      ? winPosition.findIndex((item) => item === index) !== -1
                        ? true
                        : false
                      : false
                  }
                  hasWinner={winPosition ? true : false}
                />
              );
            })}
          </div>
        );
      })}
    </>
  );
}
export default SquareList;

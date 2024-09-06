import Square from "./square";
import winnerCheck from "../functions/haveWinner";

type SquareListProps = {
  squares: ("X" | "O")[];
  onNextStep: (a: any[], i: number) => void;
  stepNum: number;
  winPosition: number[];
  squareInd: number;
};
function SquareList({
  squares,
  onNextStep,
  stepNum,
  winPosition,
  squareInd,
}: SquareListProps) {
  const handleClick = (i: number) => {
    if (squares[i] || winnerCheck(squares)) return;
    const newSquares = squares.slice();
    if (stepNum % 2 === 0) {
      newSquares[i] = "X";
    } else {
      newSquares[i] = "O";
    }
    onNextStep(newSquares, i);
  };

  return (
    <>
      {[1, 2, 3].map((row, i) => {
        return (
          <div className="square-row flex justify-center" key={i}>
            {[1, 2, 3].map((square, f) => {
              const index = i * 3 + f;
              return (
                <Square
                  key={i + f}
                  value={squares[index]}
                  onClick={(ind) => handleClick(ind)}
                  ind={index}
                  isWinSquare={
                    winPosition
                      ? winPosition.findIndex((item) => item === index) !== -1
                        ? true
                        : false
                      : false
                  }
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

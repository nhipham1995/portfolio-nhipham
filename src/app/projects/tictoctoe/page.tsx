"use client";
import { useContext, useState } from "react";
import SquareList from "../../../components/game/squareList";
import winnerCheck from "@/components/functions/haveWinner";
import moveDescription from "@/components/functions/moveDescription";
import Container from "@/components/container";
import Title from "@/components/ui/title";
import Button from "@/components/ui/button";
import { ClickCounterContext } from "@/provider";

export default function Page() {
  const { clickCounter, setClickCounter } = useContext(ClickCounterContext);

  // store all the move from the beginning
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // track the position of played squares each time
  const [moveDes, setMoveDes] = useState<string[]>([]);
  const [isAscOrder, setIsAscOrder] = useState(true);

  const currentSquares = history[history.length - 1];

  const handleNextStep = (newSquares: ("X" | "O")[], squareInd: number) => {
    setHistory([...history, newSquares]);
    const newMove = moveDescription(squareInd);
    setMoveDes([...moveDes, newMove]);
  };

  const rePlayAt = (i: number) => {
    const newHistory = history.slice(0, i);
    setHistory(newHistory);
    setMoveDes(moveDes.slice(0, i - 1));
  };
  const restartFunc = () => {
    setHistory([Array(9).fill(null)]);
    setMoveDes([]);
  };

  const winner = winnerCheck(currentSquares);

  const instructionDes =
    winner === null
      ? `Next player: ${moveDes.length % 2 === 0 ? "X" : "O"}`
      : winner === "draw"
      ? "This game ends in a draw."
      : `Winner is ${winner[0]}`;
  return (
    <div
      onClick={() => {
        setClickCounter(clickCounter + 1);
      }}
    >
      <Container>
        <Title
          content="Tic Toc Toe"
          style="font-kennerly xl:text-5xl text-center dark:text-primary-200"
          type="h2"
          color="text-primary-700"
        />
        <>
          {/* {winner && ( */}
          <Button
            onClick={restartFunc}
            des={"Rejouez"}
            downloadable={false}
            className="w-36  mx-auto flex justify-center"
          />
          {/* )} */}
          {/* <h2>{instructionDes}</h2> */}
          <Title
            type="h3"
            content={"[ " + instructionDes + " ]"}
            style="flex justify-center my-5 font-plantin"
            color="text-primary-950"
          />
          <div className="grid grid-cols-2 justify-center mt-12">
            <div>
              <SquareList
                onNextStep={handleNextStep}
                squares={currentSquares}
                stepNum={moveDes.length}
                squareInd={history.length}
                winPosition={
                  winner && winner[1] !== "r" ? winner[1] : undefined
                }
              />
            </div>

            <div>
              <Title
                style="move-info-title font-beloved-sans text-center"
                type="h3"
                content="Suivrez tous les pas"
              />
              <div className="flex justify-center ">
                <button
                  className="result-order-toggle bg-primary-600 my-2 p-2 rounded-lg text-primary-200 cursor-pointer transition hover:bg-primary-700 hover:text-primary-100"
                  onClick={() => setIsAscOrder(!isAscOrder)}
                >
                  {isAscOrder ? "Ascending Order" : "Descending Order"}
                </button>
              </div>
              <p className="instruction-info text-center italic font-light mb-5 text-gray-600 font-kennerly">
                (Click to the move description item below so that you can come
                back at that point and replay)
              </p>
              <ul className="move-list mt-8 p-0 list-none font-kennerly ">
                {moveDes.map((description: string, i: number) => {
                  if (history.length === 0) return null;

                  return (
                    <li
                      key={i}
                      onClick={() => rePlayAt(i + 2)}
                      className="cursor-pointer mt-3 [&:nth-child(even)]:text-leafgreen-300 [&:nth-child(odd)]:text-primary-700 flex justify-center text-gray-700 text-lg"
                    >
                      <button>
                        {isAscOrder ? i + 1 : moveDes.length - i}.{" "}
                        {isAscOrder
                          ? description
                          : moveDes[moveDes.length - 1 - i]}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </>
      </Container>
    </div>
  );
}

"use client";
import { useContext, useEffect, useState } from "react";
import clsx from "clsx";
import SquareList from "../../../components/game/squareList";
import winnerCheck from "@/components/functions/haveWinner";
import moveDescription from "@/components/functions/moveDescription";
import Container from "@/components/container";
import Title from "@/components/ui/title";
import Button from "@/components/ui/button";
import { ClickCounterContext } from "@/provider";
import randomPlay from "@/components/functions/random-play";

export default function Page() {
  const { clickCounter, setClickCounter } = useContext(ClickCounterContext);
  const [row, setRow] = useState(4);
  // store all the move from the beginning
  const [history, setHistory] = useState<any[] | ("X" | "O")[]>([
    Array(row * row).fill(null),
  ]);
  // track the position of played squares each time
  const [moveDes, setMoveDes] = useState<string[]>([]);
  const [isAscOrder, setIsAscOrder] = useState<boolean>(true);
  const [onePlayer, setOnePlayer] = useState<boolean>(true);

  useEffect(() => {
    setHistory([Array(row * row).fill(null)]);
    setMoveDes([]);
  }, [row]);

  const currentSquares = history[history.length - 1];

  const handleNextStep = (
    newSquares: ("X" | "O")[],
    squareInd: number
    // type: "X" | "O"
  ) => {
    setHistory([...history, newSquares]);

    const newMove = moveDescription(squareInd, row);
    setMoveDes([...moveDes, newMove]);
    if (onePlayer) {
      setTimeout(() => {
        randomPosition(newSquares, squareInd);
      }, 100);
    }
  };

  const randomPosition = (newSquares: ("X" | "O")[], squareInd: number) => {
    if (winnerCheck(newSquares, row)) return;
    const newRandom = randomPlay(squareInd, newSquares);
    if (typeof newRandom[1] === "number") {
      const newMove = moveDescription(newRandom[1], row);
      setMoveDes([...moveDes, newMove]);
    }
    setHistory([...history, newRandom[0]]);
  };

  const rePlayAt = (i: number) => {
    const newHistory = history.slice(0, i);
    setHistory(newHistory);
    setMoveDes(moveDes.slice(0, i - 1));
  };

  const restartFunc = () => {
    setHistory([Array(row * row).fill(null)]);
    setMoveDes([]);
  };

  const winner = winnerCheck(currentSquares, row);

  const instructionDes =
    winner === null
      ? ` ${
          !onePlayer
            ? moveDes.length % 2 === 0
              ? "Votre tour: X"
              : "Tour de : O"
            : "Votre tour: X"
        }`
      : winner[0] === "draw"
      ? "Ce jeu se termine par un match nul. Rejouez en cliquant le button au dessous"
      : `Le gagneur est  ${winner[0]}`;

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
          <Button
            onClick={restartFunc}
            des={"Rejouez"}
            downloadable={false}
            className="w-36  mx-auto flex justify-center"
          />

          <Title
            type="h3"
            content={"[ " + instructionDes + " ]"}
            style="flex justify-center my-5 font-plantin"
            color="text-primary-950"
          />

          <div className="flex justify-between">
            <div className="">
              <Button
                des="Retournez un pas"
                downloadable={false}
                className={"mt-0"}
                onClick={() => {
                  const newHistory = history.slice(0, history.length - 1);
                  setHistory(newHistory);
                  setMoveDes(moveDes.slice(0, moveDes.length - 1));
                }}
                disabled={history.length === 1}
              />
              <Button
                des={!onePlayer ? "Deux joueurs" : "Jouez avec nous"}
                downloadable={false}
                onClick={() => {
                  setOnePlayer(!onePlayer);
                  restartFunc();
                }}
                className="text-center mx-auto bg-gray-200"
              />
            </div>
            <label htmlFor="number-input">
              <span className="block mb-0.5 mr-2 text-sm font-medium text-leafgreen-600 dark:text-gray-300 inline">
                Nombre de carrés per colonne
              </span>

              <input
                type="number"
                id="number-input"
                aria-describedby="helper-text-explanation"
                className="inline w-24 peer border border-gray-300 text-primary-700 text-sm font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block  py-1 px-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-600 "
                placeholder={row.toString()}
                required
                defaultValue={row}
                min={3}
                max={15}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  value >= 3 && value < 16
                    ? setRow(value)
                    : value > 15
                    ? setRow(15)
                    : setRow(3);
                }}
              />

              <span className="mt-2 hidden text-xs  text-gray-600 dark:text-gray-300  peer-[&:not(:placeholder-shown):focus:invalid]:block">
                Accept only a number between 3 and {10}
              </span>
              <span className="mt-2 hidden text-xs text-red-500  peer-[&:not(:placeholder-shown):not(:focus):invalid]:block ">
                Accept only a number between 3 and 10
              </span>
            </label>
          </div>
          <div
            className={clsx(
              {
                "grid grid-cols-2 justify-center ": row < 6,
              },
              {
                "flex flex-col gap-12": row >= 6,
              },
              "mt-12 mb-12"
            )}
          >
            <div>
              <SquareList
                onNextStep={handleNextStep}
                squares={currentSquares}
                stepNum={moveDes.length}
                squareInd={history.length}
                row={row}
                winPosition={
                  winner && winner[1] !== "r" ? winner[1] : undefined
                }
                onePlayer={onePlayer}
              />
            </div>

            <div>
              <Title
                style="move-info-title font-beloved-sans text-center dark:text-gray-300"
                type="h3"
                content="Suivrez vos pas"
              />
              <div className="flex justify-center ">
                <button
                  className="result-order-toggle bg-primary-600 my-2 p-2 text-sm rounded-lg text-primary-200 cursor-pointer transition hover:bg-primary-700 hover:text-primary-100"
                  onClick={() => setIsAscOrder(!isAscOrder)}
                >
                  {isAscOrder ? "Ascending Order" : "Descending Order"}
                </button>
              </div>
              <p className="instruction-info text-center italic font-light mb-5 text-orange-600 dark:text-gray-400 font-kennerly">
                (Cliquez sur la ligne de description ci-dessous pour pouvoir
                venir revenons à ce moment-là et rejouons )
              </p>
              <ul className="move-list mt-8 p-0 list-none font-kennerly ">
                {moveDes.map((description: string, i: number) => {
                  if (history.length === 0) return null;

                  return (
                    <li
                      key={i}
                      onClick={() => rePlayAt(i + 2)}
                      className={clsx(
                        {
                          "cursor-pointer mt-3 text-leafgreen-600 dark:text-primary-400 flex justify-center text-gray-700 text-lg":
                            onePlayer,
                        },
                        {
                          "cursor-pointer mt-3 [&:nth-child(even)]:text-leafgreen-300 [&:nth-child(odd)]:text-primary-700 dark:[&:nth-child(odd)]:text-primary-400 flex justify-center text-gray-700 text-lg":
                            !onePlayer,
                        }
                      )}

                      // className="cursor-pointer mt-3 [&:nth-child(even)]:text-leafgreen-300 [&:nth-child(odd)]:text-primary-700 dark:[&:nth-child(odd)]:text-primary-400 flex justify-center text-gray-700 text-lg"
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

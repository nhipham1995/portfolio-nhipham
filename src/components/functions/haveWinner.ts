import winnerPosition from "./winner-position";
function winnerCheck(arr: ("X" | "O")[], row: number) {
  const positionPosibilities = winnerPosition(row);

  for (let i = 0; i < positionPosibilities.length; i++) {
    const [a, b, c] = positionPosibilities[i];
    if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
      return [arr[a], [a, b, c]];
    }
  }
  if (arr.findIndex((item) => item === null) === -1) return ["draw"];
  return null;
}

export default winnerCheck;

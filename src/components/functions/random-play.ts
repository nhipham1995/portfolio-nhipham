function randomPlay(newInd: number, newSquare: ("X" | "O")[]) {
  let available: number[] = [];
  const a = newSquare.map((x, i) => {
    if (x === null && i !== newInd) {
      available.push(i);
    }
  });
  const random = Math.floor(Math.random() * available.length);
  newSquare[available[random]] = "O";
  return [newSquare, available[random]];
}
export default randomPlay;

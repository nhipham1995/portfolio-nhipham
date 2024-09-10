function randomPlay(newInd: number, newSquare: ("X" | "O")[]) {
  let available: number[] = [];
  const a = newSquare.map((x, i) => {
    if (x === null && i !== newInd) {
      available.push(i);
    }
  });
  const random = Math.floor(Math.random() * available.length);
  console.log(available, random, available[random]);
  console.log((newSquare[available[random]] = "O"));
  return [newSquare, available[random]];
}
export default randomPlay;

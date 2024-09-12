function moveDescription(square: number, row: number) {
  const line = Math.ceil(Number(square + 1) / row) - 1;
  const column = square - line * row;
  const description = `Joué la ligne ${line + 1}, avec le colonne ${
    column + 1
  }`;
  console.log(description);
  return description;
}

export default moveDescription;

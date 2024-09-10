function moveDescription(square, row) {
  const line = Math.ceil(Number(square + 1) / row) - 1;
  const column = square - line * row;
  const description = `Joué sur la carré située la ligne ${
    line + 1
  }, avec le colonne ${column + 1}`;
  console.log(description);
  return description;
}

export default moveDescription;

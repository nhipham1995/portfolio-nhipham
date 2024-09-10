export default function winnerPositision(row) {
  let result = [];
  // row
  for (let i = 0; i < row * row; i++) {
    if (!((i + 1) % row === 0 || (i + 1) % row === row - 1)) {
      result.push([i, i + 1, i + 2]);
    }
  }
  // column
  for (let i = 0; i < row * row; i++) {
    if (i + row * 2 < row * row) {
      result.push([i, i + row, i + row * 2]);
    }
  }
  // linear from left to right (from 0)
  let linear = [];
  for (let i = 0; i < row; i++) {
    const unit = row + 1;
    linear.push(i * unit);
  }
  result.push(LtoRResult(linear[1], row), LtoRResult(linear[row - 2], row));

  for (let i = 2; i < row - 2; i++) {
    let num = checkIndex(i, row);

    result.push(LtoRResult(linear[i], row));
    for (let j = 1; j < num; j++) {
      result.push(LtoRResult(linear[i] - j * (row - 1), row));
      result.push(LtoRResult(linear[i] + j * (row - 1), row));
    }
  }
  // linear from left to right (from 1)
  let linear2 = [];
  for (let i = 1; i < row - 2; i++) {
    const unit = row + 1;
    linear2.push(i * unit + 1);
  }

  for (let i = 0; i < linear2.length; i++) {
    let num;
    if (i + 2 > row / 2) {
      num = row - i - 3;
    } else {
      num = i + 1;
    }
    result.push(LtoRResult(linear2[i], row));
    for (let j = 1; j < num + 1; j++) {
      const uncheckedValue2 = LtoRResult(linear2[i] + j * (row - 1), row);
      if (checkResult(uncheckedValue2) === true) result.push(uncheckedValue2);
      if (j < num) {
        const uncheckedValue = LtoRResult(linear2[i] - j * (row - 1), row);
        if (checkResult(uncheckedValue) === true) result.push(uncheckedValue);
      }
    }
  }
  // linear from  right to left (from row-1), this gives 8 for row = 6
  let linear3 = [];
  for (let i = 0; i < row; i++) {
    const unit = row - 1;
    linear3.push(row - 1 + i * unit);
  }
  result.push(RtoLResult(linear3[1], row), RtoLResult(linear3[row - 2], row));
  for (let i = 2; i < row - 2; i++) {
    let num = checkIndex(i, row);

    result.push(RtoLResult(linear3[i], row));
    for (let j = 1; j < num; j++) {
      result.push(RtoLResult(linear3[i] - j * (row + 1), row));
      result.push(RtoLResult(linear3[i] + j * (row + 1), row));
    }
  }
  // linear from  right to left (from row-2), this gives 8 for row = 6
  let linear4 = [];
  for (let i = 1; i < row - 2; i++) {
    const unit = row - 1;
    linear4.push(row + i * unit - 2);
  }
  for (let i = 0; i < linear4.length; i++) {
    let num;
    if (i + 2 > row / 2) {
      num = row - i - 3;
    } else {
      num = i + 1;
    }
    result.push(RtoLResult(linear4[i], row));
    for (let j = 1; j < num + 1; j++) {
      const uncheckedValue2 = RtoLResult(linear4[i] + j * (row + 1), row);
      if (checkResult(uncheckedValue2) === true) result.push(uncheckedValue2);
      if (j < num) {
        const uncheckedValue = RtoLResult(linear4[i] - j * (row + 1), row);
        if (checkResult(uncheckedValue) === true) result.push(uncheckedValue);
      }
    }
  }

  let finalResult = [...new Set(result.map(JSON.stringify))];
  return finalResult.map(JSON.parse);
}

function LtoRResult(value, row) {
  const unit = row - 1;
  return [value - unit, value, value + unit];
}
function RtoLResult(value, row) {
  const unit = row + 1;
  return [value - unit, value, value + unit];
}
function checkIndex(i, row) {
  let num;
  if (i >= row / 2) {
    num = row - i - 1;
  } else {
    num = i;
  }
  return num;
}
function checkResult(a, row) {
  for (let element of a) {
    if (element < 0 || element >= row * row) {
      return false;
    }
  }
  return true;
}

const a = winnerPositision(3);

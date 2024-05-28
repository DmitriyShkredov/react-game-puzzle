export const getEmptyXY = (
  array: Array<number[]>,
  number: number
): Array<number> => {
  let emptyX = 1;
  let emptyY = 1;
  array.forEach((line, y) => {
    line.forEach((item, x) => {
      if (item === number) {
        emptyX = x;
        emptyY = y;
      }
    });
  });
  return [emptyX, emptyY];
};

export const canMoveItem = (
  emptyX: number,
  emptyY: number,
  x: number,
  y: number
) => {
  if (emptyX === x && Math.abs(emptyY - y) === 1) return true;
  if (emptyY === y && Math.abs(emptyX - x) === 1) return true;
  return false;
};

export const correctArr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

export const genRandomArr = (): Array<number[]> => {
  const array = JSON.parse(JSON.stringify(correctArr));
  const mixCount = 200;
  for (let i = 0; i < mixCount; i++) {
    const [x, y] = getEmptyXY(array, 16);
    const dir = Math.ceil(Math.random() * 4);
    let newX = x;
    let newY = y;
    if (dir === 1 && y > 0) newY = y - 1;
    else if (dir === 2 && y < 3) newY = y + 1;
    else if (dir === 3 && x > 0) newX = x - 1;
    else if (dir === 4 && x < 3) newX = x + 1;
    array[y][x] = array[newY][newX];
    array[newY][newX] = 16;
  }
  return array;
};

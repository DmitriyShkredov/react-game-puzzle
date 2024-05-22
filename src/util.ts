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

export const genRandomArr = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  let m = arr.length;
  let t;
  let i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
  }

  return [
    arr.slice(0, 4),
    arr.slice(4, 8),
    arr.slice(8, 12),
    arr.slice(12, 16),
  ];
};

export const correctArr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

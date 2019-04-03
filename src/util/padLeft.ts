const padLeft = <T>(arr: Array<T>, value: T, length: number): Array<T> => {
  if (arr.length >= length) return arr;

  let result: Array<T> = [];

  if (length - arr.length === 0) {
    result = [];
  } else {
    result = [
      value,
      ...padLeft(result, value, length - arr.length - 1),
      ...result,
    ];
  }

  return [...result, ...arr];
};

export default padLeft;

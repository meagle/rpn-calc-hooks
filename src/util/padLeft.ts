const padLeft = <T>(arr: Array<T>, T: any, length: number): Array<T> => {
  if (arr.length >= length) return arr;

  let result: Array<T> = [];

  if (length - arr.length === 0) {
    result = [];
  } else {
    result = [T, ...padLeft(result, T, length - arr.length - 1), ...result];
  }

  return [...result, ...arr];
};

export default padLeft;

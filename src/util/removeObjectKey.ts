type Omit<T, U> = Pick<T, Exclude<keyof T, keyof U>> | {};

const removeObjectKey = <KEY extends string, O>(
  key: KEY,
  object: O
): Omit<KEY, O> => {
  const result: Omit<KEY, O> = {};
  Object.entries(object).forEach(([k, v]) => {
    if (k !== key) {
      result[k] = v;
    }
  });
  return result;
};

export default removeObjectKey;

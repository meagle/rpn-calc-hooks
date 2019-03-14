const removeObjectKey = <O>(key: string, object: O): Partial<O> => {
  const result: Partial<O> = {};
  Object.entries(object).forEach(([k, v]) => {
    if (k !== key) {
      result[k] = v;
    }
  });
  return result;
};

export default removeObjectKey;

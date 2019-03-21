type Omit<KEY extends keyof O, O> = Pick<O, Exclude<keyof O, KEY>>;

const removeObjectKey = <KEY extends keyof O, O>(
  key: KEY,
  object: O
): Omit<KEY, O> => {
  const newObj: O = {...object};
  delete newObj[key];
  return newObj;
};

const o: {a: number; b: number} = {a: 2, b: 4};

const newO = removeObjectKey('b', o);

newO.a;
// newO.b; //error - expected

export default removeObjectKey;

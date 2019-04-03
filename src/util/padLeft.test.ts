import padLeft from './padLeft';

test('Stack should have two elements when array is empty', () => {
  const initialValue: Array<number> = [];
  const expected = [0, 0];
  const actual = padLeft(initialValue, 0, 2);
  expect(actual).toEqual(expected);
});

test('Stack add elements when the array has one element', () => {
  const initialValue: Array<number> = [4];
  const expected = [0, 4];
  const actual = padLeft(initialValue, 0, 2);
  expect(actual).toEqual(expected);
});

test('Stack size is the same when the length of the array is the same as the total length', () => {
  const initialValue: Array<number> = [1, 4];
  const expected = [1, 4];
  const actual = padLeft(initialValue, 0, 2);
  expect(actual).toEqual(expected);
});

test('Stack size is greater than the length of the array to be filled', () => {
  const initialValue: Array<number> = [1, 2, 3];
  const expected = [1, 2, 3];
  const actual = padLeft(initialValue, 0, 2);
  expect(actual).toEqual(expected);
});

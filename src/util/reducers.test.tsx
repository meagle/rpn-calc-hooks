import reducers, {reduceInput, reduceStack} from './reducers';
import {Stack, CalcState} from '../types';
import {OPERAND_KEYS, OPERATOR_KEYS} from './keys';

test('User can add new input', () => {
  const keyId = '2';
  const expected: string = '2';
  const actual: string = reduceInput(undefined, {
    type: 'USER_NUMERIC_INPUT',
    keyId,
  });
  expect(actual).toEqual(expected);
});

test('User can add decimal numbers', () => {
  const keyId = '4';
  const expected: string = '3.14';
  const actual: string = reduceInput('3.1', {
    type: 'USER_NUMERIC_INPUT',
    keyId,
  });
  expect(actual).toEqual(expected);
});

test('Stack can add new input as a new stack item', () => {
  const expected: Stack = [3];

  const actual: Stack = reduceStack([], {
    type: 'ADD_USER_INPUT_TO_STACK',
    userInput: '3',
  });

  expect(actual).toEqual(expected);

  const state = reducers(
    {
      stack: [3],
      input: '5',
    },
    {type: 'ADD_TO_STACK'}
  );

  expect(state).toEqual({
    stack: [5, 3],
    input: '',
  });
});

test('Remove first stack item when there is no user Input', () => {
  const stackExpected: Stack = [2, 3, 4, 5];

  const stackAcutal: Stack = reduceStack([1, 2, 3, 4, 5], {
    type: 'REMOVE_FROM_STACK',
    userInput: '',
  });

  expect(stackAcutal).toEqual(stackExpected);

  const currentInputExpected = '';
  const currentInputActual = reduceInput('', {
    type: 'REMOVE_FROM_STACK',
  });

  expect(currentInputActual).toBe(currentInputExpected);
});

test('Remove current stack character when there is user Input', () => {
  const expected: Stack = [1, 2, 3, 4, 5];

  const actual: Stack = reduceStack([1, 2, 3, 4, 5], {
    type: 'REMOVE_FROM_STACK',
    userInput: '3.14',
  });

  expect(actual).toEqual(expected);

  const currentInputExpected = '3.1';
  const currentInputActual = reduceInput('3.14', {
    type: 'REMOVE_FROM_STACK',
    userInput: '3.14',
  });
  expect(currentInputActual).toBe(currentInputExpected);
});

test('Stack can run a unary operation on first element on stack', () => {
  const keyId = 'sqrt';
  const expected: Stack = [8];

  const actual: Stack = reduceStack([64], {
    type: 'USER_OPERATOR_INPUT',
    keyId,
  });

  expect(actual).toEqual(expected);
});

test('Stack can run a unary operation on current input', () => {
  const keyId = 'sqrt';
  const expected: Stack = [10, 8];
  const expectedInput = '';

  const actual: Stack = reduceStack([8], {
    type: 'USER_OPERATOR_INPUT',
    keyId,
    userInput: '100',
  });
  const actualInput: string = reduceInput('100', {
    type: 'USER_OPERATOR_INPUT',
    keyId,
    userInput: '100',
  });

  expect(actual).toEqual(expected);
  expect(actualInput).toEqual(expectedInput);
});

test('Stack can run an operation with arity 2 on first element on stack', () => {
  const keyId = 'add';
  const expected: Stack = [12, 5];

  const actual: Stack = reduceStack([3, 9, 5], {
    type: 'USER_OPERATOR_INPUT',
    keyId,
    userInput: '',
  });

  expect(actual).toEqual(expected);
});

test('Stack can run an operation with arity 2 on current input', () => {
  const keyId = 'add';
  const expected: Stack = [6, 9, 5];

  const actual: Stack = reduceStack([3, 9, 5], {
    type: 'USER_OPERATOR_INPUT',
    keyId,
    userInput: '3',
  });

  expect(actual).toEqual(expected);
});

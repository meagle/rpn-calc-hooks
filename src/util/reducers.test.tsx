import reducer from './reducers';
import {Stack, CalcState} from '../types';
import {OPERAND_KEYS, OPERATOR_KEYS} from './keys';

test('User can add new input', () => {
  const keyId = '2';
  const initialState: CalcState = {stack: [], input: ''};
  const expected: CalcState = {stack: [], input: '2'};
  const actual: CalcState = reducer(initialState, {
    type: 'USER_NUMERIC_INPUT',
    keyId,
  });
  expect(actual).toEqual(expected);
});

test('User can add decimal numbers to user input', () => {
  const keyId = '4';
  const initialState: CalcState = {
    stack: [],
    input: '3.1',
  };
  const expected: CalcState = {
    stack: [],
    input: '3.14',
  };
  const actual: CalcState = reducer(initialState, {
    type: 'USER_NUMERIC_INPUT',
    keyId,
  });
  expect(actual).toEqual(expected);
});

test('Stack can add new input as a new stack item', () => {
  const initialState: CalcState = {
    input: '3',
    stack: [],
  };

  const expected: CalcState = {
    stack: [3],
    input: '',
  };

  const actual: CalcState = reducer(initialState, {
    type: 'ADD_TO_STACK',
  });

  expect(actual).toEqual(expected);

  const state = reducer(
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
  const expected: CalcState = {input: '', stack: [2, 3, 4, 5]};

  const initialState: CalcState = {
    input: '',
    stack: [1, 2, 3, 4, 5],
  };

  const stackAcutal: CalcState = reducer(initialState, {
    type: 'REMOVE_FROM_STACK',
  });

  expect(stackAcutal).toEqual(expected);
});

test('Remove current stack character when there is user Input', () => {
  const initialState: CalcState = {
    input: '3.14',
    stack: [1, 2, 3, 4, 5],
  };

  const expected: CalcState = {
    input: '3.1',
    stack: [1, 2, 3, 4, 5],
  };

  const actual: CalcState = reducer(initialState, {
    type: 'REMOVE_FROM_STACK',
    userInput: '3.14',
  });

  expect(actual).toEqual(expected);
});

test('Stack can run a unary operation on first element on stack', () => {
  const keyId = 'q';
  const expected: CalcState = {
    stack: [8],
    input: '',
  };

  const initialState: CalcState = {
    stack: [64],
    input: '',
  };

  const actual: CalcState = reducer(initialState, {
    type: 'USER_OPERATOR_INPUT',
    keyId,
  });

  expect(actual).toEqual(expected);
});

test('Stack can run a unary operation on current input', () => {
  const keyId = 'q';

  const initialState: CalcState = {
    stack: [8],
    input: '100',
  };

  const expected: CalcState = {
    stack: [10, 8],
    input: '',
  };

  const actual: CalcState = reducer(initialState, {
    type: 'USER_OPERATOR_INPUT',
    keyId,
  });

  expect(actual).toEqual(expected);
});

test('Stack can run an operation with arity 2 on first two elements on stack', () => {
  const keyId = '+';

  const initialState: CalcState = {
    input: '',
    stack: [3, 9, 5],
  };

  const expected: CalcState = {stack: [12, 5], input: ''};

  const actual: CalcState = reducer(initialState, {
    type: 'USER_OPERATOR_INPUT',
    keyId,
  });

  expect(actual).toEqual(expected);
});

test('Stack can run an operation with arity 2 on current input', () => {
  const keyId = '+';

  const initialState: CalcState = {
    input: '3',
    stack: [3, 9, 5],
  };

  const expected: CalcState = {stack: [6, 9, 5], input: ''};

  const actual: CalcState = reducer(initialState, {
    type: 'USER_OPERATOR_INPUT',
    keyId,
  });

  expect(actual).toEqual(expected);
});

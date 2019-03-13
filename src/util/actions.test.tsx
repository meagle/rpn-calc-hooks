import {CalcKey} from '../types';

import {
  addInputToStack,
  removeFromStack,
  sendKey,
  registerKey,
  unregisterKey,
} from './actions';
import {OPERAND_KEYS, OPERATOR_KEYS} from './keys';

test('Sends an operand to the stack', () => {
  const expected = {
    type: 'USER_NUMERIC_INPUT',
    key: OPERAND_KEYS['5'],
  };

  const actual = sendKey(OPERAND_KEYS['5']);
  expect(actual).toEqual(expected);
});

test('Sends an operator to the stack', () => {
  const actual = sendKey(OPERATOR_KEYS['sqrt'], '2');
  expect(actual).toMatchSnapshot();
});

test('Adds the current input to the stack', () => {
  const expected = {
    type: 'ADD_TO_STACK',
    userInput: '42',
  };
  const actual = addInputToStack('42');
  expect(actual).toEqual(expected);

  const actual2 = addInputToStack('42');
  expect(actual2).toEqual(expected);
});

test('Removes from the stack or current input', () => {
  const expected = {
    type: 'REMOVE_FROM_STACK',
    userInput: '42',
  };
  const actual = removeFromStack('42');
  expect(actual).toEqual(expected);
});

test('Removes from the stack when there is no current input', () => {
  const expected = {
    type: 'REMOVE_FROM_STACK',
  };
  const actual = removeFromStack();
  expect(actual).toEqual(expected);
});

test('Register a key', () => {
  const key: CalcKey = {
    type: 'OPERAND',
    keyLabel: '1',
    keyValue: '1',
  };
  const expected = {
    type: 'REGISTER_KEY',
    key,
  };
  const actual = registerKey(key);
  expect(actual).toEqual(expected);
});

test('Unregister a key', () => {
  const expected = {
    type: 'UNREGISTER_KEY',
    keyLabel: '1',
  };
  const actual = unregisterKey('1');
  expect(actual).toEqual(expected);
});

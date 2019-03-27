import {Action, Stack, CalcState} from '../types';
import {OPERAND_KEYS, OPERATOR_KEYS} from './keys';

const initialState: CalcState = {
  input: '',
  stack: [],
};

export const reducer = (
  state: CalcState = initialState,
  action: Action
): CalcState => {
  let {stack, input} = state;
  switch (action.type) {
    case 'USER_NUMERIC_INPUT':
      const inputKey = OPERAND_KEYS[action.keyId];
      return {input: `${input}${inputKey.keyValue}`, stack};
    case 'ADD_TO_STACK':
      return {
        stack: [Number(input), ...stack.slice(0, stack.length)],
        input: '',
      };
    case 'REMOVE_FROM_STACK':
      if (!input && stack.length > 0) {
        stack = stack.slice(1, stack.length);
      }
      if (input.length > 0) {
        input = input.slice(0, input.length - 1);
      }
      return {input, stack};
    case 'USER_OPERATOR_INPUT':
      const {keyId} = action;
      const calcKey = OPERATOR_KEYS[keyId];
      if (input) {
        stack = calcKey.fn([Number(input), ...stack]);
        input = '';
      } else {
        stack = calcKey.fn(stack);
      }
      return {input, stack};
    default:
      return {input, stack};
  }
};

export default reducer;

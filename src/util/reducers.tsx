import {Action, Stack, CalcState} from '../types';
import {OPERAND_KEYS, OPERATOR_KEYS} from './keys';

export const reduceInput = (input: string = '', action: Action): string => {
  switch (action.type) {
    case 'USER_NUMERIC_INPUT':
      const calcKey = OPERAND_KEYS[action.keyId];
      return `${input}${calcKey.keyValue}`;
    case 'REMOVE_FROM_STACK':
      if (input.length > 0) {
        return input.slice(0, input.length - 1);
      }
      return input;
    case 'USER_OPERATOR_INPUT':
    case 'ADD_USER_INPUT_TO_STACK':
      return '';
    default:
      return input;
  }
};

export const reduceStack = (stack: Stack = [], action: Action): Stack => {
  console.log('action: ', action, 'stack', stack);
  switch (action.type) {
    case 'ADD_USER_INPUT_TO_STACK':
      return [Number(action.userInput), ...stack.slice(0, stack.length)];
    case 'REMOVE_FROM_STACK':
      if (!action.userInput && stack.length > 0) {
        stack = stack.slice(1, stack.length);
      }
      return stack;
    case 'USER_OPERATOR_INPUT':
      const {userInput, keyId} = action;
      const calcKey = OPERATOR_KEYS[keyId];
      if (calcKey.arity === 1 && userInput) {
        stack = [calcKey.fn(Number(userInput)), ...stack];
      } else if (calcKey.arity === 1) {
        stack = [calcKey.fn(stack[0]), ...stack.slice(1, stack.length)];
      } else if (calcKey.arity === 2 && stack.length > 0 && userInput) {
        stack = [
          calcKey.fn(Number(userInput), stack[0]),
          ...stack.slice(1, stack.length),
        ];
      } else if (calcKey.arity === 2 && stack.length > 1) {
        const firstItemOnStack = stack.shift()!;
        stack = [
          calcKey.fn(firstItemOnStack, stack[0]), // TODO: don't know if I like this TS override but can investigate later
          ...stack.slice(1, stack.length),
        ];
      }
      return stack;
    default:
      return stack;
  }
};

export default (state: CalcState, action: Action) => {
  if (action.type === 'ADD_TO_STACK') {
    action = {
      type: 'ADD_USER_INPUT_TO_STACK',
      userInput: state.input,
    };
  }

  const stack = reduceStack(state && state.stack, action);
  const input = reduceInput(state && state.input, action);

  return {
    input,
    stack,
  };
};

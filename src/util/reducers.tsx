import {combineReducers} from 'redux';
import {Action, Stack, CalcKey, CalcKeyMap} from '../types';
import removeObjectKey from './removeObjectKey';

export const reduceInput = (input: string = '', action: Action): string => {
  switch (action.type) {
    case 'USER_NUMERIC_INPUT':
      return `${input}${action.key.keyValue}`;
    case 'REMOVE_FROM_STACK':
      if (input.length > 0) {
        return input.slice(0, input.length - 1);
      }
      return input;
    case 'USER_OPERATOR_INPUT':
    case 'ADD_TO_STACK':
      return '';
    default:
      return input;
  }
};

export const reduceStack = (stack: Stack = [], action: Action): Stack => {
  switch (action.type) {
    case 'ADD_TO_STACK':
      return [Number(action.userInput), ...stack.slice(0, stack.length)];
    case 'REMOVE_FROM_STACK':
      if (!action.userInput && stack.length > 0) {
        stack = stack.slice(1, stack.length);
      }
      return stack;
    case 'USER_OPERATOR_INPUT':
      const {userInput} = action;
      if (action.key.arity === 1 && userInput) {
        stack = [action.key.fn(Number(userInput)), ...stack];
      } else if (action.key.arity === 1) {
        stack = [action.key.fn(stack[0]), ...stack.slice(1, stack.length)];
      } else if (action.key.arity === 2 && stack.length > 0 && userInput) {
        stack = [
          action.key.fn(Number(userInput), stack[0]),
          ...stack.slice(1, stack.length),
        ];
      } else if (action.key.arity === 2 && stack.length > 1) {
        stack = [
          action.key.fn(stack.shift()!, stack[0]), // TODO: don't know if I like this TS override but can investigate later
          ...stack.slice(1, stack.length),
        ];
      }
      return stack;
    default:
      return stack;
  }
};

export const reduceKeys = (
  keys: CalcKeyMap = {},
  action: Action
): CalcKeyMap => {
  switch (action.type) {
    case 'REGISTER_KEY':
      keys[action.key.keyLabel] = action.key;
      return keys;
    case 'UNREGISTER_KEY':
      return removeObjectKey(action.keyLabel, keys);
    default:
      return keys;
  }
};

export default combineReducers({
  input: reduceInput,
  // stack: undoable(reduceStack),  TODO: reintroduce this later
  stack: reduceStack,
  keys: reduceKeys,
});

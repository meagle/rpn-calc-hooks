import {Action, CalcKey} from '../types';

export const addInputToStack = (userInput: string): Action => ({
  type: 'ADD_TO_STACK',
  userInput,
});

export const removeFromStack = (userInput?: string): Action => ({
  type: 'REMOVE_FROM_STACK',
  userInput,
});

export const sendKey = (key: CalcKey, userInput?: string): Action => {
  switch (key.type) {
    case 'OPERAND':
      return {
        type: 'USER_NUMERIC_INPUT',
        key,
      };
    case 'OPERATOR':
      return {
        type: 'USER_OPERATOR_INPUT',
        key,
        userInput,
      };
  }
};

// TODO: add registerKey and unregisterKey actions

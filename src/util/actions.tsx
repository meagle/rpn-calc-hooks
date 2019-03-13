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

export const registerKey = (key: CalcKey): Action => ({
  type: 'REGISTER_KEY',
  key,
});

export const unregisterKey = (keyLabel: string): Action => ({
  type: 'UNREGISTER_KEY',
  keyLabel,
});

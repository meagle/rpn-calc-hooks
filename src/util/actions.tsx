import {Action, CalcKeyType} from '../types';

export const addInputToStack = (): Action => ({
  type: 'ADD_TO_STACK',
});

export const removeFromStack = (userInput?: string): Action => ({
  type: 'REMOVE_FROM_STACK',
  userInput,
});

export const sendKey = (
  keyId: string,
  keyType: CalcKeyType,
  userInput?: string
): Action => {
  switch (keyType) {
    case 'OPERAND':
      return {
        type: 'USER_NUMERIC_INPUT',
        keyId,
      };
    case 'OPERATOR':
      return {
        type: 'USER_OPERATOR_INPUT',
        keyId,
        userInput,
      };
  }
};

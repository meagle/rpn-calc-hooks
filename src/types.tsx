import {Dispatch} from 'react';

export type OperandCalcKey = {
  keyValue: string;
  keyLabel: string;
};

export type OperatorCalcKey = OperandCalcKey & {
  arity: number;
  fn: (...args: Array<number>) => number;
};

export type CalcKey = OperandCalcKey | OperatorCalcKey;

export type Stack = number[];

export type CalcState = {
  stack: Stack;
  input: string;
  keys?: {[key: string]: CalcKey};
};

export type CalcContext = {state: CalcState; dispatch: Dispatch<Action>};

export type UserNumericInputAction = {
  type: 'USER_NUMERIC_INPUT';
  key: OperandCalcKey;
};

export type UserExpressionInputAction = {
  type: 'USER_OPERATOR_INPUT';
  key: OperatorCalcKey;
  userInput?: string;
};

export type AddToStackAction = {
  type: 'ADD_TO_STACK';
  userInput: string;
};

export type RemoveStackAction = {
  type: 'REMOVE_FROM_STACK';
  userInput?: string;
};

export type Action =
  | UserNumericInputAction
  | UserExpressionInputAction
  | AddToStackAction
  | RemoveStackAction;

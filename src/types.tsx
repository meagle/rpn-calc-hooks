import {Dispatch} from 'react';

type Key = {
  keyValue: string;
  keyLabel: string;
  'js-key': string;
};

export type OperandCalcKey = Key & {
  type: 'OPERAND';
};

export type OperatorCalcKey = Key & {
  type: 'OPERATOR';
  arity: number;
  fn: (...args: Array<number>) => number;
};

export type CalcKey = OperandCalcKey | OperatorCalcKey;

export type CalcKeyType = CalcKey['type'];

export type Stack = number[];

export type CalcKeyMap = {[key: string]: CalcKey};

export type CalcState = {
  stack: Stack;
  input: string;
};

export type CalcContext = {state: CalcState; dispatch: Dispatch<Action>};

export type UserNumericInputAction = {
  type: 'USER_NUMERIC_INPUT';
  keyId: string;
};

export type UserExpressionInputAction = {
  type: 'USER_OPERATOR_INPUT';
  keyId: string;
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

export type RegisterKeyAction = {
  type: 'REGISTER_KEY';
  key: CalcKey;
};

export type UnregisterKeyAction = {
  type: 'UNREGISTER_KEY';
  keyLabel: string;
};

export type Action =
  | UserNumericInputAction
  | UserExpressionInputAction
  | AddToStackAction
  | RemoveStackAction
  | RegisterKeyAction
  | UnregisterKeyAction;

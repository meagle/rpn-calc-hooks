import {CalcKey, OperandCalcKey, OperatorCalcKey} from '../types';
import {compose} from 'redux';

const toRadians = (angle: number) => angle * (Math.PI / 180);

const round = (x: number) => Math.round(x * 1000000) / 1000000;

const generateOperands = (): {[key: string]: OperandCalcKey} => {
  return [...Array(10).keys(), '.']
    .map(n => {
      return n.toString();
    })
    .reduce((acc, val: string) => {
      acc[val] = {
        type: 'OPERAND',
        keyValue: val,
        keyLabel: val,
        'js-key': val,
      };
      return acc;
    }, {});
};

export const OPERAND_KEYS: {[key: string]: OperandCalcKey} = generateOperands();

export const OPERATOR_KEYS: {[key: string]: OperatorCalcKey} = {
  Enter: {
    type: 'OPERATOR',
    arity: 0,
    keyValue: 'Enter',
    keyLabel: 'Enter',
    fn: a => a,
    'js-key': 'Enter',
  },
  Backspace: {
    type: 'OPERATOR',
    arity: 0,
    keyValue: 'Backspace',
    keyLabel: 'DEL',
    fn: a => a,
    'js-key': 'Backspace',
  },
  '+': {
    type: 'OPERATOR',
    arity: 2,
    keyValue: '+',
    keyLabel: '+',
    fn: (a, b) => a + b,
    'js-key': '+',
  },
  '-': {
    type: 'OPERATOR',
    arity: 2,
    keyValue: '-',
    keyLabel: '-',
    fn: (a, b) => b - a,
    'js-key': '-',
  },
  '*': {
    type: 'OPERATOR',
    arity: 2,
    keyValue: '*',
    keyLabel: '*',
    fn: (a, b) => a * b,
    'js-key': '*',
  },
  '/': {
    type: 'OPERATOR',
    arity: 2,
    keyValue: '/',
    keyLabel: '/',
    fn: (a, b) => b / a,
    'js-key': '/',
  },
  q: {
    type: 'OPERATOR',
    arity: 1,
    keyValue: 'q',
    keyLabel: 'sqrt',
    fn: n => Math.sqrt(n),
    'js-key': 'q',
  },
  e: {
    type: 'OPERATOR',
    arity: 1,
    keyValue: 'e',
    keyLabel: 'e^x',
    fn: n => Math.pow(Math.E, n),
    'js-key': 'e',
  },
  x: {
    type: 'OPERATOR',
    arity: 1,
    keyValue: 't',
    keyLabel: '10^x',
    fn: n => Math.pow(10, n),
    'js-key': 't',
  },
  y: {
    type: 'OPERATOR',
    arity: 2,
    keyValue: 'y',
    keyLabel: 'y^x',
    fn: (x, y) => Math.pow(y, x),
    'js-key': 'y',
  },
  o: {
    type: 'OPERATOR',
    arity: 1,
    keyValue: 'o',
    keyLabel: '1/x',
    fn: x => 1 / x,
    'js-key': 'o',
  },
  C: {
    type: 'OPERATOR',
    arity: 1,
    keyValue: 'C',
    keyLabel: 'CHS',
    fn: x => x * -1,
    'js-key': 'C',
  },
  s: {
    type: 'OPERATOR',
    arity: 1,
    keyValue: 's',
    keyLabel: 'SIN',
    'js-key': 's',
    fn: compose(
      round,
      Math.sin,
      toRadians
    ),
  },
  c: {
    type: 'OPERATOR',
    arity: 1,
    keyValue: 'c',
    keyLabel: 'COS',
    'js-key': 'c',
    fn: compose(
      round,
      Math.cos,
      toRadians
    ),
  },
  t: {
    type: 'OPERATOR',
    arity: 1,
    keyValue: 't',
    keyLabel: 'TAN',
    'js-key': 't',
    fn: compose(
      round,
      Math.tan,
      toRadians
    ),
  },
};

export const ALL_KEYS: {[key: string]: CalcKey} = {
  ...OPERAND_KEYS,
  ...OPERATOR_KEYS,
};

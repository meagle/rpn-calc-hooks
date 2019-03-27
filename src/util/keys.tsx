import {CalcKey, OperandCalcKey, OperatorCalcKey} from '../types';
import {compose} from 'redux';

const firstElement = (x: Array<number>) => x[0];

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
    fn: (x: Array<number>): Array<number> => x,
    'js-key': 'Enter',
  },
  Backspace: {
    type: 'OPERATOR',
    arity: 0,
    keyValue: 'Backspace',
    keyLabel: 'DEL',
    fn: (x: Array<number>): Array<number> => x,
    'js-key': 'Backspace',
  },
  '+': {
    type: 'OPERATOR',
    arity: 2,
    keyValue: '+',
    keyLabel: '+',
    fn: (x: Array<number>) => [x[0] + x[1], ...x.slice(2)],
    'js-key': '+',
  },
  '-': {
    type: 'OPERATOR',
    arity: 2,
    keyValue: '-',
    keyLabel: '-',
    fn: (x: Array<number>) => [x[1] - x[0], ...x.slice(2)],
    'js-key': '-',
  },
  '*': {
    type: 'OPERATOR',
    arity: 2,
    keyValue: '*',
    keyLabel: '*',
    fn: (x: Array<number>) => [x[0] * x[1], ...x.slice(2)],
    'js-key': '*',
  },
  '/': {
    type: 'OPERATOR',
    arity: 2,
    keyValue: '/',
    keyLabel: '/',
    fn: (x: Array<number>) => [x[1] / x[0], ...x.slice(2)],
    'js-key': '/',
  },
  q: {
    type: 'OPERATOR',
    arity: 1,
    keyValue: 'q',
    keyLabel: 'SQRT',
    fn: (x: Array<number>) => [Math.sqrt(x[0]), ...x.slice(1)],
    'js-key': 'q',
  },
  e: {
    type: 'OPERATOR',
    arity: 1,
    keyValue: 'e',
    keyLabel: 'e^x',
    fn: (x: Array<number>) => [Math.pow(Math.E, x[0]), ...x.slice(1)],
    'js-key': 'e',
  },
  x: {
    type: 'OPERATOR',
    arity: 1,
    keyValue: 't',
    keyLabel: '10^x',
    fn: (x: Array<number>) => [Math.pow(10, x[0]), ...x.slice(1)],
    'js-key': 't',
  },
  y: {
    type: 'OPERATOR',
    arity: 2,
    keyValue: 'y',
    keyLabel: 'y^x',
    fn: (x: Array<number>) => [Math.pow(x[1], x[0]), ...x.slice(2)],
    'js-key': 'y',
  },
  o: {
    type: 'OPERATOR',
    arity: 1,
    keyValue: 'o',
    keyLabel: '1/x',
    fn: (x: Array<number>) => [1 / x[0], ...x.slice(1)],
    'js-key': 'o',
  },
  C: {
    type: 'OPERATOR',
    arity: 1,
    keyValue: 'C',
    keyLabel: 'CHS',
    fn: (x: Array<number>) => [x[0] * -1, ...x.slice(1)],
    'js-key': 'C',
  },
  s: {
    type: 'OPERATOR',
    arity: 1,
    keyValue: 's',
    keyLabel: 'SIN',
    'js-key': 's',
    fn: (x: Array<number>) => [
      compose(
        round,
        Math.sin,
        toRadians,
        firstElement
      )(x),
      ...x.slice(1),
    ],
  },
  c: {
    type: 'OPERATOR',
    arity: 1,
    keyValue: 'c',
    keyLabel: 'COS',
    'js-key': 'c',
    fn: (x: Array<number>) => [
      compose(
        round,
        Math.cos,
        toRadians,
        firstElement
      )(x),
      ...x.slice(1),
    ],
  },
  t: {
    type: 'OPERATOR',
    arity: 1,
    keyValue: 't',
    keyLabel: 'TAN',
    'js-key': 't',
    fn: (x: Array<number>) => [
      compose(
        round,
        Math.tan,
        toRadians,
        firstElement
      )(x),
      ...x.slice(1),
    ],
  },
  S: {
    type: 'OPERATOR',
    arity: 3,
    keyValue: 'S',
    keyLabel: 'SWAP',
    'js-key': 'S',
    fn: (stack: Array<number>) => {
      return [stack[1], stack[0], ...stack.slice(2, stack.length)];
    },
  },
  R: {
    type: 'OPERATOR',
    arity: 3,
    keyValue: 'R',
    keyLabel: 'ROLL',
    'js-key': 'R',
    fn: (stack: Array<number>) => {
      return [...stack.slice(1, stack.length), stack[0]];
    },
  },
};

export const ALL_KEYS: {[key: string]: CalcKey} = {
  ...OPERAND_KEYS,
  ...OPERATOR_KEYS,
};

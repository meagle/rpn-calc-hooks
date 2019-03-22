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
  enter: {
    type: 'OPERATOR',
    arity: 0,
    keyValue: 'Enter',
    keyLabel: 'Enter',
    fn: a => a,
    'js-key': 'Enter',
  },
  backspace: {
    type: 'OPERATOR',
    arity: 0,
    keyValue: 'Backspace',
    keyLabel: 'DEL',
    fn: a => a,
    'js-key': 'Backspace',
  },
  add: {
    type: 'OPERATOR',
    arity: 2,
    keyValue: '+',
    keyLabel: '+',
    fn: (a, b) => a + b,
    'js-key': '+',
  },
  sub: {
    type: 'OPERATOR',
    arity: 2,
    keyValue: '-',
    keyLabel: '-',
    fn: (a, b) => b - a,
    'js-key': '-',
  },
  mult: {
    type: 'OPERATOR',
    arity: 2,
    keyValue: '*',
    keyLabel: '*',
    fn: (a, b) => a * b,
    'js-key': '*',
  },
  div: {
    type: 'OPERATOR',
    arity: 2,
    keyValue: '/',
    keyLabel: '/',
    fn: (a, b) => b / a,
    'js-key': '/',
  },
  sqrt: {
    type: 'OPERATOR',
    arity: 1,
    keyValue: 'q',
    keyLabel: 'sqrt',
    fn: n => Math.sqrt(n),
    'js-key': 'q',
  },
  ex: {
    type: 'OPERATOR',
    arity: 1,
    keyValue: 'e',
    keyLabel: 'e^x',
    fn: n => Math.pow(Math.E, n),
    'js-key': 'e',
  },
  tenx: {
    type: 'OPERATOR',
    arity: 1,
    keyValue: 't',
    keyLabel: '10^x',
    fn: n => Math.pow(10, n),
    'js-key': 't',
  },
  yx: {
    type: 'OPERATOR',
    arity: 2,
    keyValue: 'y',
    keyLabel: 'y^x',
    fn: (x, y) => Math.pow(y, x),
    'js-key': 'y',
  },
  oneoverx: {
    type: 'OPERATOR',
    arity: 1,
    keyValue: 'o',
    keyLabel: '1/x',
    fn: x => 1 / x,
    'js-key': 'o',
  },
  chs: {
    type: 'OPERATOR',
    arity: 1,
    keyValue: 'C',
    keyLabel: 'CHS',
    fn: x => x * -1,
    'js-key': 'C',
  },
  sin: {
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
  cos: {
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
  tan: {
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

import {OperandCalcKey, OperatorCalcKey} from '../types';
import {compose} from 'redux';

const toRadians = (angle: number) => angle * (Math.PI / 180);

const round = (x: number) => Math.round(x * 1000000) / 1000000;

export const generateOperands = () => {
  return [...Array(10).keys(), '.']
    .map(n => {
      return n.toString();
    })
    .reduce((acc, val: string) => {
      acc[val] = {
        keyValue: val,
        keyLabel: val,
      };
      return acc;
    }, {});
};

export const OPERAND_KEYS: {[key: string]: OperandCalcKey} = generateOperands();

export const OPERATOR_KEYS: {[key: string]: OperatorCalcKey} = {
  enter: {
    arity: 0,
    keyValue: 'Enter',
    keyLabel: 'Enter',
    fn: a => a,
  },
  backspace: {
    arity: 0,
    keyValue: 'Backspace',
    keyLabel: 'DEL',
    fn: a => a,
  },
  add: {
    arity: 2,
    keyValue: '+',
    keyLabel: '+',
    fn: (a, b) => a + b,
  },
  sub: {
    arity: 2,
    keyValue: '-',
    keyLabel: '-',
    fn: (a, b) => b - a,
  },
  mult: {
    arity: 2,
    keyValue: '*',
    keyLabel: '*',
    fn: (a, b) => a * b,
  },
  div: {
    arity: 2,
    keyValue: '/',
    keyLabel: '/',
    fn: (a, b) => b / a,
  },
  sqrt: {
    arity: 1,
    keyValue: 'q',
    keyLabel: 'sqrt',
    fn: n => Math.sqrt(n),
  },
  ex: {
    arity: 1,
    keyValue: 'e',
    keyLabel: 'e^x',
    fn: n => Math.pow(Math.E, n),
  },
  tenx: {
    arity: 1,
    keyValue: 't',
    keyLabel: '10^x',
    fn: n => Math.pow(10, n),
  },
  yx: {
    arity: 2,
    keyValue: 'y',
    keyLabel: 'y^x',
    fn: (x, y) => Math.pow(y, x),
  },
  oneoverx: {
    arity: 1,
    keyValue: 'o',
    keyLabel: '1/x',
    fn: x => 1 / x,
  },
  chs: {
    arity: 1,
    keyValue: 'C',
    keyLabel: 'CHS',
    fn: x => x * -1,
  },
  sin: {
    arity: 1,
    keyValue: 's',
    keyLabel: 'SIN',
    fn: compose(
      round,
      Math.sin,
      toRadians
    ),
  },
  cos: {
    arity: 1,
    keyValue: 'c',
    keyLabel: 'COS',
    fn: compose(
      round,
      Math.cos,
      toRadians
    ),
  },
  tan: {
    arity: 1,
    keyValue: 't',
    keyLabel: 'TAN',
    fn: compose(
      round,
      Math.tan,
      toRadians
    ),
  },
};

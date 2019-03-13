import * as React from 'react';
import {OperatorCalcKey, OperandCalcKey, CalcContext, CalcKey} from '../types';

const DEFAULT_CONTEXT: CalcContext = {
  state: {
    stack: [],
    input: '',
    keys: {},
  },
  dispatch: () => {},
};

const CalculatorContext = React.createContext(DEFAULT_CONTEXT);

const {Provider, Consumer} = CalculatorContext;

export {DEFAULT_CONTEXT, Provider, Consumer, CalculatorContext};

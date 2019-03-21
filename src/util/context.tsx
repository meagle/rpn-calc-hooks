import * as React from 'react';
import {CalcContext} from '../types';

const DEFAULT_CONTEXT: CalcContext = {
  state: {
    stack: [],
    input: '',
  },
  dispatch: () => {},
};

const CalculatorContext = React.createContext(DEFAULT_CONTEXT);

export {DEFAULT_CONTEXT, CalculatorContext};

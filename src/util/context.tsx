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

const {Provider, Consumer} = React.createContext(DEFAULT_CONTEXT);

export {DEFAULT_CONTEXT, Provider, Consumer};

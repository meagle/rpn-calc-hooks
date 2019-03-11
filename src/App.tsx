import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from './util/context';
import reducer from './util/reducers';
import {OperatorCalcKey, OperandCalcKey, CalcKey, CalcState} from './types';

const _onOperator = (calcKey: OperatorCalcKey) => undefined;

const _onOperand = (calcKey: OperandCalcKey) => undefined;

const _registerKey = (calcKey: CalcKey) => undefined;

let initialState: CalcState = {
  stack: [],
  input: '',
};

const App = () => {
  let [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Provider
        value={{
          state,
          dispatch,
        }}
      >
        <div>Test</div>
      </Provider>
    </div>
  );
};
export default App;

import React, {ReactNode, useReducer, useMemo} from 'react';
import logo from './logo.svg';
import './App.css';
import {CalculatorContext} from './util/context';
import reducer from './util/reducers';
import Results from './components/Results';
import {CalcState} from './types';
import {checkPropTypes} from 'prop-types';

type Props = {
  children: ReactNode;
};

let initialState: CalcState = {
  input: '',
  stack: [],
};

const App = (props: Props) => {
  let [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => {
    return {state, dispatch};
  }, [state, dispatch]);

  // const _registerKey = (calcKey: CalcKey) => undefined;

  return (
    <div>
      <CalculatorContext.Provider value={value}>
        {props.children}
      </CalculatorContext.Provider>
    </div>
  );
};
export default App;

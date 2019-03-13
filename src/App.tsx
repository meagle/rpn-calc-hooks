import React, {useReducer, useMemo} from 'react';
import logo from './logo.svg';
import './App.css';
import {CalculatorContext} from './util/context';
import reducer from './util/reducers';
import Results from './components/Results';
import {CalcState} from './types';

let initialState: CalcState = {
  input: '',
  stack: [],
  keys: {},
};

const App = () => {
  let [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => {
    return {state, dispatch};
  }, [state, dispatch]);

  // const _registerKey = (calcKey: CalcKey) => undefined;

  return (
    <div>
      <CalculatorContext.Provider value={value}>
        <Results />
      </CalculatorContext.Provider>
    </div>
  );
};
export default App;

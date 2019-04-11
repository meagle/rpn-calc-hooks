import React, {ReactNode, useReducer, useMemo} from 'react';
import './App.css';
import {CalculatorContext} from './util/context';
import reducer from './util/reducers';
import {CalcState} from './types';

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

  return (
    <div style={{margin: '0 25px'}}>
      <CalculatorContext.Provider value={value}>
        {props.children}
      </CalculatorContext.Provider>
    </div>
  );
};
export default App;

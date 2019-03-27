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

  // TODO: Create a layout component for keys and a single method
  // that will iterate over each of the key definitions and create
  // a keydown listener (maybe in a separate util) and attach them to
  // window

  return (
    <div style={{margin: '0 25px'}}>
      <CalculatorContext.Provider value={value}>
        {props.children}
      </CalculatorContext.Provider>
    </div>
  );
};
export default App;

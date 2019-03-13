import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from './util/context';
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

  // const _registerKey = (calcKey: CalcKey) => undefined;

  return (
    <div>
      <Provider
        value={{
          state,
          dispatch,
        }}
      >
        <Results />
      </Provider>
    </div>
  );
};
export default App;

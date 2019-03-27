import React, {useContext} from 'react';
import {CalculatorContext} from '../util/context';
import './Results.css';

const UserInput = () => {
  const {state} = useContext(CalculatorContext);
  return (
    <li className="Result-item input">{state.input ? state.input : '0'}</li>
  );
};

export default UserInput;

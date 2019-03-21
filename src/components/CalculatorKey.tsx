import React, {useContext} from 'react';
import {CalculatorContext} from '../util/context';
import {sendKey} from '../util/actions';
import {CalcKey} from '../types';
// import Button from 'react-bootstrap/lib/Button';
// import '../css/CalculatorKey.css';

type Props = {
  calcKey: CalcKey;
  keyId: string;
};

const CalculatorKey = ({calcKey: {keyLabel, type: keyType}, keyId}: Props) => {
  let context = useContext(CalculatorContext);
  let {state, dispatch} = context;

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    dispatch(sendKey(keyId, keyType, state.input));
  };

  // TODO: Handle key presses in addition to clicks

  return (
    <div className="Calc-key" onClick={handleClick}>
      {/* <div bsStyle="primary" bsSize="large"> */}
      <div>{keyLabel}</div>
    </div>
  );
};

export default CalculatorKey;

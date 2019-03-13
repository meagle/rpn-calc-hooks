import React, {useContext, useEffect, useRef} from 'react';
import {CalcKey} from '../types';
import {CalculatorContext} from '../util/context';
import {sendKey} from '../util/actions';
// import Button from 'react-bootstrap/lib/Button';
// import '../css/CalculatorKey.css';

type Props = {
  calcKey: CalcKey;
};

const CalculatorKey = ({calcKey}: Props) => {
  let context = useContext(CalculatorContext);
  let {state, dispatch} = context;

  useEffect(() => {
    // dispatch();  // TODO: registerKey
    return () => {
      // dispatch();  // TODO: unregisterKey
    };
  }, []);

  const _sendKey = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    dispatch(sendKey(calcKey, state.input));
  };

  return (
    <div className="Calc-key" onClick={_sendKey}>
      {/* <div bsStyle="primary" bsSize="large"> */}
      <div>{calcKey.keyLabel}</div>
    </div>
  );
};

export default CalculatorKey;

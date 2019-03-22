import React, {useContext} from 'react';
import {CalculatorContext} from '../util/context';
import {sendKey} from '../util/actions';
import useKeyboardEvent from '../util/useKeyboardEvent';
import {ALL_KEYS} from '../util/keys';

type Props = {
  keyId: string;
};

const CalculatorKey = ({keyId}: Props) => {
  const {state, dispatch} = useContext(CalculatorContext);
  const {type: keyType, keyLabel} = ALL_KEYS[keyId];
  useKeyboardEvent(keyId, () => {
    dispatch(sendKey(keyId, keyType, state.input));
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    dispatch(sendKey(keyId, keyType, state.input));
  };

  return (
    <div className="Calc-key" onClick={handleClick}>
      <div>{keyLabel}</div>
    </div>
  );
};

export default CalculatorKey;

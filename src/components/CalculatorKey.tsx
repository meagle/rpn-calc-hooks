import React, {useContext, useCallback} from 'react';
import {CalculatorContext} from '../util/context';
import {sendKey} from '../util/actions';
import useKeyboardEvent from '../util/useKeyboardEvent';
import {ALL_KEYS} from '../util/keys';

type Props = {
  keyId: string;
};

const CalculatorKey = ({keyId}: Props) => {
  const {
    state: {input: userInput},
    dispatch,
  } = useContext(CalculatorContext);
  const {type: keyType, keyLabel} = ALL_KEYS[keyId];

  const memoizedHandleKeydown = useCallback(() => {
    dispatch(sendKey(keyId, keyType, userInput));
  }, [keyId, keyType, userInput]);

  useKeyboardEvent(keyId, memoizedHandleKeydown);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    dispatch(sendKey(keyId, keyType, userInput));
  };

  return (
    <div className="Calc-key" onClick={handleClick}>
      <div>{keyLabel}</div>
    </div>
  );
};

export default CalculatorKey;

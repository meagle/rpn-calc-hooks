import React, {useContext, useCallback} from 'react';
import classnames from 'classnames';
import {CalculatorContext} from '../util/context';
import {sendKey, addInputToStack} from '../util/actions';
import useKeyboardEvent from '../util/useKeyboardEvent';
import {ALL_KEYS} from '../util/keys';
import './CalculatorKey.css';

type Props = {
  keyId: string;
};

const CalculatorKey = ({keyId}: Props) => {
  const {dispatch} = useContext(CalculatorContext);
  const {type: keyType, keyLabel} = ALL_KEYS[keyId];

  const memoizedHandleKeydown = useCallback(() => {
    if (keyId === 'enter') {
      dispatch(addInputToStack());
    } else {
      dispatch(sendKey(keyId, keyType));
    }
  }, [keyId, keyType]);

  useKeyboardEvent(keyId, memoizedHandleKeydown);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (keyId === 'enter') {
      dispatch(addInputToStack());
    } else {
      dispatch(sendKey(keyId, keyType));
    }
  };

  const keyStyle = classnames({
    'Calc-key': true,
    [`${keyType.toLowerCase()}`]: true,
  });

  return (
    <div className={keyStyle} onClick={handleClick}>
      <div>{keyLabel}</div>
    </div>
  );
};

export default CalculatorKey;

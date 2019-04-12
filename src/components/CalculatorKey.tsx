import React, {useState, useContext, useCallback} from 'react';
import classnames from 'classnames';
import {CalculatorContext} from '../util/context';
import {sendKey, addInputToStack, removeFromStack} from '../util/actions';
import useKeyboardEvent from '../util/useKeyboardEvent';
import {ALL_KEYS} from '../util/keys';
import './CalculatorKey.css';

type Props = {
  keyId: string;
};

const CalculatorKey = ({keyId}: Props) => {
  const {dispatch} = useContext(CalculatorContext);
  const {type: keyType, keyLabel} = ALL_KEYS[keyId];
  const [keyPressed, setKeyPressed] = useState(false);

  const keyHandler = (keyId: string) => () => {
    if (keyId === 'Enter') {
      dispatch(addInputToStack());
    } else if (keyId === 'Backspace') {
      dispatch(removeFromStack());
    } else {
      dispatch(sendKey(keyId, keyType));
    }
  };

  const memoizedHandleKeydown = useCallback(keyHandler(keyId), [keyId]);

  useKeyboardEvent(keyId, memoizedHandleKeydown);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    memoizedHandleKeydown();
  };

  const handleToggleKeyDown = () => {
    setKeyPressed(!keyPressed);
  };

  const keyStyle = classnames({
    'Calc-key': true,
    [`${keyType.toLowerCase()}`]: true,
    enter: keyId === 'Enter',
    'key-pressed': keyPressed,
  });

  return (
    <div
      className={keyStyle}
      onClick={handleClick}
      onMouseDown={handleToggleKeyDown}
      onMouseUp={handleToggleKeyDown}
    >
      <div>{keyLabel}</div>
    </div>
  );
};

export default CalculatorKey;

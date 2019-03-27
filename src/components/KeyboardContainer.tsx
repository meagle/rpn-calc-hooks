import React from 'react';
import './KeyboardContainer.css';
import CalculatorKey from './CalculatorKey';

const KeyboardContainer = () => (
  <div className="KeyboardContainer-keys-container">
    <div className="KeyboardContainer-operator-keys-container">
      <CalculatorKey keyId={'Enter'} />
      <CalculatorKey keyId={'Backspace'} />
      <CalculatorKey keyId={'+'} />
      <CalculatorKey keyId={'-'} />
      <CalculatorKey keyId={'*'} />
      <CalculatorKey keyId={'/'} />
      <CalculatorKey keyId={'q'} />
      <CalculatorKey keyId={'e'} />
      <CalculatorKey keyId={'x'} />
      <CalculatorKey keyId={'y'} />
      <CalculatorKey keyId={'o'} />
      <CalculatorKey keyId={'C'} />
      <CalculatorKey keyId={'s'} />
      <CalculatorKey keyId={'c'} />
      <CalculatorKey keyId={'t'} />
    </div>
    <div className="KeyboardContainer-operand-keys-container">
      <CalculatorKey keyId={'0'} />
      <CalculatorKey keyId={'1'} />
      <CalculatorKey keyId={'2'} />
      <CalculatorKey keyId={'3'} />
      <CalculatorKey keyId={'4'} />
      <CalculatorKey keyId={'5'} />
      <CalculatorKey keyId={'6'} />
      <CalculatorKey keyId={'7'} />
      <CalculatorKey keyId={'8'} />
      <CalculatorKey keyId={'9'} />
      <CalculatorKey keyId={'.'} />
    </div>
  </div>
);

export default KeyboardContainer;

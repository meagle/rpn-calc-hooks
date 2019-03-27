import React from 'react';
import './KeyboardContainer.css';
import CalculatorKey from './CalculatorKey';

const KeyboardContainer = () => (
  <div className="KeyboardContainer-keys-container">
    <div className="KeyboardContainer-operator-keys-container">
      <CalculatorKey keyId={'Backspace'} />
      <CalculatorKey keyId={'q'} />
      <CalculatorKey keyId={'x'} />
      <CalculatorKey keyId={'*'} />

      <CalculatorKey keyId={'y'} />
      <CalculatorKey keyId={'o'} />
      <CalculatorKey keyId={'R'} />
      <CalculatorKey keyId={'/'} />

      <CalculatorKey keyId={'e'} />
      <CalculatorKey keyId={'C'} />
      <CalculatorKey keyId={'S'} />
      <CalculatorKey keyId={'+'} />

      <CalculatorKey keyId={'s'} />
      <CalculatorKey keyId={'c'} />
      <CalculatorKey keyId={'t'} />
      <CalculatorKey keyId={'-'} />
    </div>
    <div className="KeyboardContainer-operand-keys-container">
      <CalculatorKey keyId={'1'} />
      <CalculatorKey keyId={'2'} />
      <CalculatorKey keyId={'3'} />
      <CalculatorKey keyId={'4'} />
      <CalculatorKey keyId={'5'} />
      <CalculatorKey keyId={'6'} />
      <CalculatorKey keyId={'7'} />
      <CalculatorKey keyId={'8'} />
      <CalculatorKey keyId={'9'} />
      <CalculatorKey keyId={'0'} />
      <CalculatorKey keyId={'.'} />
      <CalculatorKey keyId={'Enter'} />
    </div>
  </div>
);

export default KeyboardContainer;

import React, {useContext, useEffect, useRef} from 'react';
import StackItem from './StackItem';
// import Input from './Input';
import './Results.css';
import {CalculatorContext} from '../util/context';
import UserInput from './UserInput';

const Results = () => {
  const context = useContext(CalculatorContext);
  let resultPanelEl = useRef<HTMLDivElement>(null);
  const stack = [...context.state.stack];

  useEffect(() => {
    if (resultPanelEl.current !== null) {
      resultPanelEl.current.scrollTop = resultPanelEl.current.scrollHeight;
    }
  }, [context.state.stack]);

  return (
    <div className="Result-panel" ref={resultPanelEl}>
      <ul>
        {stack.reverse().map((item, idx) => (
          <StackItem key={idx} item={item} />
        ))}
        <UserInput />
      </ul>
    </div>
  );
};

export default Results;

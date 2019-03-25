import React, {useContext, useEffect, useRef} from 'react';
import StackItem from './StackItem';
// import Input from './Input';
import './Results.css';
import {CalculatorContext} from '../util/context';

const Results = () => {
  let context = useContext(CalculatorContext);
  let resultPanelEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (resultPanelEl.current !== null)
      resultPanelEl.current.scrollTop = resultPanelEl.current.scrollHeight;
  }, [context.state.stack]);

  return (
    <div className="Result-panel" ref={resultPanelEl}>
      <ul className="list-group">
        {context.state.stack.reverse().map((item, idx) => (
          <StackItem key={idx} item={item} />
        ))}
        {/* <Input input={input} /> */}
      </ul>
    </div>
  );
};

// const mapStateToProps = (state: State) => ({
//   stack: state.stack.present,
//   input: state.input,
// });

// export default connect(mapStateToProps)(Results);
export default Results;

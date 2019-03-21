import * as React from 'react';
import 'jest-dom/extend-expect';
import {CalculatorContext, DEFAULT_CONTEXT} from './context';
import {render, cleanup} from 'react-testing-library';

afterEach(cleanup);

test('Provider has a Consumer with DEFAULT_CONTEXT', () => {
  const context = {...DEFAULT_CONTEXT};

  const tree = (
    <CalculatorContext.Provider value={context}>
      <CalculatorContext.Consumer>
        {ctx => <span>Received: {String(context === ctx)}</span>}
      </CalculatorContext.Consumer>
    </CalculatorContext.Provider>
  );
  const {getByText} = render(tree);
  expect(getByText(/^Received:/)).toHaveTextContent('Received: true');
});

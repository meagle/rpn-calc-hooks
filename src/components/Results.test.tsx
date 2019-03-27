import React from 'react';
import {render, cleanup} from 'react-testing-library';
import Results from './Results';
import {CalculatorContext} from '../util/context';

afterEach(cleanup);

test('Results renders', () => {
  const {getByText} = render(
    <CalculatorContext.Provider
      value={{
        state: {
          stack: [111, 222, 333],
          input: '2',
        },
        dispatch: jest.fn(),
      }}
    >
      <Results />
    </CalculatorContext.Provider>
  );
  expect(getByText(/^111/));
  expect(getByText(/^222/));
  expect(getByText(/^333/));
});

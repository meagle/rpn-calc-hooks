import React from 'react';
import {render} from 'react-testing-library';
import UserInput from './UserInput';
import {CalculatorContext} from '../util/context';

test('User input renders with a default value of 0', async () => {
  const {getByText} = render(<UserInput />);
  expect(getByText(/^0/));
});

test('User input renders with a given value', async () => {
  const {getByText} = render(
    <CalculatorContext.Provider
      value={{
        state: {
          stack: [111, 222, 333],
          input: '42',
        },
        dispatch: jest.fn(),
      }}
    >
      <UserInput />
    </CalculatorContext.Provider>
  );
  expect(getByText(/^42/));
});

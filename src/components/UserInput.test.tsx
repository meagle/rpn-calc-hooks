import React from 'react';
import {render} from 'react-testing-library';
import UserInput from './UserInput';

test('User input renders with a default value of 0', async () => {
  const {getByText} = render(<UserInput />);
  expect(getByText(/^0/));
});

test('User input renders with a given value', async () => {
  const {getByText} = render(<UserInput value={123} />);
  expect(getByText(/^123/));
});

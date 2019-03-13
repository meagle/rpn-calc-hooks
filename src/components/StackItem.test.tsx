import React from 'react';
import {render, cleanup} from 'react-testing-library';
import StackItem from './StackItem';

afterEach(cleanup);

test('StackItem renders an item', () => {
  const {container, getByText} = render(<StackItem item={5555} />);
  expect(getByText(/^5555/));
});

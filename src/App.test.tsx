import React from 'react';
import App from './App';
import {render, cleanup} from 'react-testing-library';

afterEach(cleanup);

test('renders App', () => {
  const {container, getByText} = render(<App />);
  // expect(getByText(/^Test/));
});

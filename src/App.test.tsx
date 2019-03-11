import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render, cleanup} from 'react-testing-library';

afterEach(cleanup);

it('renders App', () => {
  const {container, getByText} = render(<App />);
  expect(getByText(/^Test/));
});

import React from 'react';
import {render, cleanup} from 'react-testing-library';
import Results from './Results';
import {Provider} from '../util/context';

afterEach(cleanup);

test('Results renders', () => {
  const {container, getByText, debug} = render(
    <Provider
      value={{
        state: {
          stack: [111, 222, 333],
          input: '2',
          keys: {},
        },
        dispatch: jest.fn(),
      }}
    >
      <Results />
    </Provider>
  );
  expect(getByText(/^111/));
  expect(getByText(/^222/));
  expect(getByText(/^333/));
});

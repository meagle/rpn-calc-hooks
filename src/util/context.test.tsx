import * as React from 'react';
import 'jest-dom/extend-expect';
import {Provider, Consumer, DEFAULT_CONTEXT} from './context';
import {render, cleanup} from 'react-testing-library';

afterEach(cleanup);

test('Provider has a Consumer with DEFAULT_CONTEXT', () => {
  const context = {...DEFAULT_CONTEXT};
  const div = document.createElement('div');

  const tree = (
    <Provider value={context}>
      <Consumer>
        {ctx => <span>Received: {String(context === ctx)}</span>}
      </Consumer>
    </Provider>
  );
  const {getByText} = render(tree);
  expect(getByText(/^Received:/)).toHaveTextContent('Received: true');
});

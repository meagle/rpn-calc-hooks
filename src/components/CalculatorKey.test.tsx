import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
} from 'react-testing-library';
import App from '../App';
import CalculatorKey from './CalculatorKey';
import {CalculatorContext} from '../util/context';
import {OPERAND_KEYS} from '../util/keys';
import {CalcContext} from '../types';

afterEach(cleanup);

test('Results renders', async () => {
  const keyId = '+';

  const {getByText} = render(<CalculatorKey keyId={keyId} />);
  expect(getByText(/^\+/));
});

test('Click calculator key', async () => {
  const keyId = '1';

  const tree = (
    <App>
      <CalculatorContext.Consumer>
        {(ctx: CalcContext) =>
          ctx.state.input && (
            <label htmlFor="userInput">
              Input:
              <input
                id="userInput"
                data-testid="userInput"
                name="userInput"
                type="text"
                defaultValue={ctx.state.input}
              />
            </label>
          )
        }
      </CalculatorContext.Consumer>
      <CalculatorKey keyId={keyId} />
    </App>
  );

  const {getByText, getByLabelText, debug} = render(tree);

  fireEvent.click(getByText(/^1/));

  const input = await waitForElement(() => getByLabelText('Input:')).then(
    element => {
      console.log('DOM Changed!');
      // debug();
      return element;
    }
  );

  expect((input as HTMLInputElement).value).toBe('1');
});

test('onKeydown calculator key', async () => {
  const keyId = '1';

  const tree = (
    <App>
      <CalculatorContext.Consumer>
        {(ctx: CalcContext) =>
          ctx.state.input && (
            <label htmlFor="userInput">
              Input:
              <input
                id="userInput"
                data-testid="userInput"
                name="userInput"
                type="text"
                defaultValue={ctx.state.input}
              />
            </label>
          )
        }
      </CalculatorContext.Consumer>
      <CalculatorKey keyId={keyId} />
    </App>
  );

  const {getByText, getByLabelText} = render(tree);

  fireEvent.keyDown(getByText(/^1/), {key: '1'});

  const input = await waitForElement(() => getByLabelText('Input:')).then(
    element => {
      console.log('DOM Changed!');
      return element;
    }
  );

  expect((input as HTMLInputElement).value).toBe('1');
});

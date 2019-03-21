import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  waitForDomChange,
} from 'react-testing-library';
import {DEFAULT_CONTEXT} from '../util/context';
import App from '../App';
import CalculatorKey from './CalculatorKey';
import {CalculatorContext} from '../util/context';
import {OPERATOR_KEYS, OPERAND_KEYS} from '../util/keys';
import {CalcContext} from '../types';

afterEach(cleanup);

test('Results renders', () => {
  const keyId = 'add';
  const key = OPERATOR_KEYS[keyId];

  const {getByText} = render(<CalculatorKey keyId={keyId} calcKey={key} />);
  expect(getByText(/^\+/));
});

test('Click calculator key', () => {
  const context = {...DEFAULT_CONTEXT};

  const keyId = '1';
  const key = OPERAND_KEYS[keyId];

  const tree = (
    <App>
      <CalculatorContext.Consumer>
        {(ctx: CalcContext) =>
          ctx.state.input && (
            <label htmlFor="userInput">
              Input:
              <input
                id="userInput"
                name="userInput"
                type="text"
                defaultValue={ctx.state.input}
              />
            </label>
          )
        }
      </CalculatorContext.Consumer>
      <CalculatorKey keyId={keyId} calcKey={key} />
    </App>
  );

  const {getByText, getByLabelText, container, debug} = render(tree);
  waitForDomChange({container})
    .then(() => {
      console.log('DOM Changed!');
      debug();
    })
    .catch(err => console.log(`Error: ${err}`));
  expect(getByText(/^1/));
  fireEvent.click(getByText(/^1/));
  debug();
  const input = getByLabelText('Input:');
  expect((input as HTMLInputElement).value).toBe('1');
});

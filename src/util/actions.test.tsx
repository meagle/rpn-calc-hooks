import { addInputToStack, removeFromStack, sendKey } from "./actions";
import { OPERAND_KEYS, OPERATOR_KEYS } from "./keys";

test("Sends an operand to the stack", () => {
  const keyId = "5";
  const calcKey = OPERAND_KEYS[keyId];

  const expected = {
    type: "USER_NUMERIC_INPUT",
    keyId
  };

  const actual = sendKey(keyId, calcKey.type);
  expect(actual).toEqual(expected);
});

test("Sends an operator to the stack", () => {
  const keyId = "sqrt";
  const calcKey = OPERATOR_KEYS[keyId];

  const actual = sendKey(keyId, calcKey.type, "2");
  expect(actual).toMatchInlineSnapshot(`
Object {
  "keyId": "sqrt",
  "type": "USER_OPERATOR_INPUT",
  "userInput": "2",
}
`);
});

test("Adds the current input to the stack", () => {
  const expected = {
    type: "ADD_TO_STACK",
    userInput: "42"
  };
  const actual = addInputToStack("42");
  expect(actual).toEqual(expected);

  const actual2 = addInputToStack("42");
  expect(actual2).toEqual(expected);
});

test("Removes from the stack or current input", () => {
  const expected = {
    type: "REMOVE_FROM_STACK",
    userInput: "42"
  };
  const actual = removeFromStack("42");
  expect(actual).toEqual(expected);
});

test("Removes from the stack when there is no current input", () => {
  const expected = {
    type: "REMOVE_FROM_STACK"
  };
  const actual = removeFromStack();
  expect(actual).toEqual(expected);
});

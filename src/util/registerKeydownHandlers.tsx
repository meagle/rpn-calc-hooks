import {Dispatch} from 'react';
import {ALL_KEYS} from '../util/keys';
import {Action, CalcState} from '../types';
import {sendKey} from '../util/actions';

// TODO:  Evalutate this further because not sure we need
// this since it needs so much from context as a util funciton
const registerKeydownHandlers = (
  dispatch: Dispatch<Action>,
  state: CalcState
) => {
  for (let key in ALL_KEYS) {
    const {'js-key': keyCode, type: keyType} = ALL_KEYS[key];
    window.addEventListener('keydown', event => {
      if (event.key === keyCode) {
        dispatch(sendKey(key, keyType, state.input));
      }
    });
  }
};

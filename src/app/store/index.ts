import { createStore } from 'redux';
import { defaultState } from '../../server/defaultState';

function reducer(state = defaultState, action) {
  return state;
}

export const store = createStore(reducer);
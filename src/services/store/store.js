import { createStore } from 'redux';

import {
  SET_USER_TOKEN
} from './actions'

const initialState = {}

const reducer = (state, action) => {
  switch(action.type) {
    case SET_USER_TOKEN: return { userToken: action.payload }
  }
}

const store = createStore(reducer, initialState);

export default store;

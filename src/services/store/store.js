import { createStore } from 'redux';

const actions = (
  userToken = null,
  action,
  ivalue
) => {
  switch(action.type) {
    case 'setToken':
      return { userToken: ivalue }
    case 'getToken':
      return { userToken }
  }
}

let store = createStore(actions);

export default store;

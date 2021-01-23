import store from './store'

export const getUserToken = () => {
  return store.getState()?.userToken;
} 
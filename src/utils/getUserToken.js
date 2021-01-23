import store from '../services/store';

const getUserToken = () => {
  return store.getState()?.userToken;
};

export default getUserToken;
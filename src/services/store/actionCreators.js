import { SET_USER_TOKEN } from './actions'

const setUserToken = (userToken) => {
  return {
    type: SET_USER_TOKEN,
    payload: userToken,
  }
}

export default {
  setUserToken
}
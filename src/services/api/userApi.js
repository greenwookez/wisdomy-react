import Api from './Api'

const userApi = new Api('users');
const userTokenApi = new Api('user_token');

export default {
  signIn: ({ email, password }) => {
    console.log('REQUEST REQUEST REQUEST REQUEST')
    return userTokenApi.post({
      auth: {
        email,
        password,
      }
    })
  },
  signUp: ({ email, password, nick }) => {
    return userApi.post({
      data: {
        type: 'user',
        attributes: {
          email,
          password,
          nick,
        }
      }
    })
  }
};
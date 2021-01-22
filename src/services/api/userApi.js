import Api from './Api'

const userApi = new Api('/user');
const userTokenApi = new Api('/user_token');

export default {
  signIn(email, password) {
    userTokenApi.post({
      auth: {
        email,
        password,
      }
    })
  },
  signUp(email, password, nick) {
    userApi.post({
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
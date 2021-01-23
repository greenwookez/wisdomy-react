import Api from '../Api';

const userApi = new Api('users');
const userTokenApi = new Api('user_token');

export default {
  signIn: ({ email, password }) => {
    return userTokenApi.post({
      auth: {
        email,
        password,
      }
    })
  },
  signUp: (data) => {
    return userApi.post({
      data: {
        type: 'user',
        attributes: data,
      }
    })
  }
};

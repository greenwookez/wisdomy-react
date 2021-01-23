import api from '../api';

export default {
  signIn: ({ email, password }) => {
    return api.post('user_token', {
      auth: {
        email,
        password,
      }
    })
  },
  signUp: (data) => {
    return api.post('users', {
      data: {
        type: 'user',
        attributes: data,
      }
    })
  }
};

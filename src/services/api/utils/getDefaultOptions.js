import getUserToken from '../../../utils/getUserToken';

const getDefaultOptions = () => {
  const userToken = getUserToken();

  return {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(userToken && { Auhorization: `Bearer ${userToken}` })
    },
  }
};

export default getDefaultOptions;
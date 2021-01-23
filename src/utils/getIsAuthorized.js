import getUserToken from './getUserToken';

const getIsAuthorized = () => {
  return getUserToken()?.length > 0;
};

export default getIsAuthorized;
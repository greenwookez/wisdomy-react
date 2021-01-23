import jsonapi from 'jsonapi-parse';

const prepareResponse = (response) => {
  const preparedResponse = jsonapi.parse(response);

  return preparedResponse.data
};

export default prepareResponse;
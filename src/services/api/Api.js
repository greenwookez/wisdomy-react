import generateUrl from './utils/generateUrl'
import getDefaultOptions from './utils/getDefaultOptions';

const BASE_URL = 'https://wisdomy.herokuapp.com/api/';

class Api {
  fetch(path, options) {
    return fetch(path, options).then(response => response.text())
  }

  get(path, params) {
    const url = generateUrl(BASE_URL + path, params);

    return fetch(url, getDefaultOptions()).then(this.handleResponse)
  }

  post(path, body) {
    const url = BASE_URL + path;
    
    const options = {
      method: 'POST',
      ...getDefaultOptions(),
      body: JSON.stringify(body)
    }

    return fetch(url, options).then(this.handleResponse)
  }
  
  put(path, body) {
    const url = BASE_URL + path;
    
    const options = {
      method: 'PUT',
      ...getDefaultOptions(),
      body: JSON.stringify(body)
    }

    return fetch(url, options).then(this.handleResponse)
  }

  patch(path, body) {
    const url = BASE_URL + path;
    
    const options = {
      method: 'PATCH',
      ...getDefaultOptions(),
      body: JSON.stringify(body)
    }

    return fetch(url, options).then(this.handleResponse)
  }

  handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    })
  }

}

export default new Api();
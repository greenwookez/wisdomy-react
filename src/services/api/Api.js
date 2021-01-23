import generateUrl from './utils/generateUrl'

const BASE_URL = 'https://wisdomy.herokuapp.com/api/';
const OPTIONS = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
}

class Api {
  constructor(uri, options) {
    this.options = { ...OPTIONS, ...options }
  }

  fetch(...args) {
    return fetch(args).then(response => response.json())
  }

  get(path, params) {
    const url = generateUrl(BASE_URL + path, params);

    return this.fetch(url, this.options)
  }

  post(path, body) {
    const url = BASE_URL + path;
    
    return this.fetch(url, {
      method: 'POST',
      ...this.options,
      body: JSON.stringify(body)
    })
  }

  put(path, body) {
    const url = BASE_URL + path;
    
    return this.fetch(url, {
      method: 'PUT',
      ...this.options,
      body: JSON.stringify(body)
    })
  }

  patch(path, body) {
    const url = BASE_URL + path;
    
    return this.fetch(url, {
      method: 'PATCH',
      ...this.options,
      body: JSON.stringify(body)
    })
  }

  delete(path, body) {
    const url = BASE_URL + path;
    
    return this.fetch(url, {
      method: 'DELETE',
      ...this.options,
      body: JSON.stringify(body)
    })
  }
}

export default new Api();
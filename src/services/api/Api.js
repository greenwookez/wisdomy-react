
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
    this.url = BASE_URL + uri;
  }

  fetch(args) {
    return fetch(this.url, args)
  }

  get(args) {
    return this.fetch({
      method: 'GET',
      ...this.options,
      body: JSON.stringify(args)
    })
  }

  post(args) {
    return this.fetch({
      method: 'POST',
      ...this.options,
      body: JSON.stringify(args)
    })
  }

  put(args) {
    return this.fetch({
      method: 'PUT',
      ...this.options,
      body: JSON.stringify(args)
    })
  }

  patch(args) {
    return this.fetch({
      method: 'PUT',
      ...this.options,
      body: JSON.stringify(args)
    })
  }

  delete(args) {
    return this.fetch({
      method: 'DELETE',
      ...this.options,
      body: JSON.stringify(args)
    })
  }
}

export default Api;
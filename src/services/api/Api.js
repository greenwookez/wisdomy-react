
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

  fetch(uri, args) {
    fetch(this.url + uri, args)
  }

  get(args) {
    this.fetch({
      method: 'GET',
      ...this.options,
      body: JSON.stringify(args)
    })
  }

  post(args) {
    this.fetch({
      method: 'POST',
      ...this.options,
      body: JSON.stringify(args)
    })
  }

  put(args) {
    this.fetch({
      method: 'PUT',
      ...this.options,
      body: JSON.stringify(args)
    })
  }

  patch(args) {
    this.fetch({
      method: 'PUT',
      ...this.options,
      body: JSON.stringify(args)
    })
  }

  delete(args) {
    this.fetch({
      method: 'DELETE',
      ...this.options,
      body: JSON.stringify(args)
    })
  }
}

export default Api;
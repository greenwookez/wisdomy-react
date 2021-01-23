import api from '../Api'

export default {
  getQuotes: (params) => {
    return api.get('quotes', params)
  }
}

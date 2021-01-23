import api from '../api'

export default {
  getQuotes: (params) => {
    return api.get('quotes', params)
  }
}
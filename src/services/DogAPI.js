import axios from 'axios'

const requester = axios.create({
  baseURL: 'https://api-iddog.idwall.co'
})

export const setToken = token => {
  requester.defaults.headers['Authorization'] = token
}

export const signup = ({ email }) => {
  return requester.post('/signup', { email })
    .then(response => response.data.user)
}

export const fetchFeed = ({ category = null } = {}) => {
  const params = {}

  if (category) {
    params.category = category
  }

  return requester.get('/feed', { params })
    .then(response => response.data)
}

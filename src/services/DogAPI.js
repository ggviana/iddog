import axios from 'axios'
import EntityMap from 'util/EntityMap'
import id from 'util/id'
import getIn from 'util/getIn'
import LocalStorage from './LocalStorage'

const requester = axios.create({
  baseURL: 'https://api-iddog.idwall.co'
})

requester.interceptors.response.use(id, data => {
  if (getIn(data, 'response.status') === 401) {
    LocalStorage.remove('_u')
  }
})

export const extractIdFrom = text => text.replace(/^.*?img\/.*?\/.*?_(.*?)\..*/, '$1')

const normalize = ({ category, list }) => list
  .map((image, order) => ({
    id: extractIdFrom(image),
    category,
    image,
    order
  }))
  .reduce(
    (map, dog) => map.set(dog.id, dog),
    new EntityMap()
  )

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
    .then(response => getIn(response, 'data', { list: [] }))
    .then(normalize)
}

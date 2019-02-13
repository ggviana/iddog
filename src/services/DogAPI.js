import axios from 'axios'
import EntityMap from 'util/EntityMap'

const requester = axios.create({
  baseURL: 'https://api-iddog.idwall.co'
})

export const extractDogIdFromImage = image => image.replace(/^.*?img\/.*?\/.*?_(.*?)\..*/, '$1')

const getDogFrom = (category, image, order) => {
  const id = extractDogIdFromImage(image)

  return {
    category,
    id,
    image,
    order
  }
}

const normalizeDogs = ({ category, list }) => list
  .map((image, order) => getDogFrom(category, image, order))
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
    .then(response => response.data)
    .then(normalizeDogs)
}

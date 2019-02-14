import { create } from 'reworm'
import LocalStorage from 'services/LocalStorage'
import { setToken } from 'services/DogAPI'

const AUTO_LOGOUT_TIMEOUT = 4000

const applyToken = user => {
  if (user && user.token) {
    setToken(user.token)
  } else {
    setToken(null)
  }
}

const user = LocalStorage.get('_u')
applyToken(user)

export const { get, select, set } = create({
  user: user || null
})

export const getCurrentUser = select(({ user }) => user)
export const setCurrentUser = user => {
  LocalStorage.set('_u', user)
  applyToken(user)
  set({ user })
}

setInterval(() => {
  if (!LocalStorage.get('_u')) {
    setCurrentUser(null)
  }
}, AUTO_LOGOUT_TIMEOUT)

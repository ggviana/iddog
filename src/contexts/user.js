import { create } from 'reworm'
import LocalStorage from 'services/LocalStorage'

const AUTO_LOGOUT_TIMEOUT = 4000

export const { get, select, set } = create({
  user: LocalStorage.get('_u') || null
})

export const getCurrentUser = select(({ user }) => user)
export const setCurrentUser = user => {
  LocalStorage.set('_u', user)
  set({ user })
}

setInterval(() => {
  if (!LocalStorage.get('_u')) {
    setCurrentUser(null)
  }
}, AUTO_LOGOUT_TIMEOUT)

import { create } from 'reworm'
import LocalStorage from 'services/LocalStorage'

export const { get, select, set } = create({
  user: LocalStorage.get('_u') || null
})

export const getCurrentUser = select(({ user }) => user)
export const setCurrentUser = user => {
  LocalStorage.set('_u', user)
  set({ user })
}

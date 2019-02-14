import { create } from 'reworm'

export const { get, select, set } = create({
  email: ''
})

export const changeEmail = email => set({ email })

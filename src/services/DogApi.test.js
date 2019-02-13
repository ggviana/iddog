import * as DogAPI from './DogAPI'

const defaultToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJpZGRvZy1zZXJ2aWNlIiwic3ViIjoiNWI3ZjFmOTg1YTk0MDEzYzA4YTVjZDVjIiwiaWF0IjoxNTM1MDU3ODE2LCJleHAiOjE1MzYzNTM4MTZ9.Ws8rZ-XFqRl80D_llFhcW_fhD5-ysPLUtvSKaa9HCag'

describe('DogAPI', () => {
  it('should login a user', () => {
    const loginEmail = 'ggviana@hotmail.com.br'

    return DogAPI.signup({ email: loginEmail })
      .then(user => {
        expect(user).toBeDefined()
        expect(user.email).toEqual(loginEmail)
        expect(user.token).toBeDefined()
      })
  })

  it('loads the feed', () => {
    const defaultCategory = 'husky'

    DogAPI.setToken(defaultToken)

    return DogAPI.fetchFeed()
      .then(feed => {
        expect(feed).toBeDefined()
        expect(feed.category).toEqual(defaultCategory)
        expect(feed.list).toBeInstanceOf(Array)
      })
  })

  it('loads the fetchFeed with custom category', () => {
    const category = 'pug'

    DogAPI.setToken(defaultToken)

    return DogAPI.fetchFeed({ category })
      .then(feed => {
        expect(feed).toBeDefined()
        expect(feed.category).toEqual(category)
        expect(feed.list).toBeInstanceOf(Array)
      })
  })
})

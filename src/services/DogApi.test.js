import * as DogAPI from './DogAPI'
import EntityMap from 'util/EntityMap'

const defaultToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJpZGRvZy1zZXJ2aWNlIiwic3ViIjoiNWI3ZjFmOTg1YTk0MDEzYzA4YTVjZDVjIiwiaWF0IjoxNTM1MDU3ODE2LCJleHAiOjE1MzYzNTM4MTZ9.Ws8rZ-XFqRl80D_llFhcW_fhD5-ysPLUtvSKaa9HCag'
const defaultCategory = 'husky'
const dogIsFromCategory = category => dog => dog.category === category
const dogHas = property => dog => property in dog

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
    DogAPI.setToken(defaultToken)

    return DogAPI.fetchFeed()
      .then(feed => {
        expect(feed).toBeInstanceOf(EntityMap)
        expect(feed.values.every(dogIsFromCategory(defaultCategory))).toBe(true)
        expect(feed.values.every(dogHas('id'))).toBe(true)
        expect(feed.values.every(dogHas('image'))).toBe(true)
        expect(feed.values.every(dogHas('order'))).toBe(true)
      })
  })

  it('loads the fetchFeed with custom category', () => {
    const category = 'pug'

    DogAPI.setToken(defaultToken)

    return DogAPI.fetchFeed({ category })
      .then(feed => {
        expect(feed).toBeInstanceOf(EntityMap)
        expect(feed.values.every(dogIsFromCategory(category))).toBe(true)
      })
  })

  it('should extract the id from images', () => {
    expect(DogAPI.extractDogIdFromImage('https://dog.ceo/api/img/husky/n02110185_10047.jpg')).toBe('10047')
    expect(DogAPI.extractDogIdFromImage('https://dog.ceo/api/img/husky/n02110185_10116.jpg')).toBe('10116')
    expect(DogAPI.extractDogIdFromImage('https://dog.ceo/api/img/husky/n02110185_10171.jpg')).toBe('10171')
  })
})

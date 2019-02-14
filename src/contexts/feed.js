import { create } from 'reworm'
import { fetchFeed } from 'services/DogAPI'
import EntityMap from 'util/EntityMap'

export const { get, select, set } = create({
  feed: new EntityMap(),
  isLoading: false,
  currentCategory: 'husky'
})

export const visibleFeed = select(state => ({
  isLoading: state.isLoading,
  feed: state.feed.values
    .filter(dog => dog.category === state.currentCategory)
    .sort((a, b) => a.order - b.order)
}))

export const loadFeed = category => {
  set({ isLoading: true, currentCategory: category || 'husky' })

  return fetchFeed({ category })
    .then(feed => set(state => ({
      feed: state.feed.merge(feed),
      isLoading: false
    }))
    )
    .catch(() =>
      set({ isLoading: false })
    )
}

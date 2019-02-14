import { create } from 'reworm'
import { fetchFeed } from 'services/DogAPI'
import EntityMap from 'util/EntityMap'

export const { get, select, set } = create({
  feed: new EntityMap(),
  isLoading: false,
  selectedCategory: 'husky'
})

export const visibleFeed = select(state => ({
  isLoading: state.isLoading,
  selectedCategory: state.selectedCategory,
  feed: state.feed.values
    .filter(dog => dog.category === state.selectedCategory)
    .sort((a, b) => a.order - b.order)
}))

export const loadFeed = category => {
  set({ isLoading: true, selectedCategory: category || 'husky' })

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

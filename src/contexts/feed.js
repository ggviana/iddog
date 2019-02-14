import { create } from 'reworm'
import { fetchFeed } from 'services/DogAPI'
import EntityMap from 'util/EntityMap'

export const { get, select, set } = create({
  feed: new EntityMap(),
  isLoading: false,
  selectedCategory: 'husky',
  selectedDog: null
})

export const visibleFeed = select(({ isLoading, selectedCategory, feed }) => ({
  isLoading,
  selectedCategory,
  feed: feed.values
    .filter(dog => dog.category === selectedCategory)
    .sort((a, b) => a.order - b.order)
}))

export const loadFeed = category => {
  set({
    isLoading: true,
    selectedCategory: category || 'husky',
    selectedDog: null
  })

  return fetchFeed({ category })
    .then(feed => set(state => ({
      feed: state.feed.merge(feed),
      isLoading: false
    })))
    .catch(() =>
      set({ isLoading: false })
    )
}

export const loadFeedById = (id, category) => set(state => {
  // Try to fetch on cache
  const selectedDog = state.feed.get(id) || null

  // If it does not exist on cache try on server
  if (selectedDog === null) {
    set({
      isLoading: true,
      selectedDog: null
    })

    fetchFeed({ category })
      .then(feed => set({
        feed: state.feed.merge(feed)
      }))
      .then(() => set({
        isLoading: false,
        selectedDog: state.feed.get(id) || null
      }))
      .catch(() =>
        set({ isLoading: false })
      )
  }

  return {
    selectedDog
  }
})

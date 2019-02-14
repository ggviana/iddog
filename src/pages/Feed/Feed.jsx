import React, { Component, Fragment } from 'react'
import { visibleFeed, loadFeed } from 'contexts/feed'
import { CategorySelector, ImageList } from 'components'
import getCategoryFrom from 'util/getCategoryFrom'

class Feed extends Component {
  componentDidMount () {
    const preloadedCategory = getCategoryFrom(this.props.location.search)

    if (preloadedCategory) {
      loadFeed(preloadedCategory)
    } else {
      loadFeed()
    }
  }

  render () {
    return (
      <Fragment>
        {visibleFeed(state => (
          <Fragment>
            <CategorySelector
              active={state.selectedCategory}
              onChange={category => {
                this.props.history.push(`/feed?category=${category}`)
                loadFeed(category)
              }} />
            {state.isLoading && <span>Loading</span>}
            <ImageList
              images={state.feed}
              category={state.selectedCategory} />
          </Fragment>
        ))}
      </Fragment>
    )
  }
}

export default Feed

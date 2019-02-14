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

  changeCategory (category) {
    this.props.history.push(`/feed?category=${category}`)
    loadFeed(category)
  }

  render () {
    return visibleFeed(state => (
      <Fragment>
        <CategorySelector
          active={state.selectedCategory}
          onChange={category => this.changeCategory(category)} />
        <ImageList
          images={state.feed}
          category={state.selectedCategory}
          isLoading={state.isLoading} />
      </Fragment>
    ))
  }
}

export default Feed

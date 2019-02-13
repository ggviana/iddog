import React, { Component, Fragment } from 'react'
import { visibleFeed, loadFeed } from 'contexts/feed'
import { CategorySelector, ImageList } from 'components'

class Feed extends Component {
  componentDidMount () {
    const matched = this.props.location.search.match(/category=(husky|hound|pug|labrador)/i)

    if (matched) {
      const [, preloadedCategory] = matched
      loadFeed(preloadedCategory.toLowerCase())
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
                this.props.history.push(`?category=${category}`)
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

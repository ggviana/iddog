import React, { Component, Fragment } from 'react'
import { visibleFeed, loadFeed } from 'contexts/feed'
import { AppTitle, CategorySelector, ImageList, Splash } from 'components'
import getCategoryFrom from 'util/getCategoryFrom'
import getIn from 'util/getIn'

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
    this.props.history.push(`/feed?category=${category}`, {
      preventAnimation: true
    })
    loadFeed(category)
  }

  render () {
    const { location } = this.props
    const animationPrevented = getIn(location, 'state.preventAnimation')

    return (
      <Splash animate={!animationPrevented}>
        <AppTitle />

        {visibleFeed(state => (
          <Fragment>
            <CategorySelector
              active={state.selectedCategory}
              onChange={category => this.changeCategory(category)}
              animate={!animationPrevented} />
            <ImageList
              images={state.feed}
              category={state.selectedCategory}
              isLoading={state.isLoading} />
          </Fragment>
        ))}
      </Splash>
    )
  }
}

export default Feed

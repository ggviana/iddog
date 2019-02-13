import React, { Component, Fragment } from 'react'
import { visibleFeed, loadFeed } from 'contexts/feed'
import { CategorySelector, LightboxLink } from 'components'

class Feed extends Component {
  componentDidMount () {
    const [,preloadedCategory] = this.props.location.search.match(/category=(husky|hound|pug|labrador)/i)
    if (preloadedCategory) {
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
            {state.feed.map(dog => (
              <LightboxLink key={dog.id} id={dog.id}>
                <img src={dog.image} height={300} width={300} alt={`A ${state.selectedCategory}`} />
              </LightboxLink>
            ))}
          </Fragment>
        ))}
      </Fragment>
    )
  }
}

export default Feed

import React, { Component, Fragment } from 'react'
import { visibleFeed, loadFeed } from 'contexts/feed'
import { CategorySelector, LightboxLink } from 'components'

class Feed extends Component {
  componentDidMount () {
    loadFeed()
  }

  render () {
    return (
      <Fragment>
        {visibleFeed(state => (
          <Fragment>
            <CategorySelector active={state.selectedCategory} onChange={loadFeed} />
            {state.isLoading && <span>Loading</span>}
            {state.feed.map(dog => (
              <LightboxLink key={dog.id} id={dog.id}>
                <img src={dog.image} height={300} width={300} />
              </LightboxLink>
            ))}
          </Fragment>
        ))}
      </Fragment>
    )
  }
}

export default Feed

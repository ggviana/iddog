import React, { Component, Fragment } from 'react'
import { visibleFeed, loadFeed } from 'contexts/feed'
import { LightboxLink } from 'components'

class Feed extends Component {
  componentDidMount () {
    loadFeed()
  }

  render () {
    return (
      <Fragment>
        {visibleFeed(state => (
          <Fragment>
            <ul>
              {['husky', 'hound', 'pug', 'labrador'].map(type => (
                <li key={type} onClick={() => loadFeed(type)}>
                  {type}
                </li>
              ))}
            </ul>
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

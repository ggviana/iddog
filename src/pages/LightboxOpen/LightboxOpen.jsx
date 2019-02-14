import React, { Component } from 'react'
import { Lightbox } from 'components'
import { get, loadFeedById } from 'contexts/feed'
import getCategoryFrom from 'util/getCategoryFrom'

class LightboxOpen extends Component {
  componentDidMount () {
    const { match, location } = this.props
    const { id } = match.params
    const category = getCategoryFrom(location.search)

    loadFeedById(id.replace(/\D/g, ''), category)
  }

  render () {
    const { history } = this.props

    return get(({ isLoading, selectedDog, selectedCategory, feed }) =>
      !isLoading && selectedDog !== null && (
        <Lightbox
          dog={selectedDog}
          onClose={() => history.replace(`/feed?category=${selectedCategory}`)} />
      ))
  }
}

export default LightboxOpen

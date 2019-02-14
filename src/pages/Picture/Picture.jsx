import React, { Component, Fragment } from 'react'
import { get, loadFeedById, loadFeed } from 'contexts/feed'
import { AppTitle, CategorySelector, Img } from 'components'
import getCategoryFrom from 'util/getCategoryFrom'
import getIn from 'util/getIn'

class Picture extends Component {
  componentDidMount () {
    const { match, location } = this.props
    const { id } = match.params
    const category = getCategoryFrom(location.search)

    loadFeedById(id.replace(/\D/g, ''), category)
  }

  changeCategory (category) {
    this.props.history.push(`/feed?category=${category}`, {
      preventAnimation: true
    })
    loadFeed(category)
  }

  render () {
    return (
      <Fragment>
        <AppTitle />

        {get(({ selectedCategory, selectedDog }) => (
          <Fragment>
            <CategorySelector
              active={selectedCategory}
              onChange={category => this.changeCategory(category)}
              animate={false} />
            <Img
              src={getIn(selectedDog, 'image')}
              size='portrait' />
          </Fragment>
        ))}
      </Fragment>
    )
  }
}

export default Picture

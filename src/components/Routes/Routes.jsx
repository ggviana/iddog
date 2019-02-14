import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PrivateRoute, PublicRoute } from 'components'
import { Feed, LightboxOpen, Picture, Signup } from 'pages'
import { getCurrentUser } from 'contexts/user'
import getIn from 'util/getIn'

class LightboxSwitch extends Component {
  constructor (props) {
    super(props)

    this.previousLocation = props.location
  }

  componentWillUpdate (nextProps) {
    if (nextProps.history.action !== 'POP' && !this.isLightbox()) {
      this.previousLocation = this.props.location
    }
  }

  isLightbox () {
    const { location } = this.props
    return getIn(location, 'state.lightbox', false) && !this.lastLocationWasFeedItem()
  }

  lastLocationWasFeedItem () {
    const pathname = getIn(this.previousLocation, 'pathname', '')

    return pathname.match(/\/feed\/\d+$/i)
  }

  getLocation () {
    return this.isLightbox() ? this.previousLocation : this.props.location
  }

  render () {
    return getCurrentUser(user =>
      <Fragment>
        <Switch location={this.getLocation()}>
          <PublicRoute user={user} path='/' component={Signup} exact />
          <PublicRoute user={user} path='/signup' component={Signup} />
          <PrivateRoute user={user} path='/feed' component={Feed} exact />
          <PrivateRoute user={user} path='/feed/:id' component={Picture} exact />
        </Switch>

        {this.isLightbox() && (
          <Route path='/feed/:id' component={LightboxOpen} />
        )}
      </Fragment>
    )
  }
}

const Routes = () => (
  <Router>
    <Route component={LightboxSwitch} />
  </Router>
)

export default Routes

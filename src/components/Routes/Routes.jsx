import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PrivateRoute, PublicRoute } from 'components'
import { Feed, Lightbox, Picture, Signup } from 'pages'
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
    return getIn(this.props, 'location.state.lightbox', false)
  }

  getLocation () {
    return this.isLightbox() ? this.previousLocation : this.props.location
  }

  render () {
    return (
      <Fragment>
        <Switch location={this.getLocation()}>
          <PublicRoute path='/' component={Signup} exact />
          <PublicRoute path='/signup' component={Signup} />
          <PrivateRoute path='/feed' component={Feed} exact />
          <PrivateRoute path='/feed/:id' component={Picture} />
        </Switch>

        {this.isLightbox() && (
          <PrivateRoute path='/feed/:id' component={Lightbox} />
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

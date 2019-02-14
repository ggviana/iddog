import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PublicRoute = ({ component: Component, user, ...rest }) => (
  <Route
    {...rest}
    render={props => user != null ? (
      <Redirect to={{
        pathname: '/feed',
        state: {
          from: props.location
        }
      }}
      />
    ) : (
      <Component {...props} />
    )}
  />
)

export default PublicRoute

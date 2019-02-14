import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, user, ...rest }) => (
  <Route
    {...rest}
    render={props => user == null ? (
      <Redirect to={{
        pathname: '/signup',
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

export default PrivateRoute

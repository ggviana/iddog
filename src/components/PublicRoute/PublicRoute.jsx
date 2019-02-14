import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import getCurrentUser from 'selectors/getCurrentUser'

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => getCurrentUser(user => user != null ? (
      <Redirect to={{
        pathname: '/feed',
        state: {
          from: props.location
        }
      }}
      />
    ) : (
      <Component {...props} />
    ))}
  />
)

export default PublicRoute

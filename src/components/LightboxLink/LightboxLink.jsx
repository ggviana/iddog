import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const LightboxLink = ({ id, ...props }) => (
  <Link
    to={{
      pathname: `/feed/${id}`,
      state: {
        lightbox: true
      }
    }}
    {...props}
  />
)

LightboxLink.propTypes = {
  id: PropTypes.number.isRequired
}

export default LightboxLink

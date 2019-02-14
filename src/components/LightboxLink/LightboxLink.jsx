import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const LightboxLink = ({ id, category, ...props }) => (
  <Link
    to={{
      pathname: `/feed/${id}?category=${category}`,
      state: {
        lightbox: true
      }
    }}
    {...props}
  />
)

LightboxLink.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
}

export default LightboxLink

import React from 'react'
import PropTypes from 'prop-types'
import './Splash.css'

const Splash = ({ children, animate = true }) => (
  <div className={animate ? 'Splash' : ''}>
    {children}
  </div>
)

Splash.propTypes = {
  animate: PropTypes.bool
}

export default Splash

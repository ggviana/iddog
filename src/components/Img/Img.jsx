import React from 'react'
import PropTypes from 'prop-types'
import './Img.css'

class Img extends React.PureComponent {
  constructor () {
    super()

    this.state = {
      isReady: false
    }
  }

  setReady () {
    this.setState({ isReady: true })
  }

  render () {
    const { isReady } = this.state
    const { size, src, alt = ' ', ...props } = this.props
    let className = `Img ${size}`

    if (isReady) {
      className += ' ready'
    }

    return (
      <div className={className}>
        {src && (
          <img src={src} alt={alt} {...props} onLoad={() => this.setReady()} />
        )}
        <div className='Img-loader' />
      </div>
    )
  }
}

Img.propTypes = {
  size: PropTypes.oneOf(['small', 'big', 'portrait'])
}

Img.defaultProps = {
  size: 'big'
}

export default Img

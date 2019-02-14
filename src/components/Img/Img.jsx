import React from 'react'
import PropTypes from 'prop-types'
import './Img.css'

class Img extends React.PureComponent {
  state = {
    isReady: false
  }

  setReady () {
    this.setState({ isReady: true })
  }

  render () {
    const { isReady } = this.state
    let className = `Img ${this.props.size}`

    if (isReady) {
      className += ' ready'
    }

    return (
      <div className={className}>
        {this.props.src && (
          <img {...this.props} onLoad={() => this.setReady()} />
        )}
        <div className='Img-loader'/>
      </div>
    )
  }
}

Img.propTypes = {
  size: PropTypes.oneOf(['small', 'big'])
}

Img.defaultProps = {
  alt: ' ',
  size: 'big'
}

export default Img

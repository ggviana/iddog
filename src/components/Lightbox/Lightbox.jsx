import React from 'react'
import PropTypes from 'prop-types'
import './Lightbox.css'
import { Img } from 'components'

const Lightbox = ({ dog, onClose }) => (
  <div className='Lightbox'>
    <div className='Lightbox-fullscreen'>
      <Img src={dog.image} size='small' />
    </div>

    <span className='Lightbox-close' onClick={onClose} />
  </div>
)

Lightbox.propTypes = {
  onClose: PropTypes.func
}

export default Lightbox

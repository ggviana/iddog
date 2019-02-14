import React from 'react'
import './Lightbox.css'

const Lightbox = ({ dog, onClose }) => {
  const { image } = dog
  return (
    <div className='Lightbox'>
      <div className='Lightbox-fullscreen'>
        <img src={image} alt={' '} />
      </div>

      <span className='Lightbox-close' onClick={onClose} />
    </div>
  )
}

export default Lightbox

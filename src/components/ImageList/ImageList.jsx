import React from 'react'
import PropTypes from 'prop-types'
import './ImageList.css'
import { LightboxLink } from 'components'

const ImageList = ({ images, category }) => (
  <div className='ImageList'>
    {images.map(dog => (
      <div className='ImageList-item' key={dog.id}>
        <LightboxLink id={dog.id}>
          <img src={dog.image} alt={`A ${category}`} />
        </LightboxLink>
      </div>
    ))}
  </div>
)

ImageList.propTypes = {
  images: PropTypes.array,
  category: PropTypes.string
}

export default ImageList

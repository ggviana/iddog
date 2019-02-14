import React from 'react'
import PropTypes from 'prop-types'
import './ImageList.css'
import { Img, LightboxLink } from 'components'

const placeholder = Array.from(Array(18), (_, i) => i)

const ImageList = ({ images, isLoading, category }) => (
  <div className='ImageList'>
    {isLoading
      ? placeholder.map(i => <Img key={i} />) : (
        images.map(item => (
          <LightboxLink className='ImageList-item' key={item.id} id={item.id} category={category}>
            <Img src={item.image} />
          </LightboxLink>
        ))
      )}
  </div>
)

ImageList.propTypes = {
  images: PropTypes.array,
  category: PropTypes.string,
  isLoading: PropTypes.bool
}

export default ImageList

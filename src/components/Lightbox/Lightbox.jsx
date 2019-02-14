import React from 'react'

const Lightbox = ({ id, src, next, prev }) => {
  return (
    <div className='Lightbox'>
      <a id={id} href={`#${id}`}>
        <img className='Lightbox-thumbnail' src={src} />

        <span className='Lightbox-fullscreen'>
          <img src={src} />
        </span>
      </a>

      <a className='Lightbox-close' href='#void' />

      {next && (
        <a className='Lightbox-next' href={next}>
          ›
        </a>
      )}

      {prev && (
        <a className='Lightbox-next' href={prev}>
          ‹
        </a>
      )}
    </div>
  )
}

export default Lightbox

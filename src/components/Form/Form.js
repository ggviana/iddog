import React from 'react'
import PropTypes from 'prop-types'
import './Form.css'

const Form = ({ onSubmit, ...props }) => (
  <form {...props}
    className='Form'
    onSubmit={event => {
      event.preventDefault()
      onSubmit()
    }} />
)

Form.propTypes = {
  onSubmit: PropTypes.func
}

export default Form

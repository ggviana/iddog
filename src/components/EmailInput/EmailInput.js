import React from 'react'
import PropTypes from 'prop-types'
import './EmailInput.css'

const EmailInput = ({ onChange, ...props }) => (
  <div className='EmailInput'>
    <input {...props}
      type='email'
      onChange={event => onChange(event.target.value)} />
    <hr />
  </div>
)

EmailInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string
}

export default EmailInput

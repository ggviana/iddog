import React from 'react'

const EmailInput = ({ onChange, ...props }) => (
  <input {...props}
    type='email'
    onChange={event => onChange(event.target.value)} />
)

export default EmailInput

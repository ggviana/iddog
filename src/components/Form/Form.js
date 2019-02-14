import React from 'react'

const Form = ({ onSubmit, ...props }) => (
  <form {...props} onSubmit={event => {
    event.preventDefault()
    onSubmit()
  }} />
)

export default Form

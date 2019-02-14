import React, { Fragment } from 'react'
import { signup } from 'services/DogAPI'
import { get, changeEmail } from 'contexts/signup'
import { setCurrentUser } from 'contexts/user'

const Form = ({ onSubmit, ...props }) => (
  <form {...props} onSubmit={event => {
    event.preventDefault()
    onSubmit()
  }} />
)

const Input = ({ onChange, ...props }) => (
  <input {...props} onChange={event => onChange(event.target.value)} />
)

const EmailInput = props => (
  <Input {...props} type='email' />
)

const Button = props => (
  <button {...props} />
)

const SubmitButton = props => (
  <Button {...props} type='submit' />
)

const Signup = ({ history }) => (
  <Fragment>
    <h1>Signup</h1>
    {get(form => (
      <Form onSubmit={() => signup(form).then(setCurrentUser).then(() => history.replace('/feed'))}>
        <EmailInput name='email'
          value={form.email}
          onChange={changeEmail}
          required />

        <SubmitButton children='Enter' />
      </Form>
    ))}
  </Fragment>
)

export default Signup

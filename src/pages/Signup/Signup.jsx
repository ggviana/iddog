import React, { Fragment } from 'react'
import { signup } from 'services/DogAPI'
import { get, changeEmail } from 'contexts/signup'
import { setCurrentUser } from 'contexts/user'
import { EmailInput, Form } from 'components'

const Signup = ({ history }) => (
  <Fragment>
    <h1>Signup</h1>
    {get(form => (
      <Form onSubmit={() => signup(form).then(setCurrentUser).then(() => history.replace('/feed'))}>
        <EmailInput
          name='email'
          value={form.email}
          onChange={value => changeEmail(value)}
          required />
      </Form>
    ))}
  </Fragment>
)

export default Signup

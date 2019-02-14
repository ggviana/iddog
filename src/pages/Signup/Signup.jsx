import React, { Fragment } from 'react'
import { signup } from 'services/DogAPI'
import { get, changeEmail } from 'contexts/signup'
import { setCurrentUser } from 'contexts/user'
import { EmailInput, Form } from 'components'
import isValidEmail from 'util/isValidEmail'
import debounce from 'util/debounce'

const Signup = ({ history }) => (
  <Fragment>
    <h1>Signup</h1>
    {get(form => (
      <Form>
        <EmailInput
          name='email'
          value={form.email}
          onChange={email => {
            changeEmail(email)

            debounce(() => {
              if (isValidEmail(email)) {
                signup({ email })
                  .then(setCurrentUser)
                  .then(() => history.replace('/feed'))
              }
            }, 2000)()
          }}
          required />
      </Form>
    ))}
  </Fragment>
)

export default Signup

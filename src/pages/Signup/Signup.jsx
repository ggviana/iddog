import React from 'react'
import { signup } from 'services/DogAPI'
import { get, changeEmail } from 'contexts/signup'
import { setCurrentUser } from 'contexts/user'
import { AppTitle, EmailInput, Form, Splash } from 'components'
import isValidEmail from 'util/isValidEmail'
import debounce from 'util/debounce'

const Signup = ({ history }) => (
  <Splash>
    <AppTitle />

    {get(form => (
      <Form>
        <EmailInput
          name='email'
          value={form.email}
          placeholder='Your email'
          title=' '
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
  </Splash>
)

export default Signup

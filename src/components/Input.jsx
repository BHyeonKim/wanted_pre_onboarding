import PropTypes from 'prop-types'

import { useState } from 'react'

import classes from './Input.module.scss'

import { EyeOn, EyeOff, Check } from '../assets/svgs'

function Input({ className }) {
  const [email, setEmail] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  const emailChangeHandler = (event) => {
    const enteredEmail = event.target.value
    if (enteredEmail.includes('@')) {
      const [user, provider] = enteredEmail.split('@')
      if (
        user.length !== 0 &&
        provider.length !== 0 &&
        provider.includes('.') &&
        provider.split('.')[0].length !== 0 &&
        provider.split('.')[1].length !== 0
      ) {
        setEmail(enteredEmail)
      } else {
        setEmail('')
      }
    } else {
      setEmail('')
    }
  }

  const passwordVisibleHandler = (_) => {
    setIsVisible((prev) => {
      return !prev
    })
  }

  return (
    <div className={`${classes.input} ${className}`}>
      <div className={classes.email}>
        <label htmlFor='email'>E-mail</label>
        <input type='email' id='email' placeholder='E-mail' onChange={emailChangeHandler} required />
        <Check
          className={classes.check}
          style={{
            backgroundColor: `${email ? 'rgb(20, 175, 175)' : 'rgb(210, 210, 210)'}`,
          }}
        />
      </div>
      <div className={classes.password}>
        <label htmlFor='password'>password</label>
        <input type={isVisible ? 'text' : 'password'} id='password' placeholder='Password' required />
        <button type='button' alt='eye' className={classes.eye} onClick={passwordVisibleHandler}>
          {isVisible ? <EyeOn /> : <EyeOff />}
        </button>
      </div>
    </div>
  )
}

Input.propTypes = {
  className: PropTypes.string,
}

export default Input

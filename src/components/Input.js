import { useState } from 'react';

import classes from './Input.module.css';

const Input = (props) => {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const emailChangeHandler = (event) => {
    const enteredEmail = event.target.value;
    if (enteredEmail.includes('@')) {
      const [user, provider] = enteredEmail.split('@');
      if (
        user.length !== 0 &&
        provider.length !== 0 &&
        provider.includes('.') &&
        provider.split('.')[0].length !== 0 &&
        provider.split('.')[1].length !== 0
      ) {
        setEmail(enteredEmail);
      } else {
        setEmail('');
      }
    } else {
      setEmail('');
    }
  };

  const passwordVisibleHandler = (_) => {
    setIsVisible((prev) => {
      return !prev;
    });
  };

  return (
    <div className={`${classes.input} ${props.className}`}>
      <div className={classes['email-wrapper']}>
        <label htmlFor='email'>E-mail</label>
        <input
          type='email'
          id='email'
          placeholder='E-mail'
          onChange={emailChangeHandler}
          required
        />
        <img
          alt='check'
          src='/checkmark-outline.svg'
          className={classes['check-mark']}
          style={{
            backgroundColor: `${
              email ? 'rgb(20, 175, 175)' : 'rgb(210, 210, 210)'
            }`,
          }}
        />
      </div>
      <div className={classes['password-wrapper']}>
        <label htmlFor='password'>password</label>
        <input
          type={isVisible ? 'text' : 'password'}
          id='password'
          placeholder='Password'
          required
        />
        <img
          alt='eye'
          src={isVisible ? '/eye-outline.svg' : '/eye-off-outline.svg'}
          className={classes.eye}
          onClick={passwordVisibleHandler}
        />
      </div>
    </div>
  );
};

export default Input;

import { useState } from 'react'

import classes from './Toggle.module.scss'

function Toggle() {
  const [isActive, setIsActive] = useState(false)

  const clickDefaultHandler = () => {
    setIsActive(false)
  }

  const clickDetailHandler = () => {
    setIsActive(true)
  }

  return (
    <div className={`${classes.toggle} ${isActive && classes.active}`}>
      <button type='button' onClick={clickDefaultHandler} className={`${classes.toggle__btn}`}>
        기본
      </button>
      <div className={classes.switch} />
      <button type='button' onClick={clickDetailHandler} className={`${classes.toggle__btn}`}>
        상세
      </button>
    </div>
  )
}

export default Toggle

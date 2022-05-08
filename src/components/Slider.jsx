import PropTypes from 'prop-types'
import { useState } from 'react'
import classes from './Slider.module.scss'

function Slider({ className }) {
  const [value, setValue] = useState(1)

  const valueChangeHandler = (event) => {
    setValue(event.target.value)
  }

  const optionHandler = (event) => {
    setValue(event.target.value)
  }

  return (
    <div className={`${className} ${classes.wrapper}`}>
      <div className={`${classes.result}`}>{value}%</div>
      <input
        type='range'
        min='1'
        max='100'
        step='1'
        onChange={valueChangeHandler}
        value={value}
        list='marks'
        ref={(el) => {
          if (el) {
            el.style.setProperty(
              'background',
              `linear-gradient(to right, rgb(20, 175, 175) 0%, rgb(20, 175, 175)  ${value}%, #d5d4d3  ${value}%, #d5d4d3 100%)`,
              'important'
            )
          }
        }}
        // style={{
        //   background: `linear-gradient(to right, rgb(20, 175, 175) 0%, rgb(20, 175, 175)  ${value}%, #d5d4d3  ${value}%, #d5d4d3 100%)`,
        // }}
      />
      <div className={classes.dots}>
        <div className={classes.dots__dot} style={{ backgroundColor: 'rgb(20, 175, 175)' }} />
        <div
          className={classes.dots__dot}
          style={{
            backgroundColor: `${value >= 25 ? 'rgb(20, 175, 175)' : '#d5d4d3'}`,
          }}
        />
        <div
          className={classes.dots__dot}
          style={{
            backgroundColor: `${value >= 50 ? 'rgb(20, 175, 175)' : '#d5d4d3'}`,
          }}
        />
        <div
          className={classes.dots__dot}
          style={{
            backgroundColor: `${value >= 75 ? 'rgb(20, 175, 175)' : '#d5d4d3'}`,
          }}
        />
        <div
          className={classes.dots__dot}
          style={{
            backgroundColor: `${value >= 100 ? 'rgb(20, 175, 175)' : '#d5d4d3'}`,
          }}
        />
      </div>
      <datalist id='marks'>
        <option value={1} label='1%' onClick={optionHandler}>
          1%
        </option>
        <option value={25} label='25%' onClick={optionHandler}>
          25%
        </option>
        <option value={50} label='50%' onClick={optionHandler}>
          50%
        </option>
        <option value={75} label='75%' onClick={optionHandler}>
          75%
        </option>
        <option value={100} label='100%' onClick={optionHandler}>
          100%
        </option>
      </datalist>
    </div>
  )
}

Slider.propTypes = {
  className: PropTypes.string,
}

export default Slider

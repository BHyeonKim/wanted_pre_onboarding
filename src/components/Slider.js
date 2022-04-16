import { useState } from 'react';
import classes from './Slider.module.css';

const Slider = (props) => {
  const [value, setValue] = useState(1);

  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const optionHandler = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={`${props.className} ${classes['slider__wrapper']}`}>
      <div className={`${classes.result}`}>{value}%</div>
      <input
        type='range'
        min='1'
        max='100'
        step='1'
        onChange={valueChangeHandler}
        value={value}
        list='marks'
        style={{
          background: `linear-gradient(to right, rgb(20, 175, 175) 0%, rgb(20, 175, 175)  ${value}%, #d5d4d3  ${value}%, #d5d4d3 100%)`,
        }}
      />
      <div className={classes.dots}>
        <div
          className={classes.dots__dot}
          style={{ backgroundColor: 'rgb(20, 175, 175)' }}
        ></div>
        <div
          className={classes.dots__dot}
          style={{
            backgroundColor: `${value >= 25 ? 'rgb(20, 175, 175)' : '#d5d4d3'}`,
          }}
        ></div>
        <div
          className={classes.dots__dot}
          style={{
            backgroundColor: `${value >= 50 ? 'rgb(20, 175, 175)' : '#d5d4d3'}`,
          }}
        ></div>
        <div
          className={classes.dots__dot}
          style={{
            backgroundColor: `${value >= 75 ? 'rgb(20, 175, 175)' : '#d5d4d3'}`,
          }}
        ></div>
        <div
          className={classes.dots__dot}
          style={{
            backgroundColor: `${
              value >= 100 ? 'rgb(20, 175, 175)' : '#d5d4d3'
            }`,
          }}
        ></div>
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
  );
};

export default Slider;

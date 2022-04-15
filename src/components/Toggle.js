import { useState } from 'react';

import classes from './Toggle.module.css';

const Toggle = (props) => {
  const [isActive, setIsActive] = useState(false);

  const clickDefaultHandler = () => {
    setIsActive(false);
    console.log('default');
  };

  const clickDetailHandler = () => {
    setIsActive(true);
    console.log('active');
  };

  return (
    <div
      className={`${classes.toggle} ${
        isActive && classes.active
      } center margin-vertical`}
    >
      <div onClick={clickDefaultHandler} className={`${classes['toggle-btn']}`}>
        기본
      </div>
      <div className={classes.switch}></div>
      <div onClick={clickDetailHandler} className={`${classes['toggle-btn']}`}>
        상세
      </div>
    </div>
  );
};

export default Toggle;

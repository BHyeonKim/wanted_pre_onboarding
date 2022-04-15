import { useState } from 'react';
import classes from './Tab.module.css';

const Tab = (props) => {
  const [selectedItem, setSelectedItem] = useState('first');

  const selectFirstHandler = () => {
    setSelectedItem('first');
  };
  const selectSecondHandler = () => {
    setSelectedItem('second');
  };
  const selectThirdHandler = () => {
    setSelectedItem('third');
  };

  return (
    <div
      className={`${props.className} ${classes.tab} ${
        classes[`${selectedItem}`]
      }`}
    >
      <div className={`${classes.item}`} onClick={selectFirstHandler}>
        감자
      </div>
      <div className={`${classes.item}`} onClick={selectSecondHandler}>
        고구마
      </div>
      <div className={`${classes.item}`} onClick={selectThirdHandler}>
        카레라이스
      </div>
      <div className={classes.bar}></div>
    </div>
  );
};

export default Tab;

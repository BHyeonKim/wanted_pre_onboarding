import { useState } from 'react'
import classes from './Tab.module.scss'

function Tab() {
  const [selectedItem, setSelectedItem] = useState('first')

  const selectFirstHandler = () => {
    setSelectedItem('first')
  }
  const selectSecondHandler = () => {
    setSelectedItem('second')
  }
  const selectThirdHandler = () => {
    setSelectedItem('third')
  }

  return (
    <div className={`${classes.tab} ${classes[`${selectedItem}`]}`}>
      <button type='button' className={`${classes.tab__item}`} onClick={selectFirstHandler}>
        감자
      </button>
      <button type='button' className={`${classes.tab__item}`} onClick={selectSecondHandler}>
        고구마
      </button>
      <button type='button' className={`${classes.tab__item}`} onClick={selectThirdHandler}>
        카레라이스
      </button>
      <div className={classes.bar} />
    </div>
  )
}

export default Tab

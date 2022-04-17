import { useState } from 'react';

import classes from './Dropdown.module.css';

const COINS = [
  'bitcoin',
  'ethereum',
  'bitcoin cash',
  'litecoin',
  'ripple',
  'monero',
  'dash',
];

const Dropdown = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedItem, setSelectedItem] = useState(''); // 선택한 아이템
  const [searchedItem, setSearchedItem] = useState(''); // 검색어

  const dropdownHandler = (_) => {
    setIsClicked((prev) => {
      return !prev;
    });
  };

  const selectItemHandler = (event) => {
    if (event.target.localName === 'div') {
      setSelectedItem(event.target.innerText);
    }
  };

  const searchHandler = (event) => {
    const keyword = event.target.value.toLowerCase();
    setSearchedItem(
      COINS.filter((coin) => coin.includes(keyword)).map((coin) => (
        <div className={classes.option} key={coin}>
          {coin}
        </div>
      ))
    );
  };

  return (
    <div className={`${classes.dropdown} ${props.className}`}>
      <button className={classes.btn} onClick={dropdownHandler}>
        {selectedItem || '아이템을 선택하세요'}
      </button>
      <div
        onClick={selectItemHandler}
        className={classes.options}
        style={{ display: `${isClicked ? 'block' : 'none'}` }}
      >
        <input
          className={`${classes.option} ${classes.input}`}
          placeholder='Find Symbol'
          onChange={searchHandler}
        />
        {searchedItem ||
          COINS.map((coin) => {
            return (
              <div className={classes.option} key={coin}>
                {coin}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Dropdown;

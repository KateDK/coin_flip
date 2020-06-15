import React from 'react';
import './Coin.css';

const Coin = (props) => {
  const {currentDraw,src} = props;
  return (
    <div className='Coin'>
      <i alt={currentDraw} className={src}></i>
    </div>
  )
}

export default Coin;

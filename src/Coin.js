import React from 'react';
import './Coin.css';

const Coin = (props) => {
  const {currentDraw,src} = props;
  return (
    <div className='Coin'>
      <img alt={currentDraw} src={src}/>
    </div>
  )
}

export default Coin;

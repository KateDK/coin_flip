import React from 'react';

const Coin = (props) => {
  const {currentDraw,src} = props;
  return (
    <div>
      <img alt={currentDraw} src={src}/>
    </div>
  )
}

export default Coin;

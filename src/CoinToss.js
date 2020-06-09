import React from 'react';


class CoinToss extends React.Component{
  static defaultProps = {
    heads:'https://tinyurl.com/react-coin-heads-jpg',
    tails:'https://tinyurl.com/react-coin-tails-jpg',
  }
  render(){
    return (
      <div>
        <h1>Coin Tossing action here!</h1>
      </div>
    )
  }
}

export default CoinToss;

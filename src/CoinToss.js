import React from 'react';
import Coin from './Coin';

class CoinToss extends React.Component{
  static defaultProps = {
    heads:'https://tinyurl.com/react-coin-heads-jpg',
    tails:'https://tinyurl.com/react-coin-tails-jpg',
  }

  state ={
    headsDrawn: 0,
    tailsDrawn: 0,
    currentDraw: 'tails',
  }

  render(){
    const {currentDraw} = this.state;
    return (
      <div>
        <h1>Coin Tossing action here!</h1>
        <Coin currentDraw={currentDraw} src={this.props[currentDraw]}/>
      </div>
    )
  }
}

export default CoinToss;

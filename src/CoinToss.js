import React from 'react';
import Coin from './Coin';
import {randomChoice} from './helpers';

class CoinToss extends React.Component{
  static defaultProps = {
    heads:'fas fa-user-astronaut',
    tails:'fas fa-satellite',
  }

  state ={
    headsDrawn: 0,
    tailsDrawn: 0,
    currentDraw: 'tails',
  }

  flip = () =>{
    const random = Math.ceil(Math.random()*2);
    random > 1 ? this.setState(prevState => ({tailsDrawn: prevState.tailsDrawn+1, currentDraw: 'tails'})) : this.setState(prevState => ({headsDrawn: prevState.headsDrawn+1, currentDraw:'heads'}));
  }

  render(){
    const {currentDraw,headsDrawn,tailsDrawn} = this.state;
    return (
      <div>
        <h1>Coin Tossing action here!</h1>
        <Coin currentDraw={currentDraw} src={this.props[currentDraw]}/>
        <button onClick={this.flip}>Flip</button>
        <p> out of {headsDrawn+tailsDrawn} flips, there have been {headsDrawn} heads and {tailsDrawn} tails</p>
      </div>
    )
  }
}

export default CoinToss;

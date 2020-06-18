import React from 'react';
import Coin from './Coin';
import {randomChoice} from './helpers';

class CoinToss extends React.Component{
  static defaultProps = {
   faces:[ {face: 'heads', icon:'fas fa-user-astronaut'},
    {face: 'tails',icon:'fas fa-satellite'}]
  }

  state ={
    headsDrawn: 0,
    tailsDrawn: 0,
    currentDraw: null,
  }

  flip = () =>{
    const currentChoice = randomChoice(this.props.faces);
    const newState = {
      ...this.state,
      currentDraw:currentChoice,
    }
   if(currentChoice.face === 'heads'){
     newState.headsDrawn+=1;
   }else{
     newState.tailsDrawn+=1;
   }
   this.setState(newState);
  }

  render(){
    const {currentDraw,headsDrawn,tailsDrawn} = this.state;
    return (
      <div>
        <h1>Coin Tossing action here!</h1>
        {this.state.currentDraw &&<Coin currentDraw={currentDraw.face} src={currentDraw.icon}/>}
        <button onClick={this.flip}>Flip</button>
        <p> out of {headsDrawn+tailsDrawn} flips, there have been {headsDrawn} heads and {tailsDrawn} tails</p>
      </div>
    )
  }
}

export default CoinToss;

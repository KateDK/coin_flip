import React from 'react';
import {randomHexColor} from './helpers';

class ColorBox extends React.Component{

  state={
    color: `#${Math.floor(Math.random()*16777215).toString(16)}`,
  }

  genColor = () => {
    let color = this.state.color;
    let newColor = randomHexColor();
    while(newColor === color){
      newColor=randomHexColor();
    }
    this.setState({color:newColor})};

  render(){
    const {color} = this.state;
    const divStyle = {
      backgroundColor: color,
      width: 300,
      height: 300,
      lineHeight: 9,
    };
    const pStyle = {
      fontWeight: 'bold',
      fontSize: 30,
    }
    return(
      <div className='ColorBox' style={divStyle} onClick={this.genColor}>
        <p style={pStyle}>{color}</p>
      </div>
    )
  }
}

export default ColorBox;

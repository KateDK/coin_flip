import React from 'react';
import {makeRandomHSLColor} from './helpers';
import './ColorBox.css';

class ColorBox extends React.Component{

  state={
    color: makeRandomHSLColor(),
  }

  genColor = () => {
    let color = this.state.color;
    let newColor = makeRandomHSLColor();
    while(newColor === color){
      newColor=makeRandomHSLColor();
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

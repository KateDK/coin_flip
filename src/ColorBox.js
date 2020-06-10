import React from 'react';

class ColorBox extends React.Component{

  state={
    color: Math.floor(Math.random()*16777215).toString(16),
  }

  genColor = () => this.setState({color:Math.floor(Math.random()*16777215).toString(16)});

  render(){
    const {color} = this.state;
    const divStyle = {
      backgroundColor: `#${color}`,
      width: 300,
      height: 300,
    };
    return(
      <div className='ColorBox' style={divStyle} onClick={this.genColor}>
        ColorBox
      </div>
    )
  }
}

export default ColorBox;

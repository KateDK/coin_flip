import React from 'react';
class ColorBox extends React.Component{
  render(){
    const {color} = this.state;
    return(
      <div className='ColorBox' style={divStyle} onClick={this.genColor}>
        ColorBox
      </div>
    )
  }
}

export default ColorBox;

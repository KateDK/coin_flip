import React from 'react';
class ColorGrid extends React.Component{
  static defaultProps = {
    nColor:16,
  }
  render(){
    const {nColor} = this.props;
    return(
      <div className='ColorGrid'>
        {[...Array(nColor)].map((e,i) => <ColorBox key={i}/>)}
      </div>
    )
  }
}

export default ColorGrid;

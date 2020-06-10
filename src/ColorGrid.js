import React from 'react';
import ColorBox from './ColorBox';
import './ColorGrid.css';

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

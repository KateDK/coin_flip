import React from 'react';
import './App.css';
import CoinToss from './CoinToss';
import ColorGrid from './ColorGrid'


function App() {
  return (
    <div className="App">
      <CoinToss/>
      <ColorGrid nColor={18}/>
    </div>
  );
}

export default App;

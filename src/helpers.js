const randomChoice = (arr) =>{
  const randomChoice = Math.floor(Math.random()*arr.length);
  return arr[randomChoice];
}

const randomHexColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`

export {randomChoice,randomHexColor};

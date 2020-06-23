const randomChoice = (arr) =>{
  const randomChoice = Math.floor(Math.random()*arr.length);
  return arr[randomChoice];
}

const randomHexColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`
// Randomizing hex colors taken from here: https://css-tricks.com/snippets/javascript/random-hex-color/

export {randomChoice,randomHexColor};

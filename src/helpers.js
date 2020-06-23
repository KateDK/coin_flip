const randomChoice = (arr) =>{
  const randomChoice = Math.floor(Math.random()*arr.length);
  return arr[randomChoice];
}

const makeRandomHSLColor = () => {

  return `hsl(${Math.floor(Math.random() * (284 - 262)) + 262},80%,55%)`;
}


export {randomChoice,makeRandomHSLColor};

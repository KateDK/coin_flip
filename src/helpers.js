const randomChoice = (arr) =>{
  return arr[Math.floor(Math.random()*arr.length)];
}

const makeRandomHSLColor = () => {
  return `hsl(${Math.floor(Math.random() * (284 - 262)) + 262},80%,55%)`;
}


export {randomChoice,makeRandomHSLColor};

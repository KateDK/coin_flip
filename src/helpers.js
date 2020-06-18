const randomChoice = (arr) =>{
  const randomChoice = Math.floor(Math.random()*arr.length);
  return arr[randomChoice];
}

export {randomChoice};

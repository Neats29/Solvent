
//Given each player's rock, paper, scissors choice, return the winner

const rps = (p1, p2) => {
  if(p1 === p2) return 'Draw!';
  return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
}

/* this solution uses the ES6 template string and the RegExp.prototype.test() method which returns a true or false 
depending on the regex input. 
*/

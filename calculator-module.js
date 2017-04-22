var answer;

function calculator (x,y,operator){
  if (operator === '+') {
    return (answer = (x+y));
  } else if (operator === '-') {
    return (answer = (x-y));
  } else if (operator === '*') {
    return (answer = (x*y));
  } else {
    return (answer = (x/y));
  }
}


module.exports = calculator;

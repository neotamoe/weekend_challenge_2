//this module is used in the server and calculates two numbers provided by the client

var answer;  //stores value of calculated answer

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

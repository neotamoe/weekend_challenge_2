var answer;

function calculator (x,y,operator){
  if (operator === '+') {
    answer = x+y;
    return answer;
  } else if (($('#operator').text('-')) === '-') {
    return (answer = x-y);
  } else if ($('#operator').text('*') === '*') {
    return (answer = x*y);
  } else {
    return (answer = x/y);
  }
}


module.exports = calculator;

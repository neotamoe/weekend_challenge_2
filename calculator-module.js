var answer;

function calculator (x,y,operator){
  if ($('#operator').text('+') === '+') {
    answer = x+y;
  } else if ($('#operator').text('-') === '-') {
    answer = x-y;
  } else if ($('#operator').text('*') === '*') {
    answer = x*y;
  } else {
    answer = x/y;
  }
}


module.exports = calculator;

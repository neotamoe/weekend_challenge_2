$(document).ready(onReady);

function onReady() {
  $('#add').on('click', addOperator);
  $('#subtract').on('click', subtractOperator);
  $('#multiply').on('click', multiplyOperator);
  $('#divide').on('click', divideOperator);
  $('#calculate-button').on('click', calculate);
  $('#clear-button').on('click', clearCalculator);
}

function addOperator() {
  $('#operator').text('+');
  console.log('add operator selected');
}

function subtractOperator(){
  $('#operator').text('-');
  console.log('subtract operator selected');
}

function multiplyOperator(){
  $('#operator').text('*');
  console.log('multiply operator selected');
}

function divideOperator(){
  $('#operator').text('/');
  console.log('divide operator selected');
}

function calculate(){
  console.log('in calculate function'+ inputsToSend);
  var inputsToSend = {
    x: $('#x').text(),
    y: $('#y').text(),
    operator: $('#operator').text()
  };
  $.ajax({
    url: '/inputs',
    type: 'POST',
    data: inputsToSend,
    success: function(response){
      console.log('back from server with:', response);
    }  //end success
  });  //end ajax
}  //end calculate


function clearCalculator() {
  $('#operator').empty();
  document.getElementById('xAndY').reset();
  console.log('calculator cleared');
}

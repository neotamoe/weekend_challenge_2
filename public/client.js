$(document).ready(onReady);

function onReady() {
  $('.number-button').on('click',makeNumber);
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

function makeNumber(){
  if ( $('#x').is(':empty') ){
    $('#x').append($(this).text());
  } else if (($('#x').is(':empty')) || ($('#operator').is(':empty')) ){
    $('#x').append($(this).text());
  } else {
    $('#y').append($(this).text());
  }
}

function calculate(){
  var inputsToSend = {
    // input1: $('#x').val(),  //used in base mode
    // input2: $('#y').val(),  //used in base mode
    input1: $('#x').text(),  //pro mode
    input2: $('#y').text(),  //pro mode
    operator: $('#operator').text()
  };
  console.log('in calculate function: input1= '+ inputsToSend.input1 + ' input2= '+ inputsToSend.input2 + ' operator= ' +inputsToSend.operator);
  $.ajax({
    url: '/inputs',
    type: 'POST',
    data: inputsToSend,
    success: function(response){
      console.log('back from server with:', response);
      spanAnswer();
    }  //end success
  });  //end ajax
}  //end calculate

function spanAnswer(){
  // make ajax call to server for inputs converted to answer
  $.ajax({
    url: '/total',
    type: 'POST',
    success: function( response ){
      console.log( 'back from server with:', response);
      // empty answer span
      $( '#answer' ).empty();
      // loop through inventory and append each to outputDiv
      $( '#answer' ).text(response.total);
    } // end success
  }); // end ajax
} // end getInventory



function clearCalculator() {
  $('#operator').empty();
  $('#answer').empty();
  $('#x').empty();
  $('#y').empty();
  // document.getElementById('xAndY').reset();  //needed for base mode
  console.log('calculator cleared');
}

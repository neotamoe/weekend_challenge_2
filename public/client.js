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

function addOperator() {  //places add operator on DOM
  $('#operator').text('+');
}

function subtractOperator(){  //places subtract operator on DOM
  $('#operator').text('-');
}

function multiplyOperator(){  //places multiply operator on DOM
  $('#operator').text('*');
}

function divideOperator(){  //places divide operator on DOM
  $('#operator').text('/');
}

//used in hard/pro mode:
function makeNumber(){  //adds digits to x until operator is clicked
  if ( $('#x').is(':empty') ){
    $('#x').append($(this).text());
  } else if (($('#x').is(':empty')) || ($('#operator').is(':empty')) ){
    $('#x').append($(this).text());
  } else {  //adds digits to y until calculate is clicked
    $('#y').append($(this).text());
  }
}

function calculate(){  //calculates value of x and y based on operator chosen
  var inputsToSend = {
    // input1: $('#x').val(),  //used in base mode
    // input2: $('#y').val(),  //used in base mode
    input1: $('#x').text(),  //pro mode
    input2: $('#y').text(),  //pro mode
    operator: $('#operator').text()
  };
  // console.log('in calculate function: input1= '+ inputsToSend.input1 + ' input2= '+ inputsToSend.input2 + ' operator= ' +inputsToSend.operator);
  $.ajax({  //sends x, y and operator to server
    url: '/inputs',
    type: 'POST',
    data: inputsToSend,
    success: function(response){
      // console.log('back from server with:', response);
      spanAnswer();  //see below
    }  //end success
  });  //end ajax
}  //end calculate

//gets calculated answer from server and puts on DOM
function spanAnswer(){
  // make ajax call to server for inputs converted to answer
  $.ajax({
    url: '/total',
    type: 'POST',
    success: function( response ){
      // console.log( 'back from server with:', response);
      $( '#answer' ).empty();  // empty answer span
      //displays computing for three seconds before displaying answer
      $('#answer').text('computing');
      setTimeout(function(){
        $( '#answer' ).text(response.total);
      }, 3000);
    } // end success
  }); // end ajax
} // end spanAnswer


//clears all changeable fields in calculator
function clearCalculator() {
  $('#operator').empty();
  $('#answer').empty();
  $('#x').empty();
  $('#y').empty();
  // document.getElementById('xAndY').reset();  //needed for base mode
  console.log('calculator cleared');
}

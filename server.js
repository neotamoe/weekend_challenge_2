//requires
var express = require('express');
var app = express();
var bodyParser = require ('body-parser');
var path = require ('path');
var calculator = require ('./calculator-module');

//globals
var answer;
var x;
var y;
var inputsFromClient;

//uses
app.use( express.static( 'public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );

//server listening
app.listen(3003, function(){
  console.log('listening on port 3003');
});

app.post('/inputs', function ( req, res ){
  var inputs = req.body;
  inputsFromClient=inputs;
  console.log(inputs);
  console.log('value of x is ' + inputs.input1);
  console.log('value of y is ' + inputs.input2);
  console.log('operator type is ' + inputs.operator);
  x=parseFloat(inputs.input1);
  y=parseFloat(inputs.input2);
  console.log('received from client1:', x + 'and' + y +' and ' + inputs.operator);
  res.sendStatus(200);
});


app.post('/total', function( req, res ){
  console.log('received spanAnswer request');
  answer = calculator(inputsFromClient.input1, inputsFromClient.input2, inputsFromClient.operator);
  console.log(answer);
  var answerToSend = {
    total: answer
  };
  console.log(answerToSend);
  res.send(answerToSend);
});

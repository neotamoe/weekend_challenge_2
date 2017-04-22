//requires
var express = require('express');
var app = express();
var bodyParser = require ('body-parser');
var path = require ('path');
var calculator = require ('./calculator-module');

//globals
var answer;  //will store calculated answer
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

//receives x, y and operator type from client and stores on server
app.post('/inputs', function ( req, res ){
  var inputs = req.body;
  inputsFromClient=inputs;  //this makes input accessible in app.post('/total') below
  x=parseFloat(inputs.input1);
  y=parseFloat(inputs.input2);
  console.log('received from client1:', x + 'and' + y +' and ' + inputs.operator);
  res.sendStatus(200);  //send success status
});

//takes x, y and operator type from client, then calculates using calculator module and returns answer
app.post('/total', function( req, res ){
  console.log('received spanAnswer request');
  x=parseFloat(inputsFromClient.input1);
  y=parseFloat(inputsFromClient.input2);
  answer = calculator(x, y, inputsFromClient.operator);
  console.log(answer);
  var answerToSend = {
    total: answer
  };
  res.send(answerToSend);
});

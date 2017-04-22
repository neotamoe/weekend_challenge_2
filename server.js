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

//uses
app.use( express.static( 'public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );

//server listening
app.listen(3003, function(){
  console.log('listening on port 3003');
});

app.post('/inputs', function ( req, res ){
  console.log(req.body);
  x=parseInt(req.body.x);
  y=parseInt(req.body.y);
  console.log('received from client:', x + 'and' + y);
  res.sendStatus(201);
});


app.post('/calculating', function(req,res){
  var answerToSend = {
  };
});
// app.post('/checkGuesses', function ( req, res ){
//   var guessesObj = req.body; // req.body = objectToSend
//   console.log('received from client:', guessesObj );
//   //logic
//   checkGuesses(req.body.player1);
//   checkGuesses(req.body.player2);
//   checkGuesses(req.body.player3);
//   checkGuesses(req.body.player4);
//
//   var objectToSend = {
//     player1: checkGuesses(req.body.player1),
//     player2: checkGuesses(req.body.player2),
//     player3: checkGuesses(req.body.player3),
//     player4: checkGuesses(req.body.player4)
//   };
//
//   console.log(objectToSend);
//   res.send(objectToSend);
// });

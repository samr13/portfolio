var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));
//var mongoose = require('mongoose');                     // mongoose for mongodb
//var morgan = require('morgan');             // log requests to the console (express4)
//var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
//var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

//mongoose.connect('mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu');     // connect to mongoDB database on modulus.io
//app.use(morgan('dev'));                                         // log every request to the console
//app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
//app.use(bodyParser.json());                                     // parse application/json
//app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
//app.use(methodOverride());
//
var firebase = require("firebase");

var config = {
  //apiKey: "<API_KEY>",
  //authDomain: "<PROJECT_ID>.firebaseapp.com",
  databaseURL: "https://blistering-fire-5210.firebaseio.com"
  //storageBucket: "<BUCKET>.appspot.com",
};
firebase.initializeApp(config);

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});



var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var path = require('path')

//npm dotenv -->lets u use process.envs....
var app = express();
require('./routes.js')(app, express);

mongoose.connect('mongodb://fboy:fboy@ds111559.mlab.com:11559/fboydatabase'); 
app.use(bodyParser());
console.log(path.join(__dirname, '/../../client'));
app.use(express.static(__dirname + '/../client'));
app.use('/node_modules', express.static(__dirname + '/../node_modules'))


app.listen(8000); 


console.log("server running")

module.exports = app; 
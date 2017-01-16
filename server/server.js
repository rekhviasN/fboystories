var express = require('express');
var mongoose = require('mongoose');
//npm dotenv -->lets u use process.envs....
var app = express();

mongoose.connect('mongodb://fboy:fboy@ds111559.mlab.com:11559/fboydatabase'); 

require('./middleware.js')(app, express);

app.listen(8000); 

module.exports = app; 
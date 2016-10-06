var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var path = require('path');


var app = express();
app.set('views', __dirname + "/client/partials")
app.set('view engine', 'html')
app.use(bodyParser.json());
app.use(cookieParser());


app.use(express.static(path.join(__dirname, "./client")));



// This goes in our server.js file so that we actually use the mongoose config file!
// require('./server/config/mongoose.js');


// app.use(express.static(path.join(__dirname, "./client")));

//always require routes AFTER requiring mongoose
require('./server/config/routes.js')(app);


// Initialize the app.
var server = app.listen(process.env.PORT || 5000, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});


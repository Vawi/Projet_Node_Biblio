var express = require('express');
var session = require('cookie-session'); 
var bodyParser = require('body-parser'); 
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var pg = require("pg");
var app = express();

var connectionString = "postgres://postgres:123@localhost:5432/postgres";


app.listen(4000, function () {
    console.log('Server is running on port 4000');
});


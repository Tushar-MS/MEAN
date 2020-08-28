const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db.js'); // destructing syntax
var employeeCtr = require('./controllers/employeeCtrl.js')

var app = express();
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.listen(3000, () => console.log(' Server started at port :3000'));

app.use('/employees', employeeCtr);
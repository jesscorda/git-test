
var express=require('express');
var app=express();
var path = require('path');
var bodyParser= require('body-parser');
var routes=require('../backend/routes');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
config_data = require('./config/config.json');
/* const cors = require('cors');
app.use(cors());
app.options('*', cors());
 */
var cors = require('cors');
app.use(cors())


var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', '*');

  next();
}

app.use( express.static(path.join(__dirname, '/uploads')))

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', routes);

app.get('/Login', (req,res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
app.get('/Registration', (req,res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
app.get('/Profile', (req,res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
app.get('/ForgotPassword', (req,res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
app.get('/RegSuccess', (req,res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
app.get('/Reg', (req,res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

 app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, 'colorlib-error-404-1/index.html'));
});
app.listen(4000, () => {console.log("Running at Port 4000");});
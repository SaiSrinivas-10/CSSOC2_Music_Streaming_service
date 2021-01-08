const express = require('express');
const sql = require('./auth.js');
const app = express();
const body_parser = require("body-parser");
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:false}));

app.post('/registration', function(req, res, next){
//res.send('you are already in!');
  console.log(req.body);
  sql.registration(req,res);
  res.send("Woking on registration...");
})

app.get('/validation', function(req, res, next){
  console.log(req.body);
  sql.validation(req,res);
  res.send("Working on Validation...")
})

app.listen(8000, function(req,res){console.log('running!')})
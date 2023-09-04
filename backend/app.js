const express = require('express');
const app = express()
var bodyParser = require('body-parser');
const cors = require('cors')
const port = 3000;

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

const calculatorRoutes = require('./routes/calculator')

app.use('/', calculatorRoutes);

app.listen(port, () => {
  console.log("Example app listening on port " + port)
});
require('./db.js');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const router = require('./routes/index');

var app = express()
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
app.use("/", router);

app.listen(4000, ()=> console.log('Server started on port 4000'));
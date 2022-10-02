const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors")
const helmet = require("helmet")
const morgan = require("morgan")
//importing database config
require('./config/database')
require("dotenv").config();
const app = express();
app.use(express.json())



app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(morgan("dev"));
app.use(helmet());

module.exports = app;
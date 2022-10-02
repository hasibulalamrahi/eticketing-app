const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors")
const helmet = require("helmet")
const morgan = require("morgan")
//importing database config
require('./config/database')
require("dotenv").config();

//importing all routes 

const userSignUp = require("./routes/authentication/signUp")

const app = express();
app.use(express.json())



app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(morgan("dev"));
app.use(helmet());

//defining all routes 

app.use('/sign-up',userSignUp)

module.exports = app;
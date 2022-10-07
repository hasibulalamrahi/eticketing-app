const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors")
const helmet = require("helmet")
const morgan = require("morgan")
//importing database config
require('./config/database')
require("dotenv").config();

//importing auth middleware 
require("./controllers/passport/passport")

//importing passport for authentication 

const passport = require('passport')

//importing all routes 

const userSignUp = require("./routes/authentication/signUp")
const userSignIn = require('./routes/authentication/signin')
const newTicket = require('./routes/tickets/newTicket')
const allActiveTickets = require('./routes/tickets/getAllActiveTickets')

const app = express();
app.use(express.json())



app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(morgan("dev"));
app.use(helmet());

//defining all routes 

app.use('/sign-up',userSignUp)
app.use('/sign-in',userSignIn)
app.use('/new-ticket',passport.authenticate("jwt",{session: false}),newTicket)
app.use("/get-all-active-tickets", allActiveTickets);

module.exports = app;
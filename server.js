const express = require('express')
const pg = require('pg')
const path = require('path')
const port = process.env.PORT||3000
const app = express()
const bodyParser = require('body-parser')
const passport = require('passport')
require('./Model/relationalMapping')
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passportJWT = require('passport-jwt');
const User = require("./Model/User");
const {applyPassportStrategy} = require("./passport-strategy");
const {getUser} = require("./services/user-service");
const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;

app.use(bodyParser.json());
applyPassportStrategy(passport)
app.use(passport.initialize());
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use(session({ secret: 'keyboard cat', key: 'sid', resave: true,saveUninitialized: true}));
app.use(passport.session());

app.use(express.static(__dirname + '/public'));
app.use("/",require('./routes/index'))
app.use("/courses",require('./routes/courses'))
app.use("/authentication",require('./routes/authentication'))

app.use("/student",require('./routes/student'))

app.listen(port,() => console.log(`App listen on ${port}`))

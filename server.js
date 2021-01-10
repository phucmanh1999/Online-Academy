const express = require('express')
const path = require('path')
const port = process.env.PORT||3000
const app = express()
const bodyParser = require('body-parser')
const passport = require('passport')
require('./Model/relationalMapping')
const cookieParser = require("cookie-parser");
const session = require("express-session");
const {applyPassportStrategy} = require("./passport-strategy");
const fileUpload = require('express-fileupload');

const {decodeToken} = require("./middleware/authentication");

app.use(fileUpload({
    createParentPath: true
}));
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
app.use("/",decodeToken,require('./routes/index'))
app.use("/courses",decodeToken,require('./routes/courses'))
app.use("/authentication",require('./routes/authentication'))
app.use("/student", passport.authenticate('jwt', {session: false}), require('./routes/student'))
app.use("/user",decodeToken,require('./routes/user'))
app.use("/instructor",require('./routes/instructor'))

app.listen(port,() => console.log(`App listen on ${port}`))

const express = require('express')
const path = require('path')
const port = process.env.PORT||3000
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser");
const session = require("express-session");
const fileUpload = require('express-fileupload');
const {decodeToken} = require("./middleware/authentication");

require('./Model/relationalMapping')

app.use(fileUpload({
    createParentPath: true
}));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use(session({ secret: 'keyboard cat', key: 'sid', resave: true,saveUninitialized: true}));

app.use(express.static(__dirname + '/public'));
app.use("/",decodeToken,require('./routes/index'))
app.use("/courses",decodeToken,require('./routes/courses'))
app.use("/authentication",require('./routes/authentication'))
app.use("/student", decodeToken, require('./routes/student'))
app.use("/user", decodeToken, require('./routes/user'))
app.use("/instructor",decodeToken ,require('./routes/instructor'))

// app.use("/admin",decodeToken ,require('./routes/admin'))
// app.use("/admin",decodeToken, require('./routes/admin'))

app.listen(port,() => console.log(`App listen on ${port}`))

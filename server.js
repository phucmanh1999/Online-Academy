const express = require('express')
const pg = require('pg')
const path = require('path')
const port = process.env.PORT||3000
const app = express()
const bodyParser = require('body-parser')

require('./Model/relationalMapping')

app.use(bodyParser.json());

app.use("/",require('./routes/index'))
app.use("/courses",require('./routes/courses'))
app.use("/authentication",require('./routes/authentication'))

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

app.listen(port,() => console.log(`App listen on ${port}`))

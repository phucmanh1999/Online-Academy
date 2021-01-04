const express = require('express')
const pg = require('pg')
const path = require('path')
require('./Model/relationalMapping')
const port = process.env.PORT||3000
const app = express()

app.use("/",require('./routes/index'))

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

app.listen(port,() => console.log(`App listen on ${port}`))

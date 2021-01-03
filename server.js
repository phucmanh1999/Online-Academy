const express = require('express')
const router = require('./router')
const pg = require('pg')
const path = require('path')

const port = process.env.PORT||3000
const app = express()

app.use("/",router)

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

app.listen(port,() => console.log(`App listen on ${port}`))
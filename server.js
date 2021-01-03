const express = require('express')
const pg = require('pg')

const port = process.env.PORT||3000
const app = express()

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/index', (req,res) =>{
    res.render('index')
})

app.listen(port,() => console.log("App available at http://localhost:3000"))

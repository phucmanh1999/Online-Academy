const express = require('express')
const pg = require('pg')

const port = process.env.PORT||3000
const app = express()

app.get('/', (req,res) =>{
    res.send("Online Academy")
})

app.listen(port,() => console.log("App available at http://localhost:3000"))
const express = require("express")
const passport = require("passport");
const router = express.Router()
const jwt = require('jsonwebtoken')

router.get('/review', passport.authenticate('jwt', {session: false}) , (req, res) => {
    console.log(req.method + ' ' + req.url + ' HTTP/' + req.httpVersion);
    res.json(req)
})

module.exports = router

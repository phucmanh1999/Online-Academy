const express = require("express")
const passport = require("passport");
const router = express.Router()
const jwt = require('jsonwebtoken')
const bodyParser = require("body-parser")
const {createWatchList} = require("../services/watchlist-service");
const {createReview} = require("../services/review-services");
const urlencodedParser = bodyParser.urlencoded({extended: false})

router.post('/review', urlencodedParser, passport.authenticate('jwt', {session: false}) , (req, res) => {
    const user = req.user
    const comment = req.body.comment
    const course_id = req.body.course_id
    const star = req.body.star
    createReview({
        star: star,
        comment: comment,
        course_id: course_id,
        student_id: user.Student.id,
        created_at:  new Date(),
    }).then(() => {
        res.json({'msg': 'Comment success'})
    })
})

router.post('/favourite', passport.authenticate('jwt', {session: false}) , (req, res) => {
    const course_id = req.query.course_id
    if (req.user.Student){
        createWatchList({
            student_id: req.user.Student.id,
            course_id: course_id,
            created_at:  new Date(),
        }).then(() => {
            res.json({'msg': 'Add favourite success'})
        }).catch((err) => {
            console.log(err)
            res.status(400)
        })
    }
})

module.exports = router

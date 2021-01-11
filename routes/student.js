const express = require("express")
const passport = require("passport");
const router = express.Router()
const jwt = require('jsonwebtoken')
const bodyParser = require("body-parser")
const {getCart} = require("../services/cart-service");
const {deleteCart} = require("../services/cart-service");
const {getCartsByStudentId} = require("../services/cart-service");
const {ROLE_STUDENT} = require("../constant/constant");
const {createCart} = require("../services/cart-service");
const {createWatchList} = require("../services/watchlist-service");
const {createReview} = require("../services/review-services");
const {getAllCategories} = require("../services/category-service");
const urlencodedParser = bodyParser.urlencoded({extended: false})

router.post('/review', urlencodedParser, (req, res) => {
    const user = req.user
    const comment = req.body.comment
    const course_id = req.body.course_id
    const star = req.body.star
    createReview({
        star: star,
        comment: comment,
        course_id: course_id,
        student_id: user.role_id,
        created_at: new Date(),
    }).then(() => {
        res.json({'msg': 'Comment success'})
    })
})

router.post('/favourite', (req, res) => {
    const course_id = req.query.course_id
    if (req.user.Student) {
        createWatchList({
            student_id: req.user.Student.id,
            course_id: course_id,
            created_at: new Date(),
        }).then(() => {
            res.json({'msg': 'Add favourite success'})
        }).catch((err) => {
            console.log(err)
            res.status(400)
        })
    }
})

router.post('/addCart/:courseId', (req, res) => {
    const user = req.user ? req.user : undefined
    const course_id = req.params.courseId
    console.log(course_id)
    if (user && user.type === ROLE_STUDENT) {
        getCart({
            course_id: course_id,
            student_id: user.role_id,
        }).then(cart => {
            if (cart) {
                res.json({'msg': 'Cart already exist'})
            } else {
                createCart({
                    course_id: course_id,
                    student_id: user.role_id,
                    created_at: new Date(),
                }).then(() => {
                    res.status(200).json({'msg': 'Add cart success'})
                }).catch(() => {
                    res.status(400).json({'msg': 'Failed'})
                })
            }
        })
    } else {
        res.status(400).json({'msg': 'Unauthorized'})
    }
})

router.get('/cart', (req, res) => {
    const user = req.user ? req.user : undefined
    // console.log(JSON.stringify(user))
    if (user && user.type === ROLE_STUDENT) {
        getCartsByStudentId(user.role_id).then(async carts => {
            res.render("user/cart",{
                user,
                carts,
                categories: await getAllCategories(),
            })
        }).catch(() => {
            res.json({'msg': 'Failed'})
        })
    } else {
        res.json({'msg': 'Unauthorized'})
    }
})

router.delete('/cart/:courseId', (req, res) => {
    const user = req.user ? req.user : undefined
    const course_id = req.params.courseId
    if (user && user.type === ROLE_STUDENT) {
        deleteCart({
            student_id: user.role_id,
            course_id: course_id
        }).then(() => {
            res.status(200).json({'msg': 'Delete success'})
        }).catch(() => {
            res.status(400).json({'msg': 'Failed'})
        })
    } else {
        res.status(400).json({'msg': 'Unauthorized'})
    }
})

module.exports = router

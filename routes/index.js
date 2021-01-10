const express = require("express")
const jwt = require('jsonwebtoken')
const {getCoursesByCategoryId} = require("../services/course-service");
const {getNewestCourses} = require("../services/course-service");
const {getHighLightCourses} = require("../services/course-service");
const {getCourseByTopView} = require("../services/course-service");
const {getAllCategories} = require("../services/category-service");
const router = express.Router()

// router.get("/", decodeToken)

router.get('/', async (req, res) => {
    getNewestCourses().then(rs => {
        // console.log(rs)
    })
    res.render("user/index", {
        user: req.user ? req.user : undefined,
        categories: await getAllCategories(),
        topTenViewCourses: await getCourseByTopView(),
        highLightCourses: await getHighLightCourses(),
        topNewCourses: await getNewestCourses(),
    });
})

router.get('/category-courses/:categoryid', (req, res) => {

    const id = req.params.categoryid
    const page = req.query.page ? req.query.page : 1
    const order_price = req.query.order_price ? req.query.order_price : "DESC"
    const order_rating = req.query.order_review ? req.query.order_review : "DESC"



    getCoursesByCategoryId(id, page,5, order_price, order_rating).then(async (result) => {
        console.log(result)
        res.render("user/category",{
            payload: result,
            user: req.user ? req.user : undefined,
            categories: await getAllCategories(),
        })
    });
})

router.get('/search', (req,res) => {
    const query  = req.query;
    console.log(citeria)
})

router.get("/signup", (req, res) => {
    res.render("user/signup")
})

router.get("/login", (req, res) => {
    if(req.user) {
        res.redirect("/")
    }
    res.render("user/login")
})

router.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.redirect("/")
})

module.exports = router

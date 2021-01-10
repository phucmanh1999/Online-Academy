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
    getCoursesByCategoryId(req.params.categoryid,req.query.page,5).then( async (result) => {
        res.render("user/category",{
            user: req.user ? req.user : undefined,
            categories: await getAllCategories(),
            payload: result,
            current: req.query.page,
            pages: 10
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

const express = require("express")
const {getCoursesByCategoryId} = require("../services/course-service");
const {getNewestCourses} = require("../services/course-service");
const {getHighLightCourses} = require("../services/course-service");
const {getCourseByTopView} = require("../services/course-service");
const {getAllCategories} = require("../services/category-service");
const router = express.Router()

router.get('/', async (req, res) => {
    getNewestCourses().then(rs => {
        // console.log(rs)
    })
    res.render("user/index", {
        // user: null,
        categories: await getAllCategories(),
        topTenViewCourses: await getCourseByTopView(),
        highLightCourses: await getHighLightCourses(),
        topNewCourses: await getNewestCourses(),
    });
    // res.send({
    //         // user: null,
    //         categories: await getAllCategories(),
    //         topTenViewCourses: await getCourseByTopView(),
    //         highLightCourses: await getHighLightCourses(),
    //         topNewCourses: await getNewestCourses(),
    //     })
})

router.get('/category-courses/:categoryid', (req, res) => {

    const id = req.params.categoryid
    const page = req.query.page ? req.query.page : 1
    const order_price = req.query.order_price ? req.query.order_price : "DESC"
    const order_rating = req.query.order_review ? req.query.order_review : "DESC"

    console.log ( "New result: " + page + order_price + order_rating)


    getCoursesByCategoryId(id, page,5, order_price, order_rating).then((result) => {
        console.log(result)
        res.render("user/category",{result})
    });
})

router.get('/search', (req,res) => {
    const query  = req.query;
    console.log(citeria)
})

module.exports = router

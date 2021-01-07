const express = require("express")
const {getCoursesByCategoryId} = require("../services/course-service");
const {getNewestCourses} = require("../services/course-service");
const {getHighLightCourses} = require("../services/course-service");
const {getCourseByTopView} = require("../services/course-service");
const {getAllCategories} = require("../services/category-service");
const router = express.Router()

router.get('/', async (req, res) => {
    getNewestCourses().then(rs => {
        console.log(rs)
    })
    res.json( {
        user: null,
        categories: await getAllCategories(),
        topTenViewCourses: await getCourseByTopView(),
        highLightCourses: await getHighLightCourses(),
        topNewCourses: await getNewestCourses(),
    });
})

router.get('/category-courses/:categoryid', (req, res) => {
    getCoursesByCategoryId(req.params.categoryid,req.query.page,5).then( async (result) => {
        res.json({
            categories: await getAllCategories(),
            payload: result,
        })
    });
})

router.get('/search', (req,res) => {
    const query  = req.query;
    console.log(citeria)
})

module.exports = router

const express = require("express")
const {getCoursesByCategoryId} = require("../Services/course-service");
const {getNewestCourses} = require("../Services/course-service");
const {getHighLightCourses} = require("../Services/course-service");
const {getCourseByTopView} = require("../Services/course-service");
const {getAllCategories} = require("../Services/category-service");
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
    getCoursesByCategoryId(req.params.categoryid,req.query.page,5).then((result) => {
        console.log(result)
        res.render("user/category",{result})
    });
})

router.get('/search', (req,res) => {
    const { citeria } = req.params;
})

module.exports = router

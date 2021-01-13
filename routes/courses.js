const express = require("express")
const {isOwn} = require("../services/bought-service");
const {getTopBuyCourseByCategoryId} = require("../services/course-service");
const {getAllCategories} = require("../services/category-service");
const {getCourse} = require("../services/course-service");
const router = express.Router()

router.get('/:id', async (req, res) => {
    getCourse({id: req.params.id}).then(async course => {
        // console.log("User is: " + JSON.stringify(req.user) )

        // res.json({
        //     user: req.user ? req.user : undefined,
        //     payload: course,
        //     categories: await getAllCategories(),
        //     topBuyCourses: await getTopBuyCourseByCategoryId(course.Category.id),
        //     isOwn: req.user ? await isOwn(req.user.role_id, req.params.id) : false
        // })
        course.courseId = req.params.id
        res.render("user/course",{
            user: req.user ? req.user : undefined,
            payload: course,
            categories: await getAllCategories(),
            topBuyCourses: await getTopBuyCourseByCategoryId(course.Category.id),
            isOwn: req.user ? await isOwn(req.user.role_id, req.params.id) : false
        })
    })
})

module.exports = router

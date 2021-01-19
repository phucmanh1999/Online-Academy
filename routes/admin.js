const express = require("express")
const {setActiveCourse} = require("../services/course-service");
const {getAllCourses} = require("../services/course-service");
const {getAllRootCategory} = require("../services/root-category-service");
const {setActive} = require("../services/user-service");
const {ROLE_ADMIN} = require("../constant/constant");
const {getAllStudent} = require("../services/user-service");
const router = express.Router()
const {getAllInstructor} = require("../services/user-service");
const {getCourse} = require("../services/course-service");
const {getAllCategories} = require("../services/category-service")

router.get('/', async (req, res) => {
    if (req.user && req.user.type === ROLE_ADMIN) {
        res.render("admin/index",{
            user: req.user,
            instructors: await getAllInstructor(),
            students: await getAllStudent(),
            rootCategories: await getAllRootCategory(),
            courses: await getAllCourses(),
            categories: await getAllCategories()
        });
    } else {
        res.redirect('/')
    }
})
router.get('/category', async (req, res) => {
    if (req.user && req.user.type === ROLE_ADMIN) {
        res.render("admin/category",{
            user: req.user,
            instructors: await getAllInstructor(),
            students: await getAllStudent(),
            rootCategories: await getAllRootCategory(),
            courses: await getAllCourses(),
            categories: await getAllCategories()
        });
    } else {
        res.redirect('/')
    }
})

router.post('/active/:userId', (req, res) => {
    if (req.user && req.user.type === ROLE_ADMIN) {
        const userId = req.params.userId
        const isActive = req.query.isActive
        if (userId && isActive){
            setActive(userId, isActive).then(() => {
                res.json({msg: 'ok'})
            }).catch(() => {
                res.json({msg: 'error'})
            })
        }
    } else {
        res.redirect('/login')
    }
})

router.post('/activeCourse/:courseId', (req, res) => {
    if (req.user && req.user.type === ROLE_ADMIN) {
        const courseId = req.params.courseId
        const isActive = req.query.isActive
        if (courseId && isActive){
            setActiveCourse(courseId, isActive).then(() => {
                res.json({msg: 'ok'})
            }).catch(() => {
                res.json({msg: 'error'})
            })
        }
    } else {
        res.redirect('/login')
    }
})

module.exports = router

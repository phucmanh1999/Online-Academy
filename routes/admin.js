const express = require("express")
const {getAllCourses} = require("../services/course-service");
const {getAllRootCategory} = require("../services/root-category-service");
const {setActive} = require("../services/user-service");
const {ROLE_ADMIN} = require("../constant/constant");
const {getAllStudent} = require("../services/user-service");
const router = express.Router()
const {getAllInstructor} = require("../services/user-service");
const {getCourse} = require("../services/course-service");

router.get('/', async (req, res) => {
    if (req.user && req.user.type === ROLE_ADMIN) {
        res.json({
            instructors: await getAllInstructor(),
            students: await getAllStudent(),
            rootCategories: await getAllRootCategory(),
            courses: await getAllCourses(),
        });
    } else {
        res.redirect('/login')
    }
})

router.post('/active/:userId', (req, res) => {
    if (req.user && req.uesr.typ === ROLE_ADMIN) {
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

module.exports = router

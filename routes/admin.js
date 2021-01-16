const express = require("express")
const {getAllStudent} = require("../services/user-service");
const router = express.Router()
const {getAllInstructor} = require("../services/user-service");
const {getCourse} = require("../services/course-service");

router.get('/', async (req,res) => {
    res.json({
        instructors: await getAllInstructor(),
        students: await getAllStudent(),
    });
})

module.exports = router

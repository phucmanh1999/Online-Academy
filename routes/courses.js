const express = require("express")
const {getCourse} = require("../Services/course-service");
const router = express.Router()

router.get('/:id', async (req, res) => {
    getCourse({id: req.params.id}).then(course => {
        // res.render("user/course",{course}) 
        res.send({course})
    })
})

router.get("/", (req, res) => {
    res.render("user/course")
})
module.exports = router

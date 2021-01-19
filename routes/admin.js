const express = require("express")
const {deleteCategory} = require("../services/category-service");
const {checkCategoryHaveCourse} = require("../services/category-service");
const {updateCategory} = require("../services/category-service");
const {getCategory} = require("../services/category-service");
const {createCategory} = require("../services/category-service");
const {getRootCategory} = require("../services/root-category-service");
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
        res.render("admin/index", {
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
        res.render("admin/category", {
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
        if (userId && isActive) {
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
        if (courseId && isActive) {
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


router.post('/addCategory', (req, res) => {
    if (req.user && req.user.type === ROLE_ADMIN) {
        getRootCategory({
            root_category_name: req.body.root_category_name
        }).then(root => {
            createCategory({
                parent_category: root.id,
                created_at: new Date(),
                category_name: req.body.category_name
            }).then(() => {
                console.log("aaa")
                res.json({'msg': 'ok'})
            })
        })
    } else {
        res.redirect('/login')
    }
})

router.post('/editCategory', (req, res) => {
    if (req.user && req.user.type === ROLE_ADMIN) {
        getRootCategory({
            root_category_name: req.body.root_category_name
        }).then((root) => {
            updateCategory(req.body.id, {
                category_name: req.body.category_name,
                parent_category: root.id,
                updated_at: new Date()
            }).then(res.json({'msg': 'ok'}))
        })
    } else {
        res.redirect('/login')
    }
})

router.delete('/category', async (req, res) => {
    if (await checkCategoryHaveCourse(req.body.category_id)) {
        res.status(400).json({'msg': 'cannot delete category'})
    } else {
        deleteCategory({id: req.body.category_id})
        res.status(200).json({'msg': 'ok'})
    }
})


module.exports = router

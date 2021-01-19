const express = require("express")
const passport = require("passport");
const router = express.Router()
const jwt = require('jsonwebtoken')
const bodyParser = require("body-parser")
const {updateUser} = require("../services/user-service");
const {getAllRootCategory} = require("../services/root-category-service");
const {deleteWatchlist} = require("../services/watchlist-service");
const {getWatchList} = require("../services/watchlist-service");
const {getWatchListByStudentId} = require("../services/watchlist-service");
const {updateCourse} = require("../services/course-service");
const {getCourse} = require("../services/course-service");
const {getBought} = require("../services/bought-service");
const {createBought} = require("../services/bought-service");
const {getCart} = require("../services/cart-service");
const {deleteCart} = require("../services/cart-service");
const {getCartsByStudentId} = require("../services/cart-service");
const {ROLE_STUDENT} = require("../constant/constant");
const {createCart} = require("../services/cart-service");
const {createWatchList} = require("../services/watchlist-service");
const {createReview} = require("../services/review-services");
const {getAllCategories} = require("../services/category-service");
const {getUser} = require("../services/user-service");

const urlencodedParser = bodyParser.urlencoded({extended: false})

router.post('/review', urlencodedParser, (req, res) => {
    const user = req.user
    const comment = req.body.comment
    const course_id = req.body.course_id
    const star = req.body.star
    createReview({
        star: star,
        comment: comment,
        course_id: course_id,
        student_id: user.role_id,
        created_at: new Date(),
    }).then(() => {
        getCourse({id: course_id}).then(course => {
            if (course) {
                const rating = course.rating ? course.rating : 0
                const rating_number = course.rating_number ? course.rating_number : 0
                const aveRating = Number(((Number(rating) * Number(rating_number) + Number(star)) / (Number(rating_number) + 1)).toFixed(1))
                updateCourse(course_id, {rating_number : Number(rating_number)+1, rating : aveRating})
            }
        })
        res.json({'msg': 'Add comment success'})
    })
})

router.post('/favourite', (req, res) => {
    const course_id = req.body.course_id
    const user = req.user

    if (user && user.type === ROLE_STUDENT) {
        getWatchList({
            course_id: course_id,
            student_id: user.role_id,
        }).then(watchlist => {
            if (watchlist) {
                res.json({'msg': 'Item already exist'})
            } else {
                createWatchList({
                    student_id: user.role_id,
                    course_id: course_id,
                    created_at: new Date(),
                }).then(() => {
                    res.json({'msg': 'Add favourite success'})
                }).catch((err) => {
                    res.status(400)
                })
            }
        })
    } else {
        res.redirect("/login")
    }
})

router.post('/addCart/:courseId', (req, res) => {
    const user = req.user ? req.user : undefined
    const course_id = req.params.courseId
    console.log(course_id)
    if (user && user.type === ROLE_STUDENT) {
        getCart({
            course_id: course_id,
            student_id: user.role_id,
        }).then(cart => {
            if (cart) {
                // console.log('Cart already exist')
                res.json({'msg': 'Cart already exist'})
            } else {
                createCart({
                    course_id: course_id,
                    student_id: user.role_id,
                    created_at: new Date(),
                }).then(() => {
                    res.json({'msg': 'Add cart success'})
                }).catch(() => {
                    res.json({'msg': 'Failed'})
                })
            }
        })
    } else {
        res.json({'msg': 'Unauthorized'})
    }
})

router.get('/cart', (req, res) => {
    const user = req.user ? req.user : undefined
    if (user && user.type === ROLE_STUDENT) {
        getCartsByStudentId(user.role_id).then(async carts => {
            let price_sum = 0;
            carts.forEach(ca => {
                price_sum += parseFloat(ca.Course.price)
            })
            res.render("user/cart", {
                categories: await getAllCategories(),
                rootCategories: await getAllRootCategory(),
                payload: carts,
                price_sum: price_sum, user})
        }).catch(() => {
            res.redirect("/login")
            return
        })
    } else {
        res.redirect("/login")
        return
    }
})

router.get('/watchlist', (req, res) => {
    const user = req.user ? req.user : undefined
    if (user && user.type === ROLE_STUDENT) {
        getWatchListByStudentId(user.role_id).then(async watchlist => {
            res.render("user/watch", {
                user,
                categories: await getAllCategories(),
                rootCategories: await getAllRootCategory(),
                payload: watchlist})
        }).catch(() => {
            res.redirect("/login")
            return
        })
    } else {
        res.redirect("/login")
        return
    }
})

router.delete('/cart/:courseId', (req, res) => {
    const user = req.user ? req.user : undefined
    const course_id = req.params.courseId
    console.log(course_id)
    if (user && user.type === ROLE_STUDENT) {
        deleteCart({
            student_id: user.role_id,
            course_id: course_id
        }).then(() => {
            res.json({'msg': 'Delete success'})
        }).catch((err) => {
            console.log(err)
            res.json({'msg': 'Failed'})
        })
    } else {
        res.json({'msg': 'Unauthorized'})
    }
})

router.delete('/watchlist/:courseId', (req, res) => {
    const user = req.user ? req.user : undefined
    const courseId = req.params.courseId
    // console.log(watchlist_id)
    if (user && user.type === ROLE_STUDENT) {
        deleteWatchlist({
            student_id: user.role_id,
            course_id: courseId
        }).then(() => {
            res.json({'msg': 'Delete success'})
        }).catch((err) => {
            console.log(err)
            res.json({'msg': 'Failed'})
        })
    } else {
        res.redirect('/login')
    }
})

router.post('/buy', (req, res) => {
    const courses = req.body.courses
    const user = req.user ? req.user : undefined
    if (user && user.type === ROLE_STUDENT) {
        courses.split('+').forEach((id) => {
            createBought({
                student_id: user.role_id,
                course_id: parseInt(id),
                created_at: new Date(),
            }).then(() => {
                getCourse({id: parseInt(id)}).then(course => {
                    const enroll_number = course.enroll_number ? course.enroll_number : 0
                    updateCourse(parseInt(id), {enroll_number : enroll_number+1})
                    res.json({msg: 'ok'})
                })
                deleteCart({
                    student_id: user.role_id,
                    course_id: parseInt(id)
                })
            })
        })
        res.json({'msg': 'Buy success'})
    } else {
        res.redirect("/login")
    }
})

router.get('/enroll', async (req, res) => {
    const user = req.user ? req.user : undefined
    let categories = await getAllCategories();
    if (user && user.type === ROLE_STUDENT) {
        getBought({student_id: user.role_id}).then((courses) => {
            res.render('user/enroll',{user,courses,categories})
        })
    } else {
        res.json({'msg': 'Unauthorized'})
    }
})

router.get('/profile', async (req,res) =>{
    let id = req.user.id
    let categories = await getAllCategories();
    let rootCategories = await getAllRootCategory();
    let user = await getUser({id: id});
    console.log(user)
    res.render("user/profile",{categories,user,rootCategories})
})

router.post('/profile',  (req, res) => {
    const user = req.user ? req.user : undefined
    const responseUser = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        gender: req.body.gender,
        birthday: req.body.birthday,
        email: req.body.email,
        job_title: req.body.job_title,
        user_address: req.body.address,
    }
    let imageFile = null
    let imgPath = null
        if (req.files) {
            imageFile = req.files.image
            imgPath = "/assets/image/" + imageFile.name
            responseUser.avatar_url = imgPath
        }
        updateUser(user.id, responseUser).then(() => {
            if (imageFile)
                imageFile.mv("./public" + imgPath)
            res.json({msg: "ok"})
        }).catch((err) => {
            res.redirect("/login")
        })
})

module.exports = router

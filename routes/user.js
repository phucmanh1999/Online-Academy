const express = require("express")
const passport = require("passport");
const router = express.Router()
const bodyParser = require("body-parser")
const bcrypt = require("bcrypt");
const UserService = require("../services/user-service");
const {getUser} = require("../services/user-service");
const {updateAdministrator} = require("../services/admin-service");
const {updateInstructor} = require("../services/instructor-service");
const {updateUser} = require("../services/user-service");
const urlencodedParser = bodyParser.urlencoded({extended: false})

function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

router.post('/update', urlencodedParser,async (req, res) => {
    const user_inf = req.user
    console.log(await (user_inf))
    if (user_inf) {
        const user_id = user_inf.id
        const passHashed = bcrypt.hashSync(req.body.password, 10)
        updateUser(user_id, {
            user_name: req.body.name,
            user_password: passHashed,
            email: req.body.email,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            gender: req.body.gender,
            birthday: req.body.birthday,
            avatar_url: req.body.avatar,
            user_address: req.body.address,
            updated_at: new Date()
        }).then(() => {
            console.log(user_inf)
            if (user_inf.Instructor){
                updateInstructor(user_inf.Instructor.id, {
                    job_title: req.body.job_title,
                    short_description: req.body.short_description,
                    full_description: req.body.full_description,
                })
            }
            res.json({'msg': 'Update info success'})
        }).catch(() => {
            res.json({'msg': 'Unknow error'})
        })
    } else {
        res.json({'msg': 'Please login'})
    }
})

router.post('/checkemail', (req,res) => {
    if(emailIsValid(req.body.email)){
        UserService.getUser({email: req.body.email}).then (user => {
            if (user) {
                res.json({'msg': 'Email existed'})
            } else {res.json({'msg': 'Available'})}
        })
    } else {
        res.json({"msg": "Email is not valid"})
    }
    
})

router.get('/', (req, res) => {
    if (req.user){
        getUser({id: req.user.id}).then(user => {
            res.json(user)
        })

    } else {
        res.redirect('/login')
    }
})

module.exports = router

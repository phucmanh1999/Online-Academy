const bodyParser = require("body-parser")
const express = require("express")
const router = express.Router()
const UserService = require('../Services/user-service')

const urlencodedParser = bodyParser.urlencoded({extended: false})

router.get('/', (req, res) => {
    UserService.getAllUsers().then(users => {
        console.log(users)
    })
})

// router.post('/login', urlencodedParser, async function (req, res) {
//         const email = req.body.email
//         const password = req.body.password
//
//         if (!email || !password)
//             res.json({msg: 'Email or password must not be empty'})
//         const User = await UserService.getUser({name});
//         if (!User) {
//             res.status(401).json({msg: 'No such user found', User});
//         }
//         if (User.password === password) {
//             // from now on we’ll identify the user by the id and the id is
//             // the only personalized value that goes into our token
//             const payload = {id: User.id};
//             const token = jwt.sign(payload, jwtOptions.secretOrKey);
//             res.json({msg: 'ok', token: token});
//         } else {
//             res.status(401).json({msg: 'Password is incorrect'});
//         }
//     }
// )


module.exports = router

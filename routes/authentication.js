const bodyParser = require("body-parser")
const express = require("express")
const router = express.Router()
const UserService = require('../Services/user-service')

const urlencodedParser = bodyParser.urlencoded({extended: false})
const jwt = require('jsonwebtoken');
const passport = require('passport');

// passport.use(
//     'signup',
//     new localStrategy(
//         {
//             usernameField: 'email',
//             passwordField: 'password'
//         },
//         async (email, password, done) => {
//             try {
//                 const user = await UserModel.create({ email, password });
//
//                 return done(null, user);
//             } catch (error) {
//                 done(error);
//             }
//         }
//     )
// );

router.post(
    '/login',
    async (req, res, next) => {
        passport.authenticate(
            'login',
            async (err, user, info) => {
                try {
                    if (err || !user) {
                        const error = new Error('An error occurred.');

                        return next(error);
                    }

                    req.login(
                        user,
                        { session: false },
                        async (error) => {
                            if (error) return next(error);

                            const body = { _id: user._id, email: user.email };
                            const token = jwt.sign({ user: body }, 'TOP_SECRET');

                            return res.json({ token });
                        }
                    );
                } catch (error) {
                    return next(error);
                }
            }
        )(req, res, next);
    }
);


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

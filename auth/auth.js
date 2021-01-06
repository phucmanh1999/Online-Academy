const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const UserService = require('../Services/user-service')

passport.use(
    'login',
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        async (email, password, done) => {
            try {
                const user = await UserService.getUser({email: email});

                if (!user) {
                    return done(null, false, {message: 'User not found'});
                }

                const validate = await UserService.isValidPassword(user, password);

                if (!validate) {
                    return done(null, false, {message: 'Wrong Password'});
                }

                return done(null, user, {message: 'Logged in Successfully'});
            } catch (error) {
                return done(error);
            }
        }
    )
);

// passport.use(
//     'signup',
//     new LocalStrategy(
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

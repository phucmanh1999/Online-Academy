// const User = require("./Model/User");
// const Strategy = require("passport-local");
// const passportJWT = require("passport-jwt");
// const ExtractJWT = passportJWT.ExtractJwt;
// const config = require("config")
//
// const applyPassportStrategy = passport => {
//     const options = {};
//     options.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
//     options.secretOrKey = config.passport.secret;
//     passport.use(
//         new Strategy(options, (payload, done) => {
//             User.findOne({id: payload.id}, (err, user) => {
//                 if (err) {
//                     return done(err, false);
//                 }
//                 if (user) {
//                     return done(null, user);
//                 }
//                 return done(null, false);
//             });
//         })
//     );
// }
//
// module.exports = {
//     applyPassportStrategy: applyPassportStrategy()
// }

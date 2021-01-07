const passportJWT = require("passport-jwt");
const User = require("./Model/User");
const {getUser} = require("./Services/user-service");
const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;

const applyPassportStrategy = passport => {
    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(obj, done) {
        done(null, obj);
    });

    passport.use(new JWTStrategy(
        {
            jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'secret',
        },
        async (jwtPayload, done) => {
            console.log('payload received', jwtPayload);
            User.findOne({id: jwtPayload.id}, function(err, user) {
                if (err) {
                    return done(err, false);
                }
                if (user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }})
        }
    ));
}

module.exports = {
    applyPassportStrategy
}

const passportJWT = require("passport-jwt");
const User = require("./Model/User");
const {getUser} = require("./services/user-service");
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
            return getUser({
                    id: jwtPayload.id
            })
                .then(result=>{
                    if (result) {
                        done(null, result);

                    } else {
                        done(null, false);
                    }
                })
                .catch(err=>{
                    done(err)
                })
        }
    ));
}

module.exports = {
    applyPassportStrategy
}

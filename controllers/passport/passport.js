const passport = require("passport");
const passportJwt = require("passport-jwt");
const extractJwt = passportJwt.ExtractJwt;
const strategyJwt = passportJwt.Strategy;
const userSignup = require("../../models/auth/signup");
passport.use(
  new strategyJwt(
    {
      jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET_TOKEN,
    },
    function (jwtPayload, done) {
      return userSignup
        .findOne({ where: { id: jwtPayload.id } })
        .then((user) => {
          return done(null, user);
        })
        .catch((err) => {
          return done(err);
        });
    }
  )
);

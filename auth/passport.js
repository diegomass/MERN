const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require('passport');
var Usermodel = require('../models/User');
const key = require("../config");
const jwt = require("jsonwebtoken")
var GoogleStrategy = require('passport-google-oauth20').Strategy;


const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = key.secretOrKey;



function extractProfile (profile) {
  return {
    id: profile.id,
    displayName: profile.displayName,
  };
}


module.exports = passport.use(
    new JwtStrategy(opts,(jwt_payload,done)=>{
        console.log(jwt_payload)

        Usermodel.findById(jwt_payload.id)
            .then(user=>{
                console.log(user);
                
                if (user){
                    return done(null,user);
                }
                return done(null,false)
            })

            .catch(err=>console.log(err));

    })


)
//Google Strategy
const GOOGLE_CLIENT_ID = key.ID
const GOOGLE_CLIENT_SECRET = key.secret

module.exports = passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/redirect"
  },
    //second param: cb function
    function(accessToken, refreshToken, profile, done) {
      done(null, extractProfile(profile));
      // query if user already exists
      Usermodel.findOne({email: profile.id})
      
      .then((currentUser) => {
          if (currentUser) {
            return done (null, currentUser); // already have this user, done
          } else { 
            //it doesn't exist, create it first, then done.
                  new Usermodel({
                  userName: profile.displayName,
                  password: "",
                  email: profile.id
              })
              .save()
              .then((newUser) => {
                  done(null, newUser)
                }
              );
          }
      })
    }
  ));
  
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser((id, done) => {
    Usermodel.findOne({email: id}).then((user) => {
        done(null, user);
    });
  });

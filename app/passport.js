const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const usermodel = require('./api/models/user_model');
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use('signup', new localStrategy({
    usernameField : 'username',
    passwordField : 'password'
}, async (username,password, done) =>{
    try{
        const user = await usermodel.create({username, password});
        return done(null, user);
    }catch (error){
        return done(error);
    }
}));

passport.use('login',new localStrategy({
    usernameField : 'username',
    passwordField : 'password'
}, async (username, password, done)=>{
    try{
        console.log('passport')
        console.log("username ",username)
        const user = await usermodel.findOne({username});
        if(!user){
            return done(null,false,{message:'user not found'});
        }
        const validate = await user.isValidPassword(password);
        if(!validate){
            return done(null, false, {message : 'incorrect password'});
        }
        return done(null, user, {message : 'user loaded successfully'});
    }catch(error){
        return done(error)
    }
}))

passport.use(new JWTstrategy({
    secretOrKey:'secret',
    jwtFromRequest : ExtractJWT.fromBodyField('token')
}, async(token,done)=>{
    try{
        return done(null,token.user);
    }catch(error){
        return done(error);
    }
}));
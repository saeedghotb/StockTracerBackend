const express = require('express');
const passport = require('passport');
const router = express.Router();
const usercontroller = require('../api/controllers/user_controller');

router.post('/signup',passport.authenticate('signup',{session:false}),usercontroller.signup);
router.post('/login',usercontroller.login);

module.exports = router;

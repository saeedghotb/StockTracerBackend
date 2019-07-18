const express = require('express');
const router = express.Router();
const usercontroller = require('../api/controllers/user_controller');

router.post('/singup',usercontroller.signup);
router.post('/login',usercontroller.login);

module.exports = router;

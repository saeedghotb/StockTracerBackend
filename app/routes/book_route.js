const express = require('express');
const router = express.Router();
const bookcontroller = require('../api/controllers/book_controller');

router.get('/',bookcontroller.getAllBooks);
router.post('/',bookcontroller.addABook);

module.exports = router;

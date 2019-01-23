const express = require('express');
const router = express.Router();
const secretbooks = require('../api/controllers/fake_secret_books');

router.get('/',secretbooks.getAllBooks);
router.post('/',secretbooks.addABook);

module.exports = router;

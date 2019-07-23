const express = require('express');
const router = express.Router();
const moneyController = require('../api/controllers/MoneyController');

router.post('/',moneyController.addAction);
router.get('/',moneyController.getAction);
router.delete('/',moneyController.deleteAction);
router.put('/',moneyController.putAction);

module.exports = router;
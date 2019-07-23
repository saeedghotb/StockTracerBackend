const express = require('express');
const router = express.Router();
const TradeController = require('../api/controllers/TradeController/TradeController');
const TradeImageController = require('../api/controllers/TradeController/TradeImageController');

router.post('/',TradeController.addTrade);
router.get('/',TradeController.getTrades);
router.delete('/',TradeController.deleteTrade);
router.put('/',TradeController.putTrade);
router.post('/image',TradeImageController.addImage);
router.delete('/image',TradeImageController.removeImage);

module.exports = router
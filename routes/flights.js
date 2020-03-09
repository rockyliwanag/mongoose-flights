var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');

/* GET flights listing. */
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);
// router.delete('/:id', flightsCtrl.delete);
router.get('/:id', flightsCtrl.show);

module.exports = router;

const express = require('express');
const controller = require('../controllers/controller');
const Url = require('../models/model');

const router = express.Router();

router.post('/shorten', controller.postURL);
router.get('/:shortId', controller.getURL);


module.exports = router;
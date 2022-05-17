const express=require('express');
const validOrNot = require('../controllers/controllers.js');

const router = express.Router();

router.route('/').post(validOrNot)
module.exports = router
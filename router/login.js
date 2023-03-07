
const express  =require('express');
const router  = express.Router()

const {loginuser} = require('../controllers/login');

router.route('/').post(loginuser);

module.exports = router;
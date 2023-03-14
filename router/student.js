const express  =require('express');
const router  = express.Router()

const {getStudentDetails} = require('../controllers/students');
const authenticationMiddleWare = require('../middleware/auth');

router.route('/').get(authenticationMiddleWare,getStudentDetails);


module.exports = router;
const express  =require('express');
const router  = express.Router()

const {getStudentDetails} = require('../controllers/students');
// const {getStudentLectures} = require('../controllers/students');
const authenticationMiddleWare = require('../middleware/auth');

router.route('/').post(getStudentDetails);
// router.route('/stlectures').get(authenticationMiddleWare,getStudentLectures);


module.exports = router;
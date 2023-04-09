const express  =require('express');
const router  = express.Router()

const {getStudentDetails} = require('../controllers/teacher');
// const {getStudentLectures} = require('../controllers/students');
const authenticationMiddleWare = require('../middleware/auth');

router.route('/getdetails').get(authenticationMiddleWare,getStudentDetails);
// router.route('/stlectures').get(authenticationMiddleWare,getStudentLectures);


module.exports = router;
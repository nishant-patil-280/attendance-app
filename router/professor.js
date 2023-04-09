const express  =require('express');
const router  = express.Router()

const {getProfessorDetails,getProfessorLectures} = require('../controllers/professors');
const authenticationMiddleWare = require('../middleware/auth');

router.route('/getLectures').post(authenticationMiddleWare,getProfessorLectures);
 router.route('/getDetails').get(authenticationMiddleWare,getProfessorDetails);


module.exports = router;
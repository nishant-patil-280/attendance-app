
const express  =require('express');
const router  = express.Router()

const {loginUser} = require('../controllers/login');
const {loginUserAdmin} = require('../controllers/login');

router.route('/admin').post((req,res)=>loginUserAdmin(req, res));
router.route('/student').post((req,res)=>loginUser(req, res, 102));
router.route('/professor').post((req,res)=>loginUser(req, res, 103));

module.exports = router;
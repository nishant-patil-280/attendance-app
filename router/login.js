
const express  =require('express');
const router  = express.Router()

const {loginUser} = require('../controllers/login');

router.route('/admin').post((req,res)=>loginUser(req, res, 101));
router.route('/student').post((req,res)=>loginUser(req, res, 102));
router.route('/professor').post((req,res)=>loginUser(req, res, 103));

module.exports = router;
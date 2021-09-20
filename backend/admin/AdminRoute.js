const express= require('express')
const router = express.Router()
const AdminController = require('./AdminController')


// auth admin 
router.post('/registerA',AdminController.signUpA)
router.post('/loginA',AdminController.signInA)


module.exports = router

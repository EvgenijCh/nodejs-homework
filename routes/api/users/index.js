const express = require('express')
const router = express.Router()
const userController = require('../../../controllers/users')
// const validation = require('./vaidation')
const guard = require('../../../helpers/guard')

router.post('/registration', userController.reg)
router.post('/login', userController.login)
router.post('/logout', guard, userController.logout)

module.exports = router

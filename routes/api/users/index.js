const express = require('express')
const router = express.Router()
const userController = require('../../../controllers/users')
const validation = require('./validation')
const { validateUploadAvatar } = require('./validation')
const guard = require('../../../helpers/guard')
const upload = require('../../../helpers/upload')

router.post('/registration', validation.Register, userController.reg)
router.post('/login', validation.Login, userController.login)
router.get('/logout', guard, userController.logout)
router.patch('/avatars', [guard, upload.single('avatar'), validateUploadAvatar], userController.avatars)

router.get('/verify/:token', userController.verify)

module.exports = router

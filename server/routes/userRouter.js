const router = require('express').Router()
const userController = require('../controllers/userControllers')
router.post('/registration', userController.registration),
router.post('/login', userController.login),
router.get('/auth', userController.check),

module.exports = router
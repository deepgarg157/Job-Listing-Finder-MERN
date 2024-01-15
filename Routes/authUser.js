const express = require('express')
const {registerUser, loginUser, allUser, authController} = require('../controllers/authUser')
const router = express.Router()
const requireAuth = require('../middleware/auth')

// create register
router.get("/users", allUser)
router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/getUserData', requireAuth, authController)

// export router
module.exports = router
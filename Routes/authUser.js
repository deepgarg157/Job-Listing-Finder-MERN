const express = require('express')
const {registerUser, loginUser, allUser} = require('../controllers/authUser')
const router = express.Router()

// create register
router.get("/user", allUser)
router.post('/register', registerUser)
router.post('/login', loginUser)

// export router
module.exports = router
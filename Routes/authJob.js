const express = require('express')
const jobPosts = require('../controllers/authJob')
const router = express.Router()
const requireAuth = require('../middleware/auth')

// job-post
router.post('/job-posts', requireAuth, jobPosts)

module.exports = router
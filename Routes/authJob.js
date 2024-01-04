const express = require('express')
const {jobPosts, jobPostsEdit} = require('../controllers/authJob')
const router = express.Router()
const requireAuth = require('../middleware/auth')

// job-post
router.post('/job-posts', requireAuth, jobPosts)
router.patch('/job-posts/:id', jobPostsEdit)

module.exports = router
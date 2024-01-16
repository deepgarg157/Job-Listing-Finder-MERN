const express = require('express')
const {jobPosts, jobPostsEdit, allJobPost} = require('../controllers/authJob')
const router = express.Router()
const requireAuth = require('../middleware/auth')

// job-post
router.get('/all-job-post', requireAuth, allJobPost)
router.post('/add-job-posts', requireAuth, jobPosts)
router.patch('/job-posts/:id', jobPostsEdit)

module.exports = router
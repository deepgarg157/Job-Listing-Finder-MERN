const express = require('express')
const {jobPosts, jobPostsEdit, allJobPost, allJobPostById} = require('../controllers/authJob')
const router = express.Router()
const requireAuth = require('../middleware/auth')

// job-post
router.get('/all-job-post', requireAuth, allJobPost)
router.get('/all-job-post/:id', requireAuth, allJobPostById)
router.post('/add-job-posts', requireAuth, jobPosts)
router.patch('/job-posts/:id', jobPostsEdit)

module.exports = router
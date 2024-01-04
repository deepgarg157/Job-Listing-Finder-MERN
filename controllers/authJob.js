const jobPost = require('../models/Job')

// new job posts create
const jobPosts = async (req, res) => {
    try {
        const {
            companyName,
            logoURL,
            position,
            salary,
            jobType,
            remote,
            location,
            description,
            skillsRequired,
            about
        } = req.body

        const recruiterName = req.body.recruiterName
        if (!companyName || !logoURL || !position || !salary || !jobType || !remote || !location || !description || !skillsRequired || !about) {
            return res.json({
                status: 'All field is required'
            })
        }

        const existCompany = await jobPost.findOne({ companyName })
        if (existCompany) {
            return res.json({
                status: 'job post is already exist'
            })
        }

        const jobPosts = await jobPost.create({
            companyName,
            logoURL,
            position,
            salary,
            jobType,
            remote,
            location,
            description,
            skillsRequired,
            about,
            recruiterName
        })
        return res.json({
            status: 'New Job-Posts successfully create',
            jobPosts
        })
    }
    catch (error) {
        return res.json({
            status: 'Fail',
            message: error.message
        })
    }
}

// job post edit by id
const jobPostsEdit = async (req, res) => {
    try {
        const jobId = req.params.id
        // if there is no job id
        if (!jobId) {
            return res.status(404).json({
                status: 'job id not found'
            })
        }
        const jobPosts = await jobPost.findById(jobId)

        const updateJobPost = await jobPost.findByIdAndUpdate(jobId, req.body)
        return res.json({
            status: 'job post update is successful',
            updateJobPost
        })
    } catch (error) {
        return res.json({
            status: 'Fail',
            message: error.message
        })
    }
}

module.exports = { jobPosts, jobPostsEdit }
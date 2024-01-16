const jobPost = require('../models/Job')

// all job post get
const allJobPost = async (req, res) => {
    try {
        const allJostPosts = await jobPost.find()
        return res.status(200).json({
            success: true,
            message: 'All job post data',
            data: allJostPosts
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error to fetch job post data"
        })
    }
}

// new job posts create
const jobPosts = async (req, res) => {
    try {
        const {
            companyName,
            logoURL,
            jobPosition,
            salary,
            jobType,
            remote,
            location,
            description,
            about,
            skillsRequired,
            information
        } = req.body

        if (!companyName || !logoURL || !jobPosition || !salary || !jobType || !remote || !location || !description || !about || !skillsRequired || !information) {
            return res.json({
                success: false,
                message: 'All field is required'
            })
        }

        const existCompany = await jobPost.findOne({ companyName })
        if (existCompany) {
            return res.json({
                success: false,
                message: 'job post is already exist'
            })
        }

        const jobPosts = await jobPost.create({
            companyName,
            logoURL,
            jobPosition,
            salary,
            jobType,
            remote,
            location,
            description,
            about,
            skillsRequired,
            information
        })
        return res.json({
            success: true,
            message: 'New Job-Posts successfully create',
            data: jobPosts
        })
    }
    catch (error) {
        console.log(error)
        return res.json({
            success: false,
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
                success: false,
                message: 'job id not found'
            })
        }
        const jobPosts = await jobPost.findById(jobId)

        const updateJobPost = await jobPost.findByIdAndUpdate(jobId, req.body)
        return res.json({
            success: true,
            message: 'job post update is successful',
            updateJobPost
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            message: error.message
        })
    }
}

module.exports = { jobPosts, jobPostsEdit, allJobPost }
const jobPost = require('../models/Job')

const jobPosts = (req, res) => {
    try {
        return res.status(200).json({
            status:'job post success'
        })
    } catch (error) {
        return res.json({
            status: 'Fail',
            message: error.message
        })
    }
}

module.exports = jobPosts
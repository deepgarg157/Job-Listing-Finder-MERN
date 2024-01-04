const mongoose = require('mongoose')

const jobPostSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    remote: {
        type: String,
        emun: ['Remote', 'office'],
        required: true
    },
    skillsRequired: {
        type: 'String',
        required: true
    },
    recruiterName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    logoURL: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        enum: ['Full-time', 'Partr-time', 'Intern', 'Travel'],
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('job', jobPostSchema)
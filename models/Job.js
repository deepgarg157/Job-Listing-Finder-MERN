const mongoose = require('mongoose')

const jobPostSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    logoURL: {
        type: String,
        required: true
    },
    jobPosition: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        enum: ['Full-time', 'Part-time', 'Intern', 'Travel'],
        required: true
    },
    remote: {
        type: String,
        emun: ['Remote', 'Office'],
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
    skillsRequired: {
        type: Array,
        required: true
    },
    information: {
        type: String,
        required: true
    }
}
)

module.exports = mongoose.model('job', jobPostSchema)
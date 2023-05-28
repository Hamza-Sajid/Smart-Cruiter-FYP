const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    jobPosition: {
        type: String,
        required: true,
    },
    officeLocation: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },

    jobType: {
        type: String,
        enum: ["Full Time", "Part Time", "Remote Based", "Project Based"],
        required: true,
    },
    numberOfSeats: {
        type: Number,
        min: 1,
        required: true,
    },
    salaryRangeFrom: {
        type: Number,
        required: true,
    },
    salaryRangeUpto: {
        type: Number,
        required: true,
    },
    job_description: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    org_name: {
        type: String,
        required: true,
    },
    org_id: {
        type: String,
        required: true,
    },
    applicants_no: {
        type: Number,
        required: true,
        default: 0
    },

    job_status: {
        type: String,
        enum: ["Active", "Closed"],
        required: true,
        default: 'Active'
    }
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;

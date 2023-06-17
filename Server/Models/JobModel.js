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
        enum: ["Full Time", "Part Time", "Remote Based", "Project Based", "Hourly"],
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
        default: 'Active'
    },
    report_status: {
        type: {
            applied: Number,
            hired: Number,
            rejected: Number,
            withdrawn: Number,
        },
        default: {
            applied: 0,
            hired: 0,
            rejected: 0,
            withdraw: 0,
        },
    },
    report_experience: {
        type: {
            nill: Number,
            oneyear: Number,
            two_to_three: Number,
            four_to_five: Number,
            five_plus: Number,
        },
        default: {
            nill: 0,
            oneyear: 0,
            two_to_three: 0,
            four_to_five: 0,
            five_plus: 0,
        },
    },
    report_educational_level: {
        type: [String]
    },
    report_city: {
        type: [String]
    },
    report_university: {
        type: [String]
    },
    report_male_vs_female: {
        type: {
            male: Number,
            female: Number,
        },
        default: {
            male: 0,
            female: 0,

        },
    },




});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;

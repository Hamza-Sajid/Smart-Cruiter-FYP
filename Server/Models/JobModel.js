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
        enum: ["Full Time", "Part Time", "Remote", "Project Based"],
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
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;

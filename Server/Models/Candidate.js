const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },

    lastName: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female"],
        required: true,
    },
    address: {
        type: String,
        required: true,
    },

    city: {
        type: String,
        required: true,
    },

    zipCode: {
        type: Number,
        required: true,
    },

    institute: [{
        type: String,
        required: true,
    }],

    level: [{
        type: String,
        required: true,
    }],

    session: [{
        type: Array,
        required: true
    }],
    majors: [{
        type: String,
        required: true,
    }],


    title: [{
        type: String,
        required: true,
    }],
    duration: [{
        type: Number,
        required: true,
    }],
    companyName: [{
        type: String,
        required: true,
    }],
    emailAddress: [{
        type: String,
        required: true,
    }],
    phoneNo: {
        type: Number,
        required: true,
    },
    linkedinProfile: {
        type: String,
        required: true,
    },
    gitHubProfile: {
        type: String,
        required: true,
    },

    profilePic: {
        type: String,
        required: true,
    },


    ResumeURL: {
        type: String,
        required: true,
    }

    ,

    jobID: {
        type: String,
        required: true,
    }
    ,
    orgID: {
        type: String,
        required: true,
    },
    recruitmentCycle: {
        type: String,
        enum: ["Applied", "Interviewing", "Reccomended", "Hired", "Withdrawn"],
        default: "Applied"
    },
    interviewDate: {
        type: String,
        default: 'nill'
    },
    interviewTime: {
        type: String,
        default: 'nill'
    },
    rating: {
        type: Number,
        default: 0
    },
    interview_link: {
        type: String,
        default: 'http:zoom.meet.com/783'
    },
    feedback_form: {
        type: [Number],
        default: [0]
    },

    withdrawn_reason: {
        type: String,
        default: "Try again!"
    }
})


const Candidate = mongoose.model("Candidate", CandidateSchema);

module.exports = Candidate;

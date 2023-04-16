const mongoose = require("mongoose");

const CandidateComments = new mongoose.Schema({


    CandidateID: {
        type: String,
        required: true
    },
    Applied: {
        type: String,
    },
    Interviewing: {
        type: String,
    },
    Reccomended: {
        type: String,
    },
    Applied: {
        type: String,
    },
    Hired: {
        type: String,
    },
    Rejected: {
        type: String,
    },
    Initialized: {
        type: Boolean,
        default: false,
    }
})

const CandidateRemarks = mongoose.model("Comment", CandidateComments)

module.exports = CandidateRemarks;
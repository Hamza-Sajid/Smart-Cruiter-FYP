const express = require('express');
const Candidate = require('../../Models/Candidate');
const app = express();

const GetCandidateDetails = async (req, res, next) => {
    const { id } = req.body;

    const candidate_details = await Candidate.findById(id);

    if (candidate_details) {
        return res.status(200).json({ candidate_details })
    }

    else {
        return res.status(404).json({ message: "No candidate found with this id" })
    }
}

module.exports = GetCandidateDetails;
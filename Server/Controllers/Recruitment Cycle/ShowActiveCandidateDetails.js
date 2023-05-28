const express = require('express');
const app = express();
const Candidate = require('../../Models/Candidate.js')

const showActiveCandidateDetails = async (req, res, next) => {
    const { user_id } = req.body;
    if (!user_id) {
        return res.status(400).json({ message: "Enter valid user_id" })
    }
    const findUser = await Candidate.findById(user_id);
    if (findUser) {
        return res.status(200).json(findUser)
    }
    else {
        return res.status(500).json({ message: "Invalid User ID" })

    }
}

module.exports = showActiveCandidateDetails;
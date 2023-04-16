const express = require('express');
const CandidateRemarks = require('../../Models/Comment.js');
const GetComments = async (req, res, next) => {

    const { id } = req.body;


    // Use the `findOne()` method to find a candidate with the given `user_id`
    CandidateRemarks.findOne({ CandidateID: id }, (err, candidate) => {
        if (err) {
            return res.status(400).json({ message: "No candidate found " })
        }

        if (!candidate) {
            return res.status(500).json({ message: "Server error" })

        }

        return res.status(200).json(candidate)
    });

}
module.exports = GetComments;
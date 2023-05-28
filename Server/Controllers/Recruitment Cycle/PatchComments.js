const express = require("express");
const CandidateRemarks = require("../../Models/Comment.js");
const PatchComments = async (req, res, next) => {
    const { Applied, Interviewing, Reccomended, Hired, Rejected } = req.body.comment;
    const commentID = req.body.id;
    // Update the document by ID
    CandidateRemarks.findOneAndUpdate(
        { CandidateID: commentID }, // Corrected line
        {
            Applied: Applied,
            Interviewing: Interviewing,
            Reccomended: Reccomended,
            Hired: Hired,
            Rejected: Rejected,
        },
        { new: true })
        .then((updatedDoc) => {
            if (updatedDoc) {
                return res.status(200).json({ message: "Update successful" });
            } else {

                return res.status(400).json({ message: "Candidate not found or an error occurred" });
            }
        })
        .catch((error) => {
            return res.status(500).json({ message: "Server error" });
        });
};

module.exports = PatchComments;

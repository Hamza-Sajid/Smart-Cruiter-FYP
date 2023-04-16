const express = require('express');
const CandidateRemarks = require('../../Models/Comment.js');
const PatchComments = async (req, res, next) => {



    const { Applied, Interviewing, Reccomended, Hired, Rejected } = req.body.comment;
    const { commentID } = req.body;


    CandidateRemarks.findByIdAndUpdate(commentID, {
        Applied: Applied,
        Interviewing: Interviewing,
        Reccomended: Reccomended,
        Hired: Hired,
        Rejected: Rejected,
    },

        { new: true },
        (err, data) => {
            if (err) {
                return res.status(500).json({ message: "Server error occured" });
            }
            else {
                return res.status(200).json({ message: "Comment Updated" })

            }
        }
    )


}

module.exports = PatchComments;
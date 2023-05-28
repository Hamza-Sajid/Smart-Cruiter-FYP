const express = require('express');
const CandidateRemarks = require('../../Models/Comment.js');
const HandleComments = async (req, res, next) => {
    const { Applied, Interviewing, Reccomended, Hired, Rejected } = req.body.comment;
    const { id } = req.body;

    if (!id) {
        return res.status(400).json({ message: "invalid input data" })
    }
    const madeComment = await new CandidateRemarks({
        CandidateID: id,
        Applied: Applied,
        Interviewing: Interviewing, Reccomended: Reccomended, Hired, Rejected, Initialized: true
    });
    try {
        await madeComment.save();
    } catch (error) {
        return res.status(500).json({ message: "Server error occured" });
    }
    return res.status(200).json(madeComment)


}

module.exports = HandleComments;
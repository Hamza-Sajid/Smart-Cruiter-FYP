const express = require('express');
const CandidateRemarks = require('../../Models/Comment.js');
const HandleComments = async (req, res, next) => {
    console.log('i am running');

    console.log(req.body.comment)

    const { Applied, Interviewing, Reccomended, Hired, Rejected } = req.body.comment;
    const { id } = req.body;

    if (!Applied || !Interviewing || !Reccomended || !Hired || !Rejected || !id) {
        return res.status(400).json({ message: "invalid input data" })
    }
    const madeComment = await new CandidateRemarks({
        CandidateID: id,
        Applied: Applied,
        Interviewing: Interviewing, Reccomended: Reccomended, Hired, Rejected
    });
    try {
        madeComment.save();
    } catch (error) {
        return res.status(500).json({ message: "Server error occured" });
    }
    return res.status(200).json({ message: "Saved!" })


}

module.exports = HandleComments;
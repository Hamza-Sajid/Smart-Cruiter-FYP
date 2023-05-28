const express = require('express');
const Candidate = require('../../Models/Candidate');

const ShowInterviewingCandidate = async (req, res, next) => {


    const { id } = req.body.id;

    const findInterviewingCandidates = await Candidate.find({
        recruitmentCycle: 'Interviewing',
        jobID: id
    },)

    if (findInterviewingCandidates) {

        res.status(200).json(findInterviewingCandidates)

    }
    else {

        res.status(400).json({ message: "No candidate found" })
    }
}

module.exports = ShowInterviewingCandidate;
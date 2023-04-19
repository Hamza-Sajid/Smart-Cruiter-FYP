const express = require('express');
const Candidate = require('../../Models/Candidate');
const app = express();


const GetOrganizationPostedJobApplicants = async (req, res, next) => {

    const { job_id } = req.body;

    const findApplicants = await Candidate.find(
        {
            jobID: job_id,
            recruitmentCycle: 'Applied'
        })

    if (findApplicants) {
        return res.status(200).json(findApplicants)
    }
    else return res.status(400).json({ message: "nothing found" });
}


module.exports = GetOrganizationPostedJobApplicants;
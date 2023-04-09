const express = require('express');
const Candidate = require('../../Models/Candidate');
const app = express();


const GetOrganizationPostedJobApplicants = async (req, res, next) => {

    const { job_id } = req.body;

    const findApplicants = await Candidate.find({ jobID: job_id })

    if (findApplicants) {
        return res.send(findApplicants)
    }
    else return res.send("nothing found")
}


module.exports = GetOrganizationPostedJobApplicants;
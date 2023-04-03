const express = require("express");
const Job = require("../../Models/JobModel");
const app = express();


const GetJob = async (req, res, next) => {

    const { id } = req.body;

    const jobs = await Job.find({ org_id: id });
    if (jobs) {
        res.send(jobs);
    }
    else {
        return res.send("nothjing found")
    }
    // const jobs_list = await Job.find({ org_id: id }, (err, job) => {
    //     if (err) {
    //         // Handle error
    //         console.log(err);
    //         res.status(500).send('Error retrieving job');
    //     } else {
    //         // Job found
    //         console.log(job);
    //         res.send(job);
    //     }
    // });

}

module.exports = GetJob;
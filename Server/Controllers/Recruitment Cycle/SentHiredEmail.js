const express = require('express');
const Job = require('../../Models/JobModel');
const app = express();


const SentHiredEmail = async (req, res, next) => {

    var org_name, job_title;

    const { emailList } = req.body;
    const { jobInfo } = req.body;
    console.log(req.body);

    // ************************

    // STEP : 1 FIND JOB

    // ************************
    // const id = jobInfo.job_id;

    // if (jobInfo == null) {
    //     res.status(404).json({ message: "ID isn't found in this request" })
    // }
    // const findJob = await Job.findById(id);

    // if (findJob) {
    //     org_name = findJob.org_name,
    //         job_title = findJob.jobPosition
    // }
    // else {
    //     res.status(404).json({ message: "No job found with this ID" })
    // }

    // // *********************************

    // // STEP : 2 GET ALL EMAIL - LIST

    // // *********************************

    // const { emailTitle, description } = req.body;
    // console.log(emailTitle, description);


}

module.exports = SentHiredEmail;
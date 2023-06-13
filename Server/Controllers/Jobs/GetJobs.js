const express = require("express");
const Job = require("../../Models/JobModel");
const app = express();


const GetJob = async (req, res, next) => {

    const { id } = req.body;
    console.log(id);
    if (!id) {
        return res.status(440).json({ message: "on id found" });
    }
    const jobs = await Job.find({ org_id: id });
    if (jobs) {
        return res.status(200).json({ jobs })
    }
    else {
        return res.status(400).json({ message: 'an error has been occured' })
    }

}

module.exports = GetJob;
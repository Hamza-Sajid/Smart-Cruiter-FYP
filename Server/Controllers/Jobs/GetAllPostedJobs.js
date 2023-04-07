const express = require('express');
const Job = require('../../Models/JobModel');

const app = express();


const GetAllPostedJobs = async (req, res, next) => {
    console.log('i am going to run');
    const fetchAllPostedJobs = await Job.find();

    if (fetchAllPostedJobs) {
        return res.status(200).json({ fetchAllPostedJobs })
    }
    else {
        return res.status(400).json({ message: "No job found" })
    }
}

module.exports = GetAllPostedJobs;
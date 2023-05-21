const express = require('express');
const Candidate = require('../../Models/Candidate');

const SaveInterviewDateAndTime = async (req, res, next) => {

    const { value, time, id } = req.body;
    const date = new Date(value);
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const day = date.getDate();



    const addData = await Candidate.findByIdAndUpdate(id, {
        interviewDate: `${day} - ${month} - ${year}`,
        interviewTime: `${time}`
    })

    if (addData === null) {
        return res.status(500).json({ message: "Something went wrong" });
    } else {
        return res.status(200).json({ message: "Added" });
    }



}

module.exports = SaveInterviewDateAndTime;
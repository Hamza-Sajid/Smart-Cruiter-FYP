const express = require("express");
const Candidate = require("../../Models/Candidate");


const app = express();

const UpdateStatus = async (req, res, next) => {
    const { status, id } = req.body;


    try {
        const fetchCandidate = await Candidate.findByIdAndUpdate(
            id,
            { recruitmentCycle: status },
            { new: true }
        );
        if (fetchCandidate) {
            return res.status(200).json({ message: "Updated" });
        }

        else {
            return res.status(400).json({ message: "An error occurred" });

        }
    } catch (error) {
        return res.status(500).json({ message: "An server error occurred" });
    }


}

module.exports = UpdateStatus;
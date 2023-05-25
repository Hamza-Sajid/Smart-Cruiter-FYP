
const express = require("express");
const Candidate = require("../../Models/Candidate");
const app = express();

const GetWithdrawnCandidate = async (req, res, next) => {
    const { id } = req.body;

    try {
        const getUser = await Candidate.find(
            {
                jobID: id,
                recruitmentCycle: 'Withdrawn'
            }
        );

        if (getUser) {
            return res.status(200).json(getUser);
        } else {
            return res.status(404).json({ message: "No user found" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Something unexpected happend" });
    }
};

module.exports = GetWithdrawnCandidate;

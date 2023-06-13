const express = require("express");
const Candidate = require("../../Models/Candidate");
const Job = require("../../Models/JobModel");
const app = express();
const UpdateStatus = async (req, res, next) => {
    const { status, id } = req.body;
    if (!status) {
        return res.status(300).json({ message: "Status value is empty" });
    }
    try {
        const updatedCandidate = await Candidate.findByIdAndUpdate(
            id,
            { recruitmentCycle: status },
            { new: true }
        );

        if (updatedCandidate) {
            if (status == "Declined") {
                const findJob = await Job.findById(updatedCandidate.jobID);
                findJob.report_status.rejected += 1;
                await findJob.save();
            }
            else if (status == "Hired") {
                const findJob = await Job.findById(updatedCandidate.jobID);
                findJob.report_status.hired += 1;
                await findJob.save();
            }

            return res.status(200).json({ message: "Update successful" });
        } else {
            return res
                .status(400)
                .json({ message: "Candidate not found or an error occurred" });
        }
    } catch (error) {
        console.error("Error updating candidate:", error);
        return res.status(500).json({ message: "Server error occurred" });
    }
};

module.exports = UpdateStatus;

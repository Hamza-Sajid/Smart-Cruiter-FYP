const Job = require("../../Models/JobModel");

const showActiveJobs = async (req, res, next) => {

    const id = req.body;

    if (!id) {
        return res.status(440).json({ message: "No id found" });
    }

    const jobs = await Job.find({ org_id: id.id, job_status: 'Active' });

    if (jobs) {
        return res.status(200).json({ jobs })
    }
    else {
        return res.status(404).json({ message: "No user found" })
    }

}

module.exports = showActiveJobs;
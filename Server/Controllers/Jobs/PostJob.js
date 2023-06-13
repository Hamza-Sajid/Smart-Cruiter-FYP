const express = require('express');
const Job = require('../../Models/JobModel');
const app = express();
const PostJobRouter = async (req, res, next) => {

    const { form, description, org_details } = req.body;

    // console.log(form, description, org_details);

    const Postjob = await new Job({
        jobPosition: form.postition,
        officeLocation: form.office_location,
        department: form.department,
        jobType: form.job_type,
        numberOfSeats: form.no_of_seats,
        salaryRangeFrom: form.salary_range_from,
        salaryRangeUpto: form.salary_range_upto,
        job_description: description,
        city: org_details[0],
        country: org_details[1],
        org_name: org_details[2],
        org_id: org_details[3]
    })
    try {
        await Postjob.save();


    } catch (error) {
        console.log(error)
        return res
            .status(500)
            .json({ error: "An error occurred while saving the user." });

    }
    return res.status(200).json({ message: "Job posted!" })


}


module.exports = PostJobRouter;
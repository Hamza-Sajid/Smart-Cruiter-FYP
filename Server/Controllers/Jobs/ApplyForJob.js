const express = require("express")
const app = express();
const cloudinary_config = require('../../Config/Cloudnary.js');
const Cloudinary = require('cloudinary');
const Candidate = require("../../Models/Candidate.js");
const Job = require("../../Models/JobModel.js");

const ApplyForJob = async (req, res, next) => {
    // ~~~~~~~~~~IMAGE HANDLING CODE~~~~~~~~~~~~~


    const { dob } = req.body;
    const { accadamicsSession } = req.body;
    if (!dob, !accadamicsSession) {
        return res.status(206).status({ message: "Fill the form" })
    }
    const { day, month, year } = dob;
    const dateOfBirth = `${day}/${month}/${year}`;

    const { from, to } = accadamicsSession;
    const sessionDetails = `${from} - ${to}`;



    if (!req.files) {
        return res.status(400).json({ message: "Must Attach Your Resume" })
    }

    const resume = await Cloudinary.v2.uploader.upload(req.files[0].path, { folder: 'Resume' });
    const resume_url = resume.secure_url;

    const img = await Cloudinary.v2.uploader.upload(req.files[1].path, { folder: 'ProfilePictures' });
    const img_url = img.secure_url;



    const { org_id, job_id } = req.body;


    const { firstName, lastName, gender, address, city, zipCode } = req.body.personalInfo;

    const { institute, level, majors } = req.body.accadamics;

    const { title, duration, companyName } = req.body.profesional;

    const { emailAddress, phoneNo, linkedinProfile, gitHubProfile } = req.body.contact;


    const ApplyingCandidate = await new Candidate({
        firstName: firstName,
        lastName: lastName,
        dob: dateOfBirth,
        gender: gender,
        address,
        city: city,
        zipCode: zipCode,
        institute: institute,
        level: level,
        majors: majors,
        session: sessionDetails,
        title: title,
        duration: duration,
        companyName: companyName,
        emailAddress: emailAddress,
        phoneNo: phoneNo,
        linkedinProfile: linkedinProfile,
        gitHubProfile: gitHubProfile,
        profilePic: img_url,
        ResumeURL: resume_url,
        jobID: job_id,
        orgID: org_id
    })
    //Finding and updating job applicant_applied to +1
    const findJob = await Job.findById(job_id)

    if (findJob) {
        findJob.applicants_no += 1;
    }
    try {
        await ApplyingCandidate.save();
        await findJob.save()
    } catch (error) {
        console.log(error)
        return res
            .status(500)
            .json({ error: "An error occurred while saving the user." });
    }

    return res.status(200).json({ message: "Job posted!" })
}

module.exports = ApplyForJob;
// const express = require("express");
// const app = express();
// const cloudinary_config = require("../../Config/Cloudnary.js");
// const Cloudinary = require("cloudinary");
// const Candidate = require("../../Models/Candidate.js");
// const Job = require("../../Models/JobModel.js");

// const ApplyForJob = async (req, res, next) => {
//     // ~~~~~~~~~~IMAGE HANDLING CODE~~~~~~~~~~~~~

//     const { accadamicsSession } = req.body;

//     const { dob } = req.body;
//     if (dob || accadamicsSession == undefined) {
//         return res.status(206).status({ message: "Fill the form" });
//     }
//     console.log('arraning the data');
//     if (!dob || !accadamicsSession) {
//         return res.send("Complete the form")
//     }
//     // Arranging the data to store easily in DB
//     const { day, month, year } = dob;
//     const dateOfBirth = `${day}/${month}/${year}`;
//     // const { from, to } = accadamicsSession;
//     // const sessionDetails = `${from} - ${to}`;
//     console.log('checking the image');
//     if (!req.files) {
//         return res.status(400).json({ message: "Must Attach Your Resume" });
//     }
//     console.log('file also found');
//     // -> Code to upload the image on Cloudnary folder
//     const resume = await Cloudinary.v2.uploader.upload(req.files[0].path, {
//         folder: "Resume",
//     });
//     const resume_url = resume.secure_url;

//     const img = await Cloudinary.v2.uploader.upload(req.files[1].path, {
//         folder: "ProfilePictures",
//     });
//     const img_url = img.secure_url;

//     // -> Getting / fetching all the required information
//     const { org_id, job_id } = req.body;

//     const { firstName, lastName, gender, address, city, zipCode } =
//         req.body.personalInfo;

//     const { institute, level, majors } = req.body.accadamics;

//     const { title, duration, companyName } = req.body.profesional;

//     const { emailAddress, phoneNo, linkedinProfile, gitHubProfile } =
//         req.body.contact;

//     // -> Storing in the Modal
//     const ApplyingCandidate = await new Candidate({
//         firstName: firstName,
//         lastName: lastName,
//         dob: dateOfBirth,
//         gender: gender,
//         address,
//         city: city,
//         zipCode: zipCode,
//         institute: institute,
//         level: level,
//         majors: majors,
//         session: accadamicsSession,
//         title: title,
//         duration: duration,
//         companyName: companyName,
//         emailAddress: emailAddress,
//         phoneNo: phoneNo,
//         linkedinProfile: linkedinProfile,
//         gitHubProfile: gitHubProfile,
//         profilePic: img_url,
//         ResumeURL: resume_url,
//         jobID: job_id,
//         orgID: org_id,
//     });
//     //Finding and updating job applicant_applied to +1
//     const findJob = await Job.findById(job_id);

//     if (findJob) {
//         //- > Updating the job applicant no = +1
//         findJob.applicants_no += 1;
//     }
//     try {
//         console.log('TRRYING');
//         await ApplyingCandidate.save();
//         await findJob.save();
//     } catch (error) {
//         console.log(error)
//         return res
//             .status(500)
//             .json({ error: "An error occurred while saving the user." });
//     }

//     console.log('JOB PSOTED');
//     return res.status(200).json({ message: "Application Submited!" });
// };

// module.exports = ApplyForJob;


const express = require("express");
const app = express();
const cloudinary_config = require("../../Config/Cloudnary.js");
const Cloudinary = require("cloudinary");
const Candidate = require("../../Models/Candidate.js");
const Job = require("../../Models/JobModel.js");

const ApplyForJob = async (req, res, next) => {
    // ~~~~~~~~~~IMAGE HANDLING CODE~~~~~~~~~~~~~


    // const { first, second } = req.body.accadamicsSession;

    // const data = {
    //     first: [],
    //     second: '',
    //     third: ''
    // }



    try {

        const { dob } = req.body;
        const { accadamicsSession } = req.body;
        if ((!dob, !accadamicsSession)) {
            return res.status(206).status({ message: "Fill the form" });
        }

        // Arranging the data to store easily in DB
        const { day, month, year } = dob;
        const dateOfBirth = `${day}/${month}/${year}`;
        const { from, to } = accadamicsSession;
        const sessionDetails = `${from} - ${to}`;

        if (req.files.length < 1) {
            return res.status(400).json({ message: "Must Attach Your Resume and Profile Picture" });
        }
        // -> Code to upload the image on Cloudnary folder
        const resume = await Cloudinary.v2.uploader.upload(req.files[0].path, {
            folder: "Resume",
        });
        const resume_url = resume.secure_url;

        const img = await Cloudinary.v2.uploader.upload(req.files[1].path, {
            folder: "ProfilePictures",
        });
        const img_url = img.secure_url;

        // -> Getting / fetching all the required information
        const { org_id, job_id } = req.body;

        const { firstName, lastName, gender, address, city, zipCode } =
            req.body.personalInfo;

        const { institute, level, majors } = req.body.accadamics;

        const { title, duration, companyName } = req.body.profesional;

        const { emailAddress, phoneNo, linkedinProfile, gitHubProfile } =
            req.body.contact;

        // -> Storing in the Modal
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
            session: accadamicsSession,
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
            orgID: org_id,
        });
        //Finding and updating job applicant_applied to +1
        const findJob = await Job.findById(job_id);
        // ************************
        //Storing all this information to make stats for this job and organization
        // ************************
        if (findJob) {
            //- > Updating the job applicant no = +1
            findJob.applicants_no += 1;
            findJob.report_status.applied += 1;

            //storing highest educational qualification

            if (level == "B.S") {
                findJob.report_educational_level.push("BS")
            }
            else if (level == "M.S") {
                findJob.report_educational_level.push("MS")
            }
            else {
                findJob.report_educational_level.push("Ph.D")
            }
            //now store city value  
            findJob.report_city.push(city);
            findJob.report_university.push(institute[0]);

            //now storing gender
            if (gender == "Male") {
                findJob.report_male_vs_female.male += 1;
            }
            else if (gender == "Female") {
                findJob.report_male_vs_female.female += 1;
            }
        }
        await ApplyingCandidate.save();
        await findJob.save();
    } catch (error) {
        console.log(error)
        return res
            .status(500)
            .json({ error: "An error occurred while saving the user." });
    }

    return res.status(200).json({ message: "Application Submited!" });
};

module.exports = ApplyForJob;
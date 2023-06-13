const express = require('express');
const ApplyForJob = require('../Controllers/Jobs/ApplyForJob');
const GetAllPostedJobs = require('../Controllers/Jobs/GetAllPostedJobs');
const GetJob = require('../Controllers/Jobs/GetJobs');
const GetSelectedJobDescription = require('../Controllers/Jobs/GetSelectedJobDescription');
const PostJobRouter = require('../Controllers/Jobs/PostJob');
const multer = require('multer');
const GetOrganizationPostedJobApplicants = require('../Controllers/Jobs/GetOrganizationPostedJob');
const FilterShowActiveJobs = require('../Controllers/Jobs/Filter-ShowActiveJobs');
const FilterShowClosedJobs = require('../Controllers/Jobs/FilterShowClosedJobs');


const JobRouter = express.Router();

JobRouter.post("/post", PostJobRouter)
JobRouter.post("/get-jobs", GetJob);
JobRouter.post("/get-jobs/active", FilterShowActiveJobs);
JobRouter.post("/get-jobs/closed", FilterShowClosedJobs);
JobRouter.post("/get-jobs/details", GetSelectedJobDescription);
JobRouter.get("/get-all-jobs", GetAllPostedJobs)












//* ~~~~~~~~FILE - UPLOAD  -  API ~~~~~~~~~~ **/ 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });
//  The correct method was to use upload.array() but it was giving error 
//  so for time being i am gona use .any method

JobRouter.post("/apply-to-job", upload.any('profile', 'resume'), ApplyForJob)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~






module.exports = JobRouter;
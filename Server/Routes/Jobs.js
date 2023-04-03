const express = require('express');
const GetJob = require('../Controllers/Jobs/GetJobs');
const PostJobRouter = require('../Controllers/Jobs/PostJob');
const JobRouter = express.Router();

JobRouter.post("/post", PostJobRouter)
JobRouter.post("/get-jobs", GetJob);

module.exports = JobRouter;
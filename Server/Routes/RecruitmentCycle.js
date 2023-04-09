const express = require('express');
const showActiveCandidateDetails = require('../Controllers/Recruitment Cycle/ShowActiveCandidateDetails');

const RecruitmentRouter = express.Router();



RecruitmentRouter.post("/active/user", showActiveCandidateDetails)


module.exports = RecruitmentRouter
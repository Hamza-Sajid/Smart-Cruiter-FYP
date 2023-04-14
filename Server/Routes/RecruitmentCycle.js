const express = require('express');
const FilterCandidates = require('../Controllers/Recruitment Cycle/FilterCandidates');
const showActiveCandidateDetails = require('../Controllers/Recruitment Cycle/ShowActiveCandidateDetails');

const RecruitmentRouter = express.Router();



RecruitmentRouter.post("/active/user", showActiveCandidateDetails)
RecruitmentRouter.post("/active/user/filter", FilterCandidates)

module.exports = RecruitmentRouter
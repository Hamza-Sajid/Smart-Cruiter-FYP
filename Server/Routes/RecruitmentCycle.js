const express = require('express');
const DeleteCandidateProfile = require('../Controllers/Recruitment Cycle/DeleteCandidateProfile');
const FilterCandidates = require('../Controllers/Recruitment Cycle/FilterCandidates');
const HandleComments = require('../Controllers/Recruitment Cycle/HandleComments');
const showActiveCandidateDetails = require('../Controllers/Recruitment Cycle/ShowActiveCandidateDetails');

const RecruitmentRouter = express.Router();



RecruitmentRouter.post("/active/user", showActiveCandidateDetails)
RecruitmentRouter.post("/active/user/filter", FilterCandidates)
RecruitmentRouter.delete("/active/user/delete", DeleteCandidateProfile);
RecruitmentRouter.post("/active/user/comments", HandleComments)

module.exports = RecruitmentRouter
const express = require('express');
const DeleteCandidateProfile = require('../Controllers/Recruitment Cycle/DeleteCandidateProfile');
const FilterCandidates = require('../Controllers/Recruitment Cycle/FilterCandidates');
const GetCandidateDetails = require('../Controllers/Recruitment Cycle/GetCandidateDetails');
const GetComments = require('../Controllers/Recruitment Cycle/GetComments');
const GetReccomendedCandidates = require('../Controllers/Recruitment Cycle/GetReccomendedCandidates');
const HandleComments = require('../Controllers/Recruitment Cycle/HandleComments');
const PatchComments = require('../Controllers/Recruitment Cycle/PatchComments');
const SaveInterviewDateAndTime = require('../Controllers/Recruitment Cycle/SaveInterviewDateAndTime');
const SendInterviewEmail = require('../Controllers/Recruitment Cycle/SendInterviewEmail');
const showActiveCandidateDetails = require('../Controllers/Recruitment Cycle/ShowActiveCandidateDetails');
const ShowInterviewingCandidate = require('../Controllers/Recruitment Cycle/ShowInterviewingCandidate');
const SubmitFeedback = require('../Controllers/Recruitment Cycle/SubmitFeedbacl');
const UpdateStatus = require('../Controllers/Recruitment Cycle/UpdateStatus');

const RecruitmentRouter = express.Router();



RecruitmentRouter.post("/active/user", showActiveCandidateDetails);
RecruitmentRouter.post("/active/user/filter", FilterCandidates);
RecruitmentRouter.delete("/active/user/delete", DeleteCandidateProfile);
RecruitmentRouter.post("/active/user/add/comments", HandleComments);
RecruitmentRouter.patch("/active/user/patch/comments", PatchComments);
RecruitmentRouter.post("/active/user/get/comments", GetComments);
RecruitmentRouter.post("/active/user/updateStatus", UpdateStatus)
RecruitmentRouter.post("/active/interviewing", ShowInterviewingCandidate);
RecruitmentRouter.post("/active/interviewing/details", GetCandidateDetails);
RecruitmentRouter.post("/active/interviewing/details/sendInterviewEmail", SendInterviewEmail);
RecruitmentRouter.post("/active/interviewing/details/dateandtime", SaveInterviewDateAndTime);
RecruitmentRouter.post("/active/interviewing/details/savefeedback", SubmitFeedback);
RecruitmentRouter.post("/active/reccomended", GetReccomendedCandidates);

module.exports = RecruitmentRouter
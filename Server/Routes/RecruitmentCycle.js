const express = require('express');
const GetOrganizationPostedJobApplicants = require('../Controllers/Jobs/GetOrganizationPostedJob');
const DeleteCandidateProfile = require('../Controllers/Recruitment Cycle/DeleteCandidateProfile');
const FilterCandidates = require('../Controllers/Recruitment Cycle/FilterCandidates');
const GetCandidateDetails = require('../Controllers/Recruitment Cycle/GetCandidateDetails');
const GetComments = require('../Controllers/Recruitment Cycle/GetComments');
const GetHiredCandidate = require('../Controllers/Recruitment Cycle/GetHiredCandidate');
const GetReccomendedCandidatesDetails = require('../Controllers/Recruitment Cycle/GetReccomendedCandidateDetails');
const GetReccomendedCandidates = require('../Controllers/Recruitment Cycle/GetReccomendedCandidates');
const GetWithdrawnCandidate = require('../Controllers/Recruitment Cycle/GetWithdrawnCandidate');
const GetWithdrawnCandidateDetails = require('../Controllers/Recruitment Cycle/GetWithdrawnCandidateDetails');
const HandleComments = require('../Controllers/Recruitment Cycle/HandleComments');
const PatchComments = require('../Controllers/Recruitment Cycle/PatchComments');
const SaveInterviewDateAndTime = require('../Controllers/Recruitment Cycle/SaveInterviewDateAndTime');
const SendInterviewEmail = require('../Controllers/Recruitment Cycle/SendInterviewEmail');
const SentHiredEmail = require('../Controllers/Recruitment Cycle/SentHiredEmail');
const showActiveCandidateDetails = require('../Controllers/Recruitment Cycle/ShowActiveCandidateDetails');
const ShowInterviewingCandidate = require('../Controllers/Recruitment Cycle/ShowInterviewingCandidate');
const SubmitFeedback = require('../Controllers/Recruitment Cycle/SubmitFeedbacl');
const UpdateStatus = require('../Controllers/Recruitment Cycle/UpdateStatus');
const UpdateWithdrawnReason = require('../Controllers/Recruitment Cycle/UpdateWithdrawnReason');

const RecruitmentRouter = express.Router();


RecruitmentRouter.post("/active/applied", GetOrganizationPostedJobApplicants)
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
RecruitmentRouter.post("/active/reccomended/details", GetReccomendedCandidatesDetails);
RecruitmentRouter.post("/active/hired", GetHiredCandidate);
RecruitmentRouter.post("/active/hired/sendEmail", SentHiredEmail);

RecruitmentRouter.post("/active/rejected", GetReccomendedCandidates);
RecruitmentRouter.post("/active/withdrawn", GetWithdrawnCandidate);

RecruitmentRouter.post("/active/withdrawn/details", GetWithdrawnCandidateDetails);
RecruitmentRouter.post("/active/withdrawn/details/updateReason", UpdateWithdrawnReason);


module.exports = RecruitmentRouter
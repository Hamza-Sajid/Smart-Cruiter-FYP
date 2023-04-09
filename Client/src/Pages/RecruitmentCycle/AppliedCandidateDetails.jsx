import React from "react";
import { useParams } from "react-router-dom";
import TopRcruitementCycle from "../../Components/Dashboard/CreateJob/TopRcruitementCycle";
import LeftMenuBar from "../../Components/Dashboard/LeftMenuBar";
import TopNavigationBar from "../../Components/Dashboard/TopNavigationBar";
import SwitchStatus from "../../Components/RecruitmentStage/SwitchStatus";
import AppliedApplicantProfile from "./AppliedApplicantProfile";

function AppliedCandidateDetails() {
  return (
    <>
      <div className="flex bg-white">
        <div className="hidden sm:block w-2/12 bg-white h-screen ">
          <LeftMenuBar />
        </div>
        <div className="w-full bg-background ">
          <div className="p-0">
            <TopNavigationBar />
            <TopRcruitementCycle />
            <div className="w-11/12 m-auto">
              <SwitchStatus />
            </div>
          </div>

          <div className="w-11/12 m-auto bg-white rounded-lg p-6 mt-6 modalShadow">
            <AppliedApplicantProfile />
          </div>
        </div>
      </div>
    </>
  );
}

export default AppliedCandidateDetails;

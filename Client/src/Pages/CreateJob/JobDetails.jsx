import React from "react";
import AppliedApplicantProfile from "../../Components/Dashboard/CreateJob/AppliedApplicantProfile";
import FilterProfiles from "../../Components/Dashboard/CreateJob/FIlterProfiles";
import FIlterProfiles from "../../Components/Dashboard/CreateJob/FIlterProfiles";
import TopRcruitementCycle from "../../Components/Dashboard/CreateJob/TopRcruitementCycle";
import LeftMenuBar from "../../Components/Dashboard/LeftMenuBar";
import TopNavigationBar from "../../Components/Dashboard/TopNavigationBar";

function JobDetails() {
  return (
    <div className="flex bg-white">
      <div className="hidden sm:block w-2/12 bg-white h-screen ">
        <LeftMenuBar />
      </div>
      <div className="w-full bg-background ">
        <div className="p-0">
          <TopNavigationBar />
          <TopRcruitementCycle />
          {/* FILTER PROFILE AND APPLICANT LIST SECTION */}
          <div className="flex flex-row ">
            <div className="w-3/12 ml-4">
              <FilterProfiles />
            </div>

            <div className="bg- w-full">
              <AppliedApplicantProfile />

              <AppliedApplicantProfile />

              <AppliedApplicantProfile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;

import React from "react";
import LeftMenuBar from "../../Components/Dashboard/LeftMenuBar";
import TopNavigationBar from "../../Components/Dashboard/TopNavigationBar";
import MainAreaOfHiredCandidateDetails from "../../Components/HiredCandidatePage/MainAreaOfHiredCandidateDetails";

function HiredCandidateDetails() {
  return (
    <div className="flex bg-white">
      <div className="hidden sm:block w-2/12 bg-white h-screen">
        <LeftMenuBar />
      </div>
      <div className="w-full bg-background">
        <div className="p-0">
          <TopNavigationBar title={"Hired"} />
        </div>
        <MainAreaOfHiredCandidateDetails />
      </div>
    </div>
  );
}

export default HiredCandidateDetails;

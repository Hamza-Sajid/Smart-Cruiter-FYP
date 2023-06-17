import React from "react";
import LeftMenuBar from "../../Components/Dashboard/LeftMenuBar";
import TopNavigationBar from "../../Components/Dashboard/TopNavigationBar";
import MainPage from "../../Components/HiredCandidatePage/MainPage";

function HiredCandidate() {
  return (
    <div className="flex bg-white">
      <div className="hidden sm:block w-2/12 bg-white h-screen">
        <LeftMenuBar />
      </div>
      <div className="w-full bg-background">
        <div className="p-0">
          <TopNavigationBar title={"Candidates"} />
        </div>

        <MainPage />
      </div>
    </div>
  );
}

export default HiredCandidate;

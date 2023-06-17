import React from "react";
import { useParams } from "react-router-dom";
import TopRcruitementCycle from "../../Components/Dashboard/CreateJob/TopRcruitementCycle";
import LeftMenuBar from "../../Components/Dashboard/LeftMenuBar";
import TopNavigationBar from "../../Components/Dashboard/TopNavigationBar";
import InterviewingCandidateListCard from "../../Components/RecruitmentStage/InterviewingCandidateListCard";

function InterviewingCandidate() {
  const params = useParams();

  return (
    <>
      <div className="flex bg-white ">
        <div className="hidden sm:block w-2/12 bg-white h-screen ">
          <LeftMenuBar />
        </div>
        <div className="w-screen bg-background ">
          <div className="p-0 w-full">
            <TopNavigationBar title={"Interviewing"} className="w-full" />
            <TopRcruitementCycle id={params} />
          </div>
          <div className="w-11/12 m-auto mt-12  ">
            <h2 className="heading3">Interviewing Candidates List</h2>
            <div className="mt-6">
              <InterviewingCandidateListCard id={params} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InterviewingCandidate;

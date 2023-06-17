import React from "react";
import { useParams } from "react-router-dom";
import TopRcruitementCycle from "../../Components/Dashboard/CreateJob/TopRcruitementCycle";
import LeftMenuBar from "../../Components/Dashboard/LeftMenuBar";
import TopNavigationBar from "../../Components/Dashboard/TopNavigationBar";
import InterviewingCandidateListCard from "../../Components/RecruitmentStage/InterviewingCandidateListCard";
import ReccomendidCandidateCard from "../../Components/RecruitmentStage/ReccomendidCandidateCard";

function ReccomendedCandidates() {
  const { id } = useParams();

  return (
    <div>
      <div className="flex bg-white ">
        <div className="hidden sm:block w-2/12 bg-white h-screen ">
          <LeftMenuBar />
        </div>
        <div className="w-screen bg-background ">
          <div className="p-0 w-full">
            <TopNavigationBar title={"Reccomended"} className="w-full" />
            <TopRcruitementCycle id={id} />
          </div>
          <div className="w-11/12 m-auto mt-12  ">
            <h2 className="heading3">Reccomended Candidates List</h2>
            <div className="mt-6">
              <ReccomendidCandidateCard id={id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReccomendedCandidates;

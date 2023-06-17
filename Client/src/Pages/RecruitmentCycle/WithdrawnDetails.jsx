import React from "react";
import { useParams } from "react-router-dom";
import TopRcruitementCycle from "../../Components/Dashboard/CreateJob/TopRcruitementCycle";
import LeftMenuBar from "../../Components/Dashboard/LeftMenuBar";
import TopNavigationBar from "../../Components/Dashboard/TopNavigationBar";
import SwitchStatus from "../../Components/RecruitmentStage/SwitchStatus";
import WithdrawnCandidateCard from "../../Components/RecruitmentStage/WithdrawnCandidateCard";
import WithdrawnDetailsCard from "../../Components/RecruitmentStage/WithdrawnDetailsCard";

function WithdrawnDetails() {
  const { id } = useParams();
  return (
    <div>
      <div className="flex bg-white ">
        <div className="hidden sm:block w-2/12 bg-white h-screen ">
          <LeftMenuBar />
        </div>
        <div className="w-screen bg-background ">
          <div className="p-0 w-full">
            <TopNavigationBar title={"Withdrawn"} className="w-full" />
            <TopRcruitementCycle />
          </div>

          <div className="w-11/12 m-auto mt-0  ">
            <SwitchStatus id={id} />
            {/* <WithdrawnDetailsCard /> */}
          </div>

          <div className="w-11/12 m-auto mt-4  ">
            <WithdrawnDetailsCard id={id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WithdrawnDetails;

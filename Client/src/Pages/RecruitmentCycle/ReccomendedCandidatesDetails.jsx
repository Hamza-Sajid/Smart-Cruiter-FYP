import React, { useState } from "react";
import TopRcruitementCycle from "../../Components/Dashboard/CreateJob/TopRcruitementCycle";
import LeftMenuBar from "../../Components/Dashboard/LeftMenuBar";
import TopNavigationBar from "../../Components/Dashboard/TopNavigationBar";
import SwitchStatus from "../../Components/RecruitmentStage/SwitchStatus";
import GoBackButton from "../../Components/Common/GoBackButton";
import ReccomendedCandidateDetailsCard from "../../Components/RecruitmentStage/ReccomendedCandidateDetailsCard";
import { useParams } from "react-router-dom";
function ReccomendedCandidatesDetails() {
  const { id } = useParams();
  const [user, SetUser] = useState();

  const [candidateID, setCandidateID] = useState();

  return (
    <div>
      <div className="flex bg-white ">
        <div className="hidden sm:block w-2/12 bg-white h-screen ">
          <LeftMenuBar />
        </div>
        <div className="w-screen bg-background ">
          <div className="p-0 w-full">
            <TopNavigationBar className="w-full" />
            <TopRcruitementCycle />
          </div>
          <div className="w-11/12 m-auto">
            <SwitchStatus id={user} />
          </div>
          <div className="w-11/12 m-auto mt-4  ">
            <GoBackButton location={"Reccomended"} name={user?.firstName} />
            <div className="mt-6 shadow-md">
              <ReccomendedCandidateDetailsCard
                id={id}
                user={user}
                SetUser={SetUser}
                setID={setCandidateID}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReccomendedCandidatesDetails;

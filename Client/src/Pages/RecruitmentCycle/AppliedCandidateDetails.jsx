import React from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import TopRcruitementCycle from "../../Components/Dashboard/CreateJob/TopRcruitementCycle";
import LeftMenuBar from "../../Components/Dashboard/LeftMenuBar";
import TopNavigationBar from "../../Components/Dashboard/TopNavigationBar";
import SwitchStatus from "../../Components/RecruitmentStage/SwitchStatus";
import AppliedApplicantProfile from "./AppliedApplicantProfile";

function AppliedCandidateDetails() {
  const { id } = useParams();

  const notify = () => toast("Wow so easy !");

  return (
    <>
      <div className="flex bg-white">
        <div className="hidden sm:block w-2/12 bg-white h-screen ">
          <LeftMenuBar />
        </div>
        <div className="w-full bg-background ">
          <div className="p-0">
            <TopNavigationBar title={"Applied"} />
            <TopRcruitementCycle id={id} />
            <div className="w-11/12 m-auto">
              <SwitchStatus id={id} />
            </div>
          </div>
          <div className="w-11/12 m-auto bg-white rounded-lg p-6 mt-6 modalShadow">
            <AppliedApplicantProfile id={id} />
          </div>
        </div>
      </div>
    </>
  );
}

export default AppliedCandidateDetails;

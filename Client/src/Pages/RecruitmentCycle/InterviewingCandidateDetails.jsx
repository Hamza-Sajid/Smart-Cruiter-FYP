import React from "react";
import TopRcruitementCycle from "../../Components/Dashboard/CreateJob/TopRcruitementCycle";
import LeftMenuBar from "../../Components/Dashboard/LeftMenuBar";
import TopNavigationBar from "../../Components/Dashboard/TopNavigationBar";
import FeedbackForm from "../../Components/RecruitmentStage/FeedbackForm";
import SwitchStatus from "../../Components/RecruitmentStage/SwitchStatus";

function InterviewingCandidateDetails() {
  return (
    <div>
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
          <div className="w-11/12 m-auto mt-12 ">
            <h2 className="heading3">Interviewing / Ahmad</h2>
            <div className="flex justify-center">
              <h3
                className="font-medium text-3xl mt-4 mr-4 inline
              
              text-transparent   bg-clip-text bg-gradient-to-r from-blue-500 to-black
              
              "
              >
                Rating
              </h3>
              <div
                className="radial-progress text-blue-500"
                style={{ "--value": 70, "--thickness": "2px" }}
              >
                70%
              </div>
            </div>

            {/* //INTERVIEW LINK */}
            <div>
              <h3 className="heading2b">Generate Interview Link</h3>

              <div className="p-4 mt-12  h-auto  bg-white w-1/2 justify-around rounded-lg shadow-lg m-auto">
                <div className="flex items-center justify-around h-auto pt-24">
                  <div>
                    <img
                      width={80}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Google_Meet_icon_%282020%29.svg/1200px-Google_Meet_icon_%282020%29.svg.png"
                      alt=""
                    />
                  </div>

                  <div>
                    <img
                      width={80}
                      src="https://companieslogo.com/img/orig/ZM-b326e02f.png?t=1647979587"
                      alt=""
                    />
                  </div>
                </div>

                <h2 className="heading4 ml-4 mt-8">Generated URL:</h2>
                <input
                  className="bg-blue-50 ml-24 p-1 rounded-lg indent-3"
                  type="url"
                  name=""
                  id=""
                />

                <button className="btn bg-primary block m-auto mt-8 border-none ">
                  Send Interview Invitation
                </button>
              </div>
            </div>

            <div className="mt-12">
              <FeedbackForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterviewingCandidateDetails;

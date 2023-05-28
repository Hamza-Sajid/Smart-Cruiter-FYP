import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NoUserSVG from "../../assets/illustrations/no_user.svg";
import { MdDoneAll, MdRemoveDone } from "react-icons/md";
function InterviewingCandidateListCard({ id }) {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchAllInterviewingCanidate = () => {
      // axios POST request
      const options = {
        url: "http://localhost:3000/details/active/interviewing",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        data: { id },
      };

      axios(options)
        .then((response) => {
          if (response.status == 200) {
            setUser(response.data);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    };

    fetchAllInterviewingCanidate();
  }, [0]);

  const navigate = useNavigate();

  return (
    <div>
      {user?.length !== 0 ? (
        user?.map((e, index) => {
          var educationLevelLastValue = e?.level.slice(-1)[0];
          return (
            <div
              key={index}
              onClick={() =>
                navigate(`/JobDetails/interviewing/details/${e._id}`)
              }
            >
              <div className="w-4/5 block m-auto bg-white h-auto p-5  shadow-md rounded-md hover:bg-gray-50 hover:border border-solid border-gray-300  cursor-pointer  ">
                <div className="  flex  flex-wrap sm:flex-nowrap justify-between items-center">
                  <div className="m-auto ">
                    <img
                      width={150}
                      src={e?.ResumeURL}
                      alt=""
                      className="rounded-full "
                    />
                  </div>
                  {/* 2nd Profile Info */}
                  <div className="ml-6 flex  flex-col w-full">
                    <h2 className="heading4 font-medium text-2xl mb-4">
                      {e?.firstName + " " + e?.lastName}
                    </h2>
                    <div className="flex flex-wrap sm:flex-nowrap gap-2 justify-around">
                      <div className=" bg-white border border-solid border-gray-300 rounded-lg p-2 text-center">
                        <div>
                          <h4 className="block line1 font-medium">
                            Experience
                          </h4>
                          <h4 className="inline">{e?.duration[0]}</h4>
                        </div>
                      </div>

                      <div className="  bg-white border border-solid border-gray-300 rounded-lg p-2 text-center">
                        <div>
                          <h4 className="block line1 font-medium">Education</h4>
                          <h4 className="inline">{educationLevelLastValue}</h4>
                        </div>
                      </div>

                      <div className=" bg-white border border-solid border-gray-300 rounded-lg p-2 text-center">
                        <div>
                          <h4 className="block line1 font-medium">City</h4>
                          <h4 className="inline">{e?.city}</h4>
                        </div>
                      </div>

                      <div className="bg-white border border-solid border-gray-300 rounded-lg p-2 text-center">
                        <div>
                          <h4 className="block line1 font-medium">
                            Interview Date
                          </h4>
                          <h4 className="inline">{e?.interviewDate}</h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full sm:w-auto items-center justify-center">
                    {e?.interviewDate !== "nill" ? (
                      <div className="bg-gray-50 rounded-xl p-4 items-center justify-center shadow-md mt-8">
                        <MdDoneAll className=" text-2xl  text-green-600" />
                      </div>
                    ) : (
                      <div className="bg-gray-50 rounded-xl p-4 items-center justify-center shadow-md mt-8">
                        <MdRemoveDone className=" text-2xl  text-gray-500" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        // *********************************************
        // CODE FOR IF THERE ARE NOT INTERVIEWING USER
        // *********************************************
        <div className="mt-12">
          <img className="w-1/4 m-auto shadow-sm" src={NoUserSVG}></img>

          <h2 className="heading2b text-center mt-8">
            Currently no Interviewing User
          </h2>
        </div>
      )}
    </div>
  );
}

export default InterviewingCandidateListCard;

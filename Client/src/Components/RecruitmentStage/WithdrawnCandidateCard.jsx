import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import NoUserSVG from "../../assets/illustrations/no_user.svg";
import OkSVG from "../../assets/illustrations/done.svg";
import { BeatLoader } from "react-spinners";
function WithdrawnCandidateCard({ id }) {
  //   const { width, height } = useWindowSize();

  const [candidate, setCandidate] = useState();

  useEffect(() => {
    const getCandidates = async () => {
      const options = {
        url: "http://localhost:3000/details/active/withdrawn",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        data: { id },
      };

      axios(options)
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            setCandidate(response.data);
          } else {
            alert("something went wrong , try again");
          }
        })
        .catch((e) => {
          alert("something went wrong , try again");
        });
    };

    getCandidates();
  }, [0]);

  const navigate = useNavigate();

  return (
    <div>
      {candidate?.length !== 0 ? (
        candidate?.map((e, index) => {
          var educationLevelLastValue = e?.level.slice(-1)[0];

          return (
            <div
              key={index}
              onClick={() => {
                navigate(`/JobDetails/withdrawn/details/${e._id}`);
              }}
              className="w-4/5 mb-6 block m-auto bg-white h-auto p-5  shadow-md rounded-md hover:bg-gray-50 hover:border border-solid border-gray-300  cursor-pointer  "
            >
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
                <div className="ml-6 flex flex-col w-full">
                  <h2 className="heading4 font-medium text-2xl mb-4">
                    {e.firstName + " " + e.lastName}
                  </h2>

                  <div className="flex  flex-wrap sm:flex-nowrap gap-2 justify-around">
                    <div className=" bg-white border border-solid border-gray-300 rounded-lg p-2 text-center">
                      <div>
                        <h4 className="block line1 font-medium">Experience</h4>
                        <h4 className="inline">{e.duration}</h4>
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
                        <h4 className="inline">{e.city}</h4>
                      </div>
                    </div>

                    <div className="bg-white border border-solid border-gray-300 rounded-lg p-2 text-center">
                      <div>
                        <h4 className="block line1 font-medium">
                          Interview Date
                        </h4>
                        <h4 className="inline">{e.interviewDate}</h4>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className=" relative left-0 bg-blue-500 p-3 mt-8 rounded-full">
                <h2 className="text-white label">{e.}%</h2>
              </div> */}
              </div>
            </div>
          );
        })
      ) : (
        // *********************************************
        // CODE FOR IF THERE ARE NOT RECCOMENDED USER
        // *********************************************
        <div className="mt-12">
          <img className="w-1/4 m-auto shadow-sm" src={NoUserSVG}></img>

          <h2 className="heading2b text-center mt-8">
            Currently no Withdrawn Candidate
          </h2>
        </div>
      )}
    </div>
  );
}

export default WithdrawnCandidateCard;

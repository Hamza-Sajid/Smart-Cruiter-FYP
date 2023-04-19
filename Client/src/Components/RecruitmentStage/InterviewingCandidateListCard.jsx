import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

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

  return (
    <div>
      {user !== null ? (
        user?.map((e, index) => {
          var educationLevelLastValue = e?.level.slice(-1)[0];
          return (
            <div key={index}>
              <div className="w-4/5 block m-auto bg-white h-auto p-5  shadow-md rounded-md hover:bg-gray-50 hover:border border-solid border-gray-300  cursor-pointer  ">
                {e.interviewDate !== "nill" ? (
                  <div className="absolute right-44 top-64 bg-green-600 p-3 rounded-xl">
                    <h4 className="text-white line2">Interviewd</h4>
                  </div>
                ) : (
                  <div className="absolute right-44 top-64 bg-gray-600 p-3 rounded-xl">
                    <h4 className="text-white line2">Not Schedule</h4>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <div>
                    <img
                      width={150}
                      src={e?.ResumeURL}
                      alt=""
                      className="rounded-full"
                    />
                  </div>
                  {/* 2nd Profile Info */}
                  <div className="ml-6 flex  flex-col w-full">
                    <h2 className="heading4 font-medium text-2xl mb-2">
                      {e?.firstName + " " + e?.lastName}
                    </h2>
                    <div className="flex justify-around">
                      <div className=" bg-white border border-solid border-gray-300 rounded-lg p-2 text-center">
                        <div>
                          <h4 className="block line1 font-medium">
                            Experience
                          </h4>
                          <h4 className="inline">{e?.duration[0]}</h4>
                        </div>
                      </div>

                      <div className=" bg-white border border-solid border-gray-300 rounded-lg p-2 text-center">
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

                      <div className=" bg-white border border-solid border-gray-300 rounded-lg p-2 text-center">
                        <div>
                          <h4 className="block line1 font-medium">
                            Interview Date
                          </h4>
                          <h4 className="inline">{e?.interviewDate}</h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <img
                      width={60}
                      src="https://t4.ftcdn.net/jpg/01/11/33/47/360_F_111334729_k7GzccfbcnqitdhZ2FxgnilOprXQeAmE.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h2>No data</h2>
      )}
    </div>
  );
}

export default InterviewingCandidateListCard;

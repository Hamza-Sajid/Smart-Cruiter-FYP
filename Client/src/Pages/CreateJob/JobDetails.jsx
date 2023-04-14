import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FilterProfiles from "../../Components/Dashboard/CreateJob/FIlterProfiles";
import TopRcruitementCycle from "../../Components/Dashboard/CreateJob/TopRcruitementCycle";
import LeftMenuBar from "../../Components/Dashboard/LeftMenuBar";
import TopNavigationBar from "../../Components/Dashboard/TopNavigationBar";
import ShowMoreIcon from "../../assets/icons/show_more.svg";
import NoUser from "../../assets/illustrations/no_user.svg";

function JobDetails() {
  const { id } = useParams();
  const [candidates, setCandidates] = useState();
  useEffect(() => {
    const fetchData = () => {
      // dispath(startFetchingCandidatesData());
      // axios POST request
      const options = {
        url: "http://localhost:3000/job/get-posted-job-details",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        data: {
          job_id: id,
        },
      };

      axios(options)
        .then((response) => {
          setCandidates(response.data);
          // dispath(sucessOnFetchingCandidatesData(response.data));
        })
        .catch((e) => {
          // dispath(errorFetchingCandidatesData(e));
        });
    };

    fetchData();
  }, [0]);
  //To handle nabvigation and move user to next page
  const navigate = useNavigate();
  const handleNavigation = (e) => {
    navigate(`/JobDetails/applied/${e}`);
  };
  console.log(candidates);
  return (
    <div className="flex bg-white">
      <div className="hidden sm:block w-2/12 bg-white h-screen ">
        <LeftMenuBar />
      </div>
      <div className="w-full bg-background ">
        <div className="p-0">
          <TopNavigationBar />
          <TopRcruitementCycle />
          {/* FILTER PROFILE AND APPLICANT LIST SECTION */}
          <div className="flex flex-row  ">
            <div className="w-3/12 ml-4 ">
              <FilterProfiles can={candidates} setCan={setCandidates} />
            </div>

            <div className=" w-11/12 m-auto  mt-0">
              {/*  ~~ HANDLING WITH APPLICANT UI CODE DIRECTLY HERE INSTEAD OF
              COMPONENTS */}
              {candidates?.length !== 0 ? (
                candidates?.map((e, index) => {
                  return (
                    <>
                      <div
                        key={index}
                        onClick={(event) => handleNavigation(e._id)}
                        className="cursor-pointer bg-white p-6  mt-9 w-11/12 flex  m-auto  rounded-lg border border-solid border-gray-200 hover:bg-gray-100"
                      >
                        {/* CANIDATE PROFILE PICTURE */}

                        <div className="w-1/5">
                          <img
                            width={150}
                            height={150}
                            src={e.ResumeURL}
                            alt=""
                            className="rounded-full"
                          />
                        </div>
                        {/* EDUCATION , CITY AND EXPERINCE STAT UI */}
                        <div className="flex flex-col w-full ml-4">
                          {/* NAME FIELD */}
                          <div>
                            <h3 className="heading2b">
                              {e.firstName + " " + e.lastName}
                            </h3>
                          </div>
                          <div className="flex justify-between mt-4">
                            <div className="w-1/4 flex flex-col justify-center text-center border border-solid border-gray-400 rounded-lg  ">
                              <div>
                                <h3 className="line1 font-medium">
                                  Experience
                                </h3>
                              </div>
                              <div>
                                <h3>{e.duration[0] + "/year"}</h3>
                              </div>
                            </div>
                            {/* EDUCATION STAT */}
                            <div className="flex flex-col justify-center text-center border border-solid border-gray-400 rounded-lg w-2/6 ">
                              <div>
                                <h3 className="line1 font-medium">Education</h3>
                              </div>
                              <div>
                                <h3>{e.level[0]}</h3>
                              </div>
                            </div>
                            {/* CITY STAT */}
                            <div className="flex flex-col justify-center text-center border border-solid border-gray-400 rounded-lg w-3/12 ">
                              <div>
                                <h3 className="line1 font-medium">City</h3>
                              </div>
                              <div>
                                <h3>{e.city}</h3>
                              </div>
                            </div>
                            <div className=" w-16">
                              <button className="bg-gray-800 text-white p-1 h-10 w-20 rounded-3xl relative -top-12">
                                Applied
                              </button>

                              <img
                                className="float-right ml-2 cursor-pointer"
                                src={ShowMoreIcon}
                                width={18}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
              ) : (
                <div className="block -ml-10">
                  <img
                    src={NoUser}
                    className="w-2/5 block m-auto  mt-40"
                    alt=""
                  />
                  <h2 className="heading2b text-center mt-6">
                    No Applied Candidate
                  </h2>
                </div>
              )}
              {/* 
              <AppliedApplicantProfile id={id} />

              <AppliedApplicantProfile /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;

import axios from "axios";
import React, { useEffect, useState } from "react";
import ShowMoreIcon from "../../../assets/icons/show_more.svg";
function AppliedApplicantProfile({ id }) {
  // const [candidates, setCandidates] = useState();
  // useEffect(() => {
  //   const fetchData = () => {
  //     // axios POST request
  //     const options = {
  //       url: "http://localhost:3000/job/get-posted-job-details",
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json;charset=UTF-8",
  //       },
  //       data: {
  //         job_id: id,
  //       },
  //     };

  //     axios(options).then((response) => {
  //       setCandidates(response.data);
  //     });
  //   };

  //   fetchData();
  // }, [0]);
  // console.log(candidates);

  return (
    <div className="ml-8">
      <div className="bg-white p-6  mt-9 w-11/12 flex  rounded-lg border border-solid border-gray-200">
        {/* CANIDATE PROFILE PICTURE */}

        <div className="w-1/5">
          <img
            width={100}
            src="https://nextluxury.com/wp-content/uploads/funny-profile-pictures-7.jpg"
            alt=""
            className="rounded-full"
          />
        </div>
        {/* EDUCATION , CITY AND EXPERINCE STAT UI */}
        <div className="flex flex-col w-full ml-4">
          {/* NAME FIELD */}
          <div>
            <h3 className="heading2b">Alex Bhaati</h3>
          </div>
          <div className="flex justify-between mt-4">
            <div className="w-1/4 flex flex-col justify-center text-center border border-solid border-gray-400 rounded-lg  ">
              <div>
                <h3 className="line1 font-medium">Experience</h3>
              </div>
              <div>
                <h3>1/Year</h3>
              </div>
            </div>
            {/* EDUCATION STAT */}
            <div className="flex flex-col justify-center text-center border border-solid border-gray-400 rounded-lg w-2/6 ">
              <div>
                <h3 className="line1 font-medium">Education</h3>
              </div>
              <div>
                <h3>Data Science</h3>
              </div>
            </div>
            {/* CITY STAT */}
            <div className="flex flex-col justify-center text-center border border-solid border-gray-400 rounded-lg w-3/12 ">
              <div>
                <h3 className="line1 font-medium">City</h3>
              </div>
              <div>
                <h3>Attock</h3>
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
    </div>
  );
}

export default AppliedApplicantProfile;

import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function PostedJobDescription() {
  const { id } = useParams();
  const [details, setDetails] = useState();
  const fetchJobDescription = () => {
    // axios POST request
    const options = {
      url: "http://localhost:3000/job/get-jobs/details",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: { id: id },
    };

    axios(options).then((response) => {
      setDetails(response.data.jobs[0]);
    });
  };
  useEffect(() => {
    fetchJobDescription();
  }, [0]);

  const navigate = useNavigate();
  const handle = () => {
    const { org_id, _id } = details;

    navigate(`/portal/job/apply/${_id}`, {
      state: { orgID: org_id },
    });
  };
  return (
    <div className=" h-screen">
      <div className="w-full h-56 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r shadow-xl">
        {/* <img
          style={{ opacity: 0.2 }}
          className="h-56 w-full absolute z-99"
          src="https://usv.edu/wp-content/uploads/2017/02/GamingStudioMain.jpg"
          alt=""
        /> */}
        <h1 className="font-bold text-5xl text-white text-center pt-20">
          {details?.jobPosition}
        </h1>
      </div>

      <div
        className="w-4/5 m-auto bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-300 via-gray-100 to-gray-200 bg-opacity-30 p-6 mt-12 h-auto rounded-lg shadow-lg
        border-2 border-solid border-gray-200
      "
      >
        <h2 className="heading3">Job Description</h2>

        <p
          className="mt-6 heading4"
          dangerouslySetInnerHTML={{ __html: details?.job_description }}
        ></p>
        <button className="btn mt-6 block m-auto shadow-lg" onClick={handle}>
          Apply
        </button>
        <h4 className="font-bold">
          Pay : {details?.salaryRangeFrom} ~~ to ~~ {details?.salaryRangeUpto}
        </h4>
      </div>
    </div>
  );
}

export default PostedJobDescription;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../../assets/illustrations/job-banner.webp";
function PostedJobs() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:3000/job/get-all-jobs"
      );
      setData(response.data.fetchAllPostedJobs);
    };

    fetchData();
  }, [0]);

  const navigate = useNavigate();
  const handleMe = (id) => {};
  return (
    <div className="p-0 w-full sm:p-6 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      <div className="p-0 sm:p-20  flex">
        <div className="p-20 sm:0">
          <h2 className="text-white heading1 inline">Find Your </h2>
          <h2 className="text-purple-500 heading1 inline">Dream</h2>
          <h2 className="text-white heading1 inline ml-5">Job</h2>
          <h2 className="text-transparent block">,</h2>
          <h2 className="text-white heading1 mt-6 ml-12  inline">
            Simply fill form and
          </h2>
          <h2
            className="
            
          hover:bg-gray-200 hover:bg-opacity-20 hover:cursor-pointer
          text-purple-500 heading1 inline ml-5 bg-transparent border border-solid border-purple-500 shadow-sm shadow-gray-200 rounded-md p-2"
          >
            Get Hired
          </h2>
        </div>
        <div className="absolute left-96 z-0">
          <img
            src={Banner}
            className="w-3/4 relative left-96 ml-24 -mt-20 z-0"
            alt=""
          />
        </div>
      </div>
      <div className="bg-gray-50 bg-opacity-5 rounded-md p-4 shadow-md mt-2">
        <h2 className="heading2 mt-4 text-center font-bold text-gray-300">
          All posted jobs
        </h2>

        <div className="flex gap-8 mt-12 flex-wrap justify-center">
          {data?.map((e, index) => {
            return (
              <div
                key={index}
                onClick={() =>
                  handleMe(navigate(`/portal/job/description/${e._id}`))
                }
                className="cursor-pointer w-52 rounded-lg text-center flex items-center h-52 bg-white bg-opacity-20 shadow-sm shadow-gray-900
                hover:bg-gray-700             hover:border hover:border-solid border-gray-800 "
              >
                <h2 className="heading2b text-gray-200">{e.jobPosition}</h2>
              </div>
            );
          })}
        </div>
      </div>

      <footer className="bg-gray-100 bg-opacity-10 text-center heading4 text-gray-200 mt-16 rounded-lg p-2">
        Powerd By : <p className="inline  font-medium"> Smart Cruiter</p>
      </footer>
    </div>
  );
}

export default PostedJobs;

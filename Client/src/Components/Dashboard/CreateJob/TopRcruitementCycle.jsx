import React from "react";
import { useNavigate } from "react-router-dom";

function TopRcruitementCycle({ id }) {
  const navigate = useNavigate();
  return (
    <div className=" flex justify-center">
      <div className="bg-white  w-4/5  flex sm:overflow-auto overflow-x-scroll sm:gap-0 gap-2 m-4 p-4  rounded-lg shadows justify-between items-center">
        <button className="bg-primary text-white p-3 rounded-lg line2">
          Applied Candidates
        </button>

        <button
          onClick={() => navigate(`/JobDetails/interviewing/${id}`)}
          className="bg-secondry text-white p-3 rounded-lg line2"
        >
          Interviewing
        </button>

        <button
          className="bg-secondry text-white p-3 rounded-lg line2"
          onClick={() => navigate(`/JobDetails/reccomended/${id}`)}
        >
          Reccomended
        </button>

        <button className="bg-secondry text-white p-3 rounded-lg w-24 line2">
          Hired
        </button>

        <button className="bg-secondry text-white p-3 rounded-lg w-28 line2">
          Declined
        </button>
        <button className="bg-secondry text-white p-3 rounded-lg line2">
          Withdrawn
        </button>
      </div>
    </div>
  );
}

export default TopRcruitementCycle;

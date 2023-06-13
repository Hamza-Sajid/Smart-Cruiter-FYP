import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DeleteIcon from "../../../assets/icons/delete.svg";
import SocialIcon from "../../../assets/icons/share.svg";
function CreatedJobElement({ data, setData }) {
  const navigate = useNavigate();
  const handleJob = (id) => {
    navigate(`/JobDetails/${id}`);
  };
  // console.log(data);
  return (
    <div className="flex flex-wrap gap-6">
      {data?.map((e, index) => {
        return (
          <div
            key={index}
            onClick={(event) => handleJob(e._id)}
            title="Job"
            className="bg-white hover:bg-gray-100  hover:border hover:border-solid hover:border-gray-300 flex flex-wrap  items-center w-80 pl-4 pr-4 pt-2 modalShadow cursor-pointer "
          >
            {/* <Link to={"/JobDetails"}> */}
            <div className=" w-full p-2 flex justify-between items-center ">
              <h2 className="heading3 inline font-medium">{e.jobPosition}</h2>
              <button
                className="inline float-right mr-4 p-2 w-20 rounded-full font-medium text-primarytext  border-2 border-solid
               border-secondry bg-secondry text-white hover:text-white"
              >
                Active
              </button>
            </div>

            {/* PART TO HANDLE DATA */}
            <div className="w-full flex h-28">
              <div className="w-1/2 flex flex-col justify-center text-center">
                <div className="heading4">Totall Candidates</div>
                <div className="heading4 font-medium">{e.applicants_no}</div>
              </div>

              <div className="w-1/2  flex flex-col justify-center text-center">
                <div className="heading4  ">Active Candidates</div>
                <div className="heading4 font-medium">0</div>
              </div>
            </div>

            {/* PART TO SHOW SHARE JOB-ID AND SHARE BUTTONS */}

            <div className="flex flex-row w-full pb-4">
              <div className=" w-4/5 ml-4">
                <p className="text-sm heading4">JOB-ID: {index}</p>
              </div>

              <div className="flex justify-around items-center w-1/4">
                <img src={DeleteIcon} alt="" className="inline w-4 h-4" />
                <img src={SocialIcon} alt="" className="inline w-4 h-4" />
              </div>
            </div>
            {/* </Link> */}
          </div>
        );
      })}
    </div>
  );
}

export default CreatedJobElement;

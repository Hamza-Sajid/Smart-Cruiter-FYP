import React from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "../../../assets/icons/delete.svg";
import SocialIcon from "../../../assets/icons/share.svg";
function CreatedJobElement() {
  return (
    <div
      title="Job"
      className="bg-white hover:bg-gray-50 flex flex-col items-center w-1/3 pl-4 pr-4 modalShadow cursor-pointer "
    >
      {/* <Link to={"/JobDetails"}> */}
      <div className=" w-full p-2 flex justify-between items-center ">
        <h2 className="heading3 inline font-medium">React Dev</h2>
        <button className="inline float-right mr-4 p-2 w-20 rounded-full font-medium text-primarytext  border-2 border-solid border-secondry hover:bg-secondry hover:text-white">
          Active
        </button>
      </div>

      {/* PART TO HANDLE DATA */}
      <div className="w-full flex h-28">
        <div className="w-1/2 flex flex-col justify-center text-center">
          <div className="heading4">Totall Candidates</div>
          <div className="heading4 font-medium">110</div>
        </div>

        <div className="w-1/2  flex flex-col justify-center text-center">
          <div className="heading4  ">Active Candidates</div>
          <div className="heading4 font-medium">12</div>
        </div>
      </div>

      {/* PART TO SHOW SHARE JOB-ID AND SHARE BUTTONS */}

      <div className="flex flex-row w-full pb-4">
        <div className=" w-4/5 ml-4">
          <p className="text-sm heading4">JOB-ID: 02</p>
        </div>

        <div className="flex justify-around items-center w-1/4">
          <img src={DeleteIcon} alt="" className="inline w-4 h-4" />
          <img src={SocialIcon} alt="" className="inline w-4 h-4" />
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
}

export default CreatedJobElement;

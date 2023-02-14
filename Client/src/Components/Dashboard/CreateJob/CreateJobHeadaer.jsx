import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import DownImg from "../../../assets/icons/down.svg";
function CreateJobHeadaer() {
  const [jobStatus, SetJobStatus] = useState(false);
  const [departmentStatus, SetDepartmentStatus] = useState(false);
  return (
    <div className="flex  items-center  topNavigationBoxShadow bg-transparent mt-2 ml-1 h-14  ">
      {/* --> Main Create Job Button */}

      <div className="w-2/6 text-center">
        <Link to={"/postjob"}>
          <button
            type="submit"
            className="btnfont btn btn-md  bg-primary border-none hover:bg-black"
          >
            Create New Job
          </button>
        </Link>
      </div>

      {/* 2nd flex div */}

      <div className="w-full flex justify-end items-center mr-12  ">
        {/* ==> Job Status Button */}
        <button
          onClick={() => SetJobStatus(!jobStatus)}
          className="btn bg-transparent text-secondry normal-case gap-2 ml-8  rounded-lg border-2 border-solid border-secondry hover:bg-primary  hover:border-solid hover:border-primary hover:text-white "
        >
          Job Status
          <img className="ml-6" src={DownImg}></img>
        </button>
        {jobStatus == true ? (
          <div className=" right-52 top-32 absolute dropdown-bottom">
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40 "
            >
              <li>
                <a>Active</a>
              </li>
              <li>
                <a>Disabled</a>
              </li>
            </ul>
          </div>
        ) : null}

        <button
          onClick={() => SetDepartmentStatus(!departmentStatus)}
          className="btn bg-transparent text-secondry normal-case gap-2 ml-8  rounded-lg border-2 border-solid border-secondry hover:bg-primary  hover:border-solid hover:border-primary hover:text-white "
        >
          Department
          <img className="ml-6" src={DownImg}></img>
        </button>

        {departmentStatus == true ? (
          <div className=" right- top-32 absolute dropdown-bottom">
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40 "
            >
              <li>
                <a>IT</a>
              </li>
              <li>
                <a>HR</a>
              </li>
              <li>
                <a>Markeeting</a>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default CreateJobHeadaer;

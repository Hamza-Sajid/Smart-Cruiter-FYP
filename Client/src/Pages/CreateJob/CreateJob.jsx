import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CreatedJobElement from "../../Components/Dashboard/CreateJob/CreatedJobElement";
import CreateJobHeadaer from "../../Components/Dashboard/CreateJob/CreateJobHeadaer";
import LeftMenuBar from "../../Components/Dashboard/LeftMenuBar";
import TopNavigationBar from "../../Components/Dashboard/TopNavigationBar";
function CreateJob() {
  return (
    <div className="flex bg-white">
      <div className="hidden sm:block w-2/12 bg-white h-screen ">
        <LeftMenuBar />
      </div>
      <div className="w-full bg-background ">
        <div className="p-0">
          <TopNavigationBar />

          <CreateJobHeadaer />
        </div>

        <div className="ml-8 flex flex-wrap  gap-6 mt-12 w-11/12 m-auto p-2">
          <CreatedJobElement />
          {/* 
          <CreatedJobElement />

          <CreatedJobElement />

          <CreatedJobElement /> */}
        </div>
      </div>
    </div>
  );
}

export default CreateJob;

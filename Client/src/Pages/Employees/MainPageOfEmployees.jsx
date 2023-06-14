import React from "react";
import { Link } from "react-router-dom";
import LeftMenuBar from "../../Components/Dashboard/LeftMenuBar";
import TopNavigationBar from "../../Components/Dashboard/TopNavigationBar";

function MainPageOfEmployees() {
  return (
    <div className="flex bg-white">
      <div className="hidden sm:block w-2/12 bg-white h-screen">
        <LeftMenuBar />
      </div>
      <div className="w-full bg-background">
        <div className="p-0">
          <TopNavigationBar />
        </div>
        <div className="p-6 mt-4 flex items-center gap-16">
          <h2 className="heading3">Your Employees</h2>
          <Link to={"add"}>
            <button className="btn bg-primary border-none btn-sm">
              Add Employees
            </button>
          </Link>
        </div>
        <div className="mt-12">
          <div className="w-4/5 block m-auto bg-white h-auto p-5  shadow-md rounded-md hover:bg-gray-50 hover:border border-solid border-gray-300  cursor-pointer  ">
            <h2 className="heading4 inline">Name: Ali</h2>
            <h2 className="heading4 inline ml-12 float-right">
              Department: HR
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPageOfEmployees;

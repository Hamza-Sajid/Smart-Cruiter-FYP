import React from "react";
import LeftMenuBar from "../../Components/Dashboard/LeftMenuBar";
import TopNavigationBar from "../../Components/Dashboard/TopNavigationBar";
import ProfileIcon from "../../assets/icons/profileIcon.png";
import TeamIcon from "../../assets/icons/teamIcon.png";
import TempleteIcon from "../../assets/icons/templeteIcon.png";
import CareerPage from "../../assets/icons/careerPageIcon.png";
import { Link } from "react-router-dom";
function MainPageOfSetting() {
  return (
    <div className="flex bg-white">
      <div className="hidden sm:block w-2/12 bg-white h-screen">
        <LeftMenuBar />
      </div>
      <div className="w-full bg-background">
        <div className="p-0">
          <TopNavigationBar title={"Settings"} />
        </div>

        <div className="p-6 mt-12 flex flex-wrap gap-20 w-9/12 m-auto">
          <Link to={"profile"}>
            <div className="w-48 h-auto bg-white p-3 rounded-md shadow-md cursor-pointer hover:bg-gray-50 hover:modalShadow">
              <img className="m-auto" src={ProfileIcon} alt="" />

              <h2 className="text-center heading3 font-medium mt-4 mb-0">
                Edit Profile
              </h2>
            </div>
          </Link>

          {/* //2nd value */}

          <div className="w-48 h-auto bg-white p-3 rounded-md shadow-md cursor-pointer hover:bg-gray-50 hover:modalShadow justify-center items-center">
            <img className="m-auto" src={TeamIcon} alt="" />

            <h2 className="text-center heading3 font-medium mt-4 mb-0">
              Team Members
            </h2>
          </div>

          {/* 3rd value */}

          <div className="w-48 h-auto bg-white p-3 rounded-md shadow-md cursor-pointer hover:bg-gray-50 hover:modalShadow">
            <img className="m-auto" src={TempleteIcon} alt="" />

            <h2 className="text-center heading3 font-medium mt-4 mb-0">
              Templetes
            </h2>
          </div>

          {/* 4th value */}
          {/* 
          <div className="w-48 h-auto bg-white p-3 rounded-md shadow-md cursor-pointer hover:bg-gray-50 hover:modalShadow">
            <img className="m-auto" src={CareerPage} alt="" />

            <h2 className="text-center heading3 font-medium mt-4 mb-0">
              Career Page
            </h2>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default MainPageOfSetting;

import React from "react";
import LeftMenuBar from "../../Components/Dashboard/LeftMenuBar";
import TopNavigationBar from "../../Components/Dashboard/TopNavigationBar";
import ProfileSetup from "../../Components/ProfileSetup/ProfileSetup";

function HomePage() {
  return (
    <div className="flex bg-white">
      <div className="hidden sm:block w-2/12 bg-white h-screen">
        <LeftMenuBar />
      </div>
      <div className="w-full bg-background">
        <div className="p-0">
          <TopNavigationBar />
          <h1 className="heading1 ml-12  mt-20 text-transparent text-3xl sm:text-6xl bg-clip-text bg-gradient-to-r from-blue-500 to-black">
            Welcome to Smart Cruiter
          </h1>
          <div className="bg-white w-full sm:w-3/5 rounded-xl m-auto mt-4 topNavigationBoxShadow">
            <ProfileSetup />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

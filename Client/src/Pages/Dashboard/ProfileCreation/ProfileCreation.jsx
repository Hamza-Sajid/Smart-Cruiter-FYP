import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import NavigationTab from "../../../Components/Dashboard/ProfileCreation/NavigationTab";
import ProfileP1 from "../../../Components/ProfileSetup/ProfileP1";

function ProfileCreation() {
  return (
    <div className="bg-background w-full h-screen">
      <h2 className="heading2 text-center pt-10">Profile Creation</h2>
      <ProfileP1 />
    </div>
  );
}

export default ProfileCreation;

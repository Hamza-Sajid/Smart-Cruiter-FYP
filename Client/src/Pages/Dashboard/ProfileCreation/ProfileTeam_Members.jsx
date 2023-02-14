import React from "react";
import ProfileAddTeam from "../../../Components/ProfileSetup/ProfileAddTeam";

function ProfileTeam_Members() {
  return (
    <div>
      <div className="bg-background w-full h-screen">
        <h2 className="heading2 text-center pt-10">Profile Creation</h2>
        <ProfileAddTeam />
      </div>
    </div>
  );
}

export default ProfileTeam_Members;

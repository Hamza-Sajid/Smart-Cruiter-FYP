import React from "react";
import { useNavigate } from "react-router-dom";
import Home from "../../assets/illustrations/home.svg";
function ProfileSetup() {
  const navigate = useNavigate();
  return (
    <div className="">
      <h2 className="text-center heading2b pt-14">
        Start setting up your company account
      </h2>

      <img className="block m-auto mt-8" width={250} src={Home} alt="" />
      <div className=" text-center mt-4 mb-2 pb-6 ">
        <button
          type="submit"
          onClick={() => navigate("/profilesetup")}
          className="btnfont btn btn-wide  bg-primary border-none hover:bg-black"
        >
          Let's Start
        </button>
      </div>
    </div>
  );
}

export default ProfileSetup;

import React from "react";
import NavigationTab from "../Dashboard/ProfileCreation/NavigationTab";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Profile_Social3() {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <div className="bg-white modalShadow w-3/5 m-auto mt-10  pb-12 ">
        <NavigationTab
          first_value={"Organization"}
          second_value={"Office Details"}
          third_value={"Social Links"}
          fourth_value={""}
          active={3}
          text={3}
        />
        {/* THIS MENUE MAIN INPUT CONTENT */}
        <div className="mt-12 w-3/4 m-auto ">
          <h2 className="heading3 ">Add Social Link's</h2>

          {/* HANDLING SOCIAL INPUT */}

          <div className="flex mt-8">
            <div className=" flex">
              <FaFacebookF className="text-3xl mr-3 text-blue-800" />
              <input
                type="url"
                name="f_name"
                id="f_name"
                placeholder="Facebook Profile"
                autoComplete="on"
                className="input input-bordered h-10 w-full max-w-xs inline"
              />
            </div>

            <div className=" flex ml-6">
              <FaLinkedinIn className="text-3xl mr-3 text-blue-600" />
              <input
                type="url"
                name="f_name"
                id="f_name"
                placeholder="LinkedIn"
                autoComplete="on"
                className="input input-bordered h-10 w-full max-w-xs inline"
              />
            </div>
          </div>

          {/* HERE IS THE 2ND LINES OF SOCIAL LINK UI CODE */}

          <div className=" flex mt-10">
            <div className=" flex">
              <FaInstagram className="text-3xl mr-3 text-pink-500" />
              <input
                type="url"
                name="f_name"
                id="f_name"
                placeholder="Insta Page"
                autoComplete="on"
                className="input input-bordered h-10 w-full max-w-xs inline"
              />
            </div>

            <div className="flex ml-6">
              <FaYoutube className="text-4xl mr-3 text-red-500" />
              <input
                type="url"
                name="f_name"
                id="f_name"
                placeholder="YouTube Channel"
                autoComplete="on"
                className="input input-bordered h-10 w-full max-w-xs inline"
              />
            </div>
          </div>
        </div>
        <button
          onClick={() => navigate("/profilesetup/addteam")}
          type="submit"
          className=" mt-12 btnfont btn btn-wide  bg-primary border-none hover:bg-black text-center m-auto block "
        >
          NEXT{" "}
        </button>
      </div>
    </div>
  );
}

export default Profile_Social3;

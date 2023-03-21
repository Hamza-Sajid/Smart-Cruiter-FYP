import React from "react";
import NavigationTab from "../Dashboard/ProfileCreation/NavigationTab";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

function Profile_Social3() {
  const location = useLocation();
  // const { basicInfo, image } = location.state;
  console.log(location.state);

  // => A new object which can handle old + new value to pass to the next component using useNavigate()
  const [socialDetails, setSocialDetails] = useState({
    facebook_url: "",
    insta_url: "",
    linkedin_url: "asd",
    yt_url: "dsa",
  });
  console.log(socialDetails);

  //An data object to pass it to the next Route
  const Office_Profile = {
    office_details: location.state,
    social_links: socialDetails,
  };
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
                onChange={(e) =>
                  setSocialDetails((oldValue) => ({
                    ...oldValue,
                    facebook_url: e.target.value,
                  }))
                }
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
                onChange={(e) =>
                  setSocialDetails((old) => ({
                    ...old,
                    linkedin_url: e.target.value,
                  }))
                }
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
                onChange={(e) =>
                  setSocialDetails((old) => ({
                    ...old,
                    insta_url: e.target.value,
                  }))
                }
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
                onChange={(e) =>
                  setSocialDetails((old) => ({
                    ...old,
                    yt_url: e.target.value,
                  }))
                }
                placeholder="YouTube Channel"
                autoComplete="on"
                className="input input-bordered h-10 w-full max-w-xs inline"
              />
            </div>
          </div>
        </div>
        <button
          onClick={() =>
            navigate("/profilesetup/addteam", { state: { Office_Profile } })
          }
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
